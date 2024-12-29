'use client'

import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { Search, Plus, Edit2, Trash2, X, TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react'
import { toast } from 'sonner'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

interface Profile {
  id: string
  name: string | null
  email: string | null
  role: string
  avatar_url: string | null
  phone: string | null
  createdAt: string
}

interface Purchase {
  id: string
  user_id: string
  course_type: string
  order_code: string
  amount: number
  payment_status: string
  created_at: string
  user?: Profile | null
}

type ActiveTab = 'profiles' | 'purchases' | 'statistics'

type EditModalType = {
  type: 'profile' | 'purchase'
  data: Profile | Purchase | null
}

interface StatisticsData {
  totalUsers: number
  totalPurchases: number
  totalRevenue: number
  revenueByMonth: {
    month: string
    revenue: number
  }[]
  revenueByDay: {
    date: string
    revenue: number
  }[]
  purchasesByType: {
    type: string
    count: number
  }[]
  purchasesByStatus: {
    status: string
    count: number
  }[]
}

export default function AdminPage() {
  const { user, loading } = useAuth()
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [activeTab, setActiveTab] = useState<ActiveTab>('profiles')
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [editModal, setEditModal] = useState<EditModalType | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<{id: string, type: 'profile' | 'purchase'} | null>(null)
  const [statistics, setStatistics] = useState<StatisticsData | null>(null)

  useEffect(() => {
    async function checkAdminAndLoadData() {
      try {
        if (!user) {
          console.log('No user found')
          return
        }

        console.log('Current user:', user)
        
        // First check if user exists in profiles
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()

        if (profileError) {
          console.error('Profile error:', {
            message: profileError.message,
            details: profileError.details,
            hint: profileError.hint,
            code: profileError.code
          })
          throw new Error('Không thể tải thông tin người dùng')
        }

        console.log('Profile data:', profileData)

        if (!profileData || profileData.role !== 'admin') {
          console.log('User is not admin:', profileData?.role)
          toast.error('Bạn không có quyền truy cập trang này')
          redirect('/')
          return
        }

        console.log('Loading data as admin...')

        // Load profiles
        const { data: profilesData, error: profilesError } = await supabase
          .from('profiles')
          .select('id, name, email, role, avatar_url, phone, createdAt')
          .order('createdAt', { ascending: false })

        if (profilesError) {
          console.error('Profiles error:', {
            message: profilesError.message,
            details: profilesError.details,
            hint: profilesError.hint,
            code: profilesError.code
          })
          throw new Error('Không thể tải danh sách người dùng')
        }

        console.log('Profiles data:', profilesData)
        setProfiles(profilesData || [])

        // Load purchases with user info
        console.log('Loading purchases...')
        const { data: purchasesData, error: purchasesError } = await supabase
          .from('purchases')
          .select('id, user_id, course_type, order_code, amount, payment_status, created_at')
          .order('created_at', { ascending: false })

        if (purchasesError) {
          console.error('Purchases error:', {
            message: purchasesError.message,
            details: purchasesError.details,
            hint: purchasesError.hint,
            code: purchasesError.code
          })
          throw new Error('Không thể tải danh sách đơn hàng')
        }

        console.log('Purchases data:', purchasesData)

        // If we have purchases, load user info for each purchase
        if (purchasesData) {
          const purchasesWithUsers = await Promise.all(
            purchasesData.map(async (purchase) => {
              const { data: userData } = await supabase
                .from('profiles')
                .select('id, name, email, role, avatar_url, phone, createdAt')
                .eq('id', purchase.user_id)
                .single()
              
              return {
                ...purchase,
                user: userData || null
              } as Purchase
            })
          )
          setPurchases(purchasesWithUsers)
        }

        // Load statistics data
        const now = new Date()
        const startOfYear = new Date(now.getFullYear(), 0, 1)

        // Get total users
        const { count: totalUsers } = await supabase
          .from('profiles')
          .select('*', { count: 'exact' })

        // Get purchases data for statistics
        const { data: statsData, error: statsError } = await supabase
          .from('purchases')
          .select('*')
          .gte('created_at', startOfYear.toISOString())
          .order('created_at', { ascending: true })

        if (statsError) {
          console.error('Stats error:', statsError)
          throw new Error('Không thể tải dữ liệu thống kê')
        }

        if (statsData) {
          // Calculate total revenue and purchases
          const totalPurchases = statsData.length
          const totalRevenue = statsData.reduce((sum, p) => sum + p.amount, 0)

          // Calculate revenue by month
          const revenueByMonth = Array.from({ length: 12 }, (_, i) => {
            const monthPurchases = statsData.filter(p => 
              new Date(p.created_at).getMonth() === i &&
              p.payment_status === 'completed'
            )
            return {
              month: new Date(now.getFullYear(), i, 1).toLocaleDateString('vi-VN', { month: 'short' }),
              revenue: monthPurchases.reduce((sum, p) => sum + p.amount, 0)
            }
          })

          // Calculate revenue by day for current month
          const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
          const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)

          const revenueByDay = Array.from(
            { length: endOfMonth.getDate() },
            (_, i) => {
              const date = new Date(now.getFullYear(), now.getMonth(), i + 1)
              const dayPurchases = statsData.filter(p => 
                new Date(p.created_at).toDateString() === date.toDateString() &&
                p.payment_status === 'completed'
              )
              return {
                date: date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' }),
                revenue: dayPurchases.reduce((sum, p) => sum + p.amount, 0)
              }
            }
          )

          // Calculate purchases by type
          const purchasesByType = [
            {
              type: 'Cơ bản',
              count: statsData.filter(p => p.course_type === 'basic').length
            },
            {
              type: 'Nâng cao',
              count: statsData.filter(p => p.course_type === 'intermediate').length
            }
          ]

          // Calculate purchases by status
          const purchasesByStatus = [
            {
              status: 'Hoàn thành',
              count: statsData.filter(p => p.payment_status === 'completed').length
            },
            {
              status: 'Hoàn tiền',
              count: statsData.filter(p => p.payment_status === 'refunded').length
            },
            {
              status: 'Đã hủy',
              count: statsData.filter(p => p.payment_status === 'cancelled').length
            }
          ]

          setStatistics({
            totalUsers: totalUsers || 0,
            totalPurchases,
            totalRevenue,
            revenueByMonth,
            revenueByDay,
            purchasesByType,
            purchasesByStatus
          })
        }

        console.log('Data loaded successfully')

      } catch (err) {
        console.error('Error in checkAdminAndLoadData:', err)
        if (err instanceof Error) {
          console.error('Error details:', err.message, err.stack)
        }
        const errorMessage = err instanceof Error ? err.message : 'Đã có lỗi xảy ra'
        setError(errorMessage)
        toast.error(errorMessage)
      } finally {
        setIsLoading(false)
      }
    }

    checkAdminAndLoadData()
  }, [user])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredData = {
    profiles: profiles.filter(p => 
      p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email?.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    purchases: purchases.filter(p =>
      p.order_code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.user?.email?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  const handleEdit = (type: 'profile' | 'purchase', data: Profile | Purchase) => {
    setEditModal({ type, data })
  }

  const handleDelete = async (type: 'profile' | 'purchase', id: string) => {
    setDeleteConfirm({ id, type })
  }

  const confirmDelete = async () => {
    if (!deleteConfirm) return

    try {
      const { type, id } = deleteConfirm
      const table = type === 'profile' ? 'profiles' : 'purchases'
      
      const { error } = await supabase
        .from(table)
        .delete()
        .eq('id', id)

      if (error) throw error

      // Refresh data
      if (type === 'profile') {
        setProfiles(profiles.filter(p => p.id !== id))
      } else {
        setPurchases(purchases.filter(p => p.id !== id))
      }

      toast.success('Xóa thành công')
    } catch (err) {
      console.error('Delete error:', err)
      toast.error('Không thể xóa. Vui lòng thử lại')
    } finally {
      setDeleteConfirm(null)
    }
  }

  const handleSaveEdit = async () => {
    if (!editModal?.data) return

    try {
      const { type, data } = editModal
      const table = type === 'profile' ? 'profiles' : 'purchases'
      
      const { error } = await supabase
        .from(table)
        .update(data)
        .eq('id', data.id)

      if (error) throw error

      // Refresh data
      if (type === 'profile') {
        setProfiles(profiles.map(p => p.id === data.id ? data as Profile : p))
      } else {
        setPurchases(purchases.map(p => p.id === data.id ? data as Purchase : p))
      }

      toast.success('Cập nhật thành công')
      setEditModal(null)
    } catch (err) {
      console.error('Update error:', err)
      toast.error('Không thể cập nhật. Vui lòng thử lại')
    }
  }

  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-secondary pt-24 flex items-center justify-center">
        <LoadingSpinner size={40} />
      </div>
    )
  }

  if (!user) {
    redirect('/auth')
  }

  if (error) {
    return (
      <div className="min-h-screen bg-secondary pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-light transition-all"
          >
            Thử lại
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-secondary pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
          Quản lý hệ thống
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-secondary-light rounded-full p-1 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab('profiles')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'profiles'
                  ? 'bg-primary text-secondary'
                  : 'text-gray-300 hover:text-primary'
              }`}
            >
              Người dùng
            </button>
            <button
              onClick={() => setActiveTab('purchases')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'purchases'
                  ? 'bg-primary text-secondary'
                  : 'text-gray-300 hover:text-primary'
              }`}
            >
              Đơn hàng
            </button>
            <button
              onClick={() => setActiveTab('statistics')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'statistics'
                  ? 'bg-primary text-secondary'
                  : 'text-gray-300 hover:text-primary'
              }`}
            >
              Thống kê
            </button>
          </div>
        </div>

        {/* Search and Add Button */}
        <div className="mb-6 flex justify-between items-center">
          <div className="relative flex-1 max-w-lg">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full bg-secondary-darker border border-primary/10 rounded-lg pl-10 pr-4 py-2 text-gray-300 focus:outline-none focus:border-primary/30"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
          </div>
          
          <button className="ml-4 bg-primary text-secondary px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-light transition-all">
            <Plus className="h-5 w-5" />
            <span>Thêm mới</span>
          </button>
        </div>

        {/* Content */}
        <div className="bg-secondary-light rounded-xl border border-primary/10 overflow-hidden">
          {activeTab === 'profiles' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary-darker">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Tên
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Vai trò
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Ngày tạo
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10">
                  {filteredData.profiles.map((profile) => (
                    <tr key={profile.id} className="hover:bg-secondary-darker">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {profile.name || 'Chưa cập nhật'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {profile.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          profile.role === 'admin' 
                            ? 'bg-primary/20 text-primary'
                            : 'bg-gray-500/20 text-gray-300'
                        }`}>
                          {profile.role || 'user'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {new Date(profile.createdAt).toLocaleDateString('vi-VN')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          onClick={() => handleEdit('profile', profile)}
                          className="text-primary hover:text-primary-light mr-3"
                        >
                          <Edit2 className="h-5 w-5" />
                        </button>
                        <button 
                          onClick={() => handleDelete('profile', profile.id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'purchases' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary-darker">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Mã đơn hàng
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Người dùng
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Khóa học
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Số tiền
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Trạng thái
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Ngày tạo
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10">
                  {filteredData.purchases.map((purchase) => (
                    <tr key={purchase.id} className="hover:bg-secondary-darker">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {purchase.order_code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {purchase.user?.email || 'Không xác định'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          purchase.course_type === 'basic'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-green-500/20 text-green-300'
                        }`}>
                          {purchase.course_type === 'basic' ? 'Cơ bản' : 'Nâng cao'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {purchase.amount.toLocaleString('vi-VN')}đ
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          purchase.payment_status === 'completed'
                            ? 'bg-green-500/20 text-green-300'
                            : purchase.payment_status === 'refunded'
                            ? 'bg-red-500/20 text-red-300'
                            : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {purchase.payment_status === 'completed' 
                            ? 'Hoàn thành' 
                            : purchase.payment_status === 'refunded'
                            ? 'Hoàn tiền'
                            : 'Đã hủy'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {new Date(purchase.created_at).toLocaleDateString('vi-VN')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          onClick={() => handleEdit('purchase', purchase)}
                          className="text-primary hover:text-primary-light mr-3"
                        >
                          <Edit2 className="h-5 w-5" />
                        </button>
                        <button 
                          onClick={() => handleDelete('purchase', purchase.id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'statistics' && statistics && (
            <div className="space-y-8">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Tổng người dùng</p>
                      <h3 className="text-2xl font-bold text-primary mt-1">
                        {statistics.totalUsers.toLocaleString()}
                      </h3>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Tổng đơn hàng</p>
                      <h3 className="text-2xl font-bold text-primary mt-1">
                        {statistics.totalPurchases.toLocaleString()}
                      </h3>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-full">
                      <ShoppingBag className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Tổng doanh thu</p>
                      <h3 className="text-2xl font-bold text-primary mt-1">
                        {statistics.totalRevenue.toLocaleString()}đ
                      </h3>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-full">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-6">Doanh thu theo tháng</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                      data={statistics.revenueByMonth}
                      margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" width={80} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937',
                          border: 'none',
                          borderRadius: '0.5rem'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        name="Doanh thu"
                        stroke="#FFD700"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Daily Revenue Chart */}
              <div className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-6">Doanh thu theo ngày (tháng {new Date().getMonth() + 1})</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={statistics.revenueByDay}
                      margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis 
                        dataKey="date" 
                        stroke="#9CA3AF"
                        interval={2}
                      />
                      <YAxis stroke="#9CA3AF" width={80} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937',
                          border: 'none',
                          borderRadius: '0.5rem'
                        }}
                        formatter={(value) => `${Number(value).toLocaleString('vi-VN')}đ`}
                      />
                      <Legend />
                      <Bar 
                        dataKey="revenue" 
                        name="Doanh thu"
                        fill="#FFD700"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Purchase Distribution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Course Type Distribution */}
                <div className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-6">Phân bố khóa học</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart margin={{ top: 10, right: 30, left: 40, bottom: 10 }}>
                        <Pie
                          data={statistics.purchasesByType}
                          dataKey="count"
                          nameKey="type"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#FFD700"
                          label
                        >
                          {statistics.purchasesByType.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={index === 0 ? '#3B82F6' : '#10B981'} 
                            />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1F2937',
                            border: 'none',
                            borderRadius: '0.5rem'
                          }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Payment Status Distribution */}
                <div className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-6">Trạng thái thanh toán</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={statistics.purchasesByStatus}
                        margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="status" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" width={80} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1F2937',
                            border: 'none',
                            borderRadius: '0.5rem'
                          }}
                        />
                        <Legend />
                        <Bar 
                          dataKey="count" 
                          name="Số lượng"
                          fill="#FFD700"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-secondary-light p-6 rounded-xl max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-primary">
                {editModal.type === 'profile' ? 'Sửa thông tin người dùng' : 'Sửa thông tin đơn hàng'}
              </h3>
              <button 
                onClick={() => setEditModal(null)}
                className="text-gray-400 hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {editModal.type === 'profile' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Tên
                  </label>
                  <input
                    type="text"
                    value={(editModal.data as Profile).name || ''}
                    onChange={(e) => setEditModal({
                      ...editModal,
                      data: { ...(editModal.data as Profile), name: e.target.value }
                    })}
                    className="w-full bg-secondary border border-primary/10 rounded-lg px-4 py-2 text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={(editModal.data as Profile).email || ''}
                    onChange={(e) => setEditModal({
                      ...editModal,
                      data: { ...(editModal.data as Profile), email: e.target.value }
                    })}
                    className="w-full bg-secondary border border-primary/10 rounded-lg px-4 py-2 text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Vai trò
                  </label>
                  <select
                    value={(editModal.data as Profile).role}
                    onChange={(e) => setEditModal({
                      ...editModal,
                      data: { ...(editModal.data as Profile), role: e.target.value }
                    })}
                    className="w-full bg-secondary border border-primary/10 rounded-lg px-4 py-2 text-gray-300"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            )}

            {editModal.type === 'purchase' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Trạng thái
                  </label>
                  <select
                    value={(editModal.data as Purchase).payment_status}
                    onChange={(e) => setEditModal({
                      ...editModal,
                      data: { ...(editModal.data as Purchase), payment_status: e.target.value }
                    })}
                    className="w-full bg-secondary border border-primary/10 rounded-lg px-4 py-2 text-gray-300"
                  >
                    <option value="completed">Hoàn thành</option>
                    <option value="refunded">Hoàn tiền</option>
                    <option value="cancelled">Đã hủy</option>
                  </select>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setEditModal(null)}
                className="px-4 py-2 text-gray-300 hover:text-white"
              >
                Hủy
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-primary-light"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-secondary-light p-6 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-primary mb-4">
              Xác nhận xóa
            </h3>
            <p className="text-gray-300 mb-6">
              Bạn có chắc chắn muốn xóa {deleteConfirm.type === 'profile' ? 'người dùng' : 'đơn hàng'} này?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 text-gray-300 hover:text-white"
              >
                Hủy
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
} 