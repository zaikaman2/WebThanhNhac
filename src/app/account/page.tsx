'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import toast from 'react-hot-toast'
import { getProfile, updateProfile, type Profile } from '@/lib/profile'
import { supabase } from '@/lib/supabaseClient'
import { BookOpen, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface Purchase {
  id: string
  course_type: string
  created_at: string
  amount: number
  payment_status: string
}

export default function AccountPage() {
  const { user, loading } = useAuth()
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isEditing, setIsEditing] = useState(false)
  const [updateLoading, setUpdateLoading] = useState(false)
  const [profileLoading, setProfileLoading] = useState(true)
  const [purchases, setPurchases] = useState<Purchase[]>([])

  const availableCourses = [
    {
      type: 'basic',
      title: 'Khóa học cơ bản',
      description: 'Nền tảng vững chắc cho người mới bắt đầu',
      price: 299000,
      features: ['13 bài học chi tiết', '3 tháng học tập', 'Kỹ thuật cơ bản']
    },
    {
      type: 'intermediate',
      title: 'Khóa học nâng cao',
      description: 'Phát triển kỹ năng chuyên nghiệp',
      price: 499000,
      features: ['21 bài học chuyên sâu', '6 tháng học tập', 'Kỹ thuật nâng cao']
    }
  ]

  useEffect(() => {
    async function loadProfile() {
      if (!user) return
      try {
        const profile = await getProfile(user.id)
        if (profile) {
          setFormData({
            name: profile.name || '',
            email: profile.email || user.email || ''
          })
        }

        // Load purchases
        const { data: purchaseData, error: purchaseError } = await supabase
          .from('purchases')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })

        if (purchaseError) throw purchaseError
        setPurchases(purchaseData)

      } catch (error) {
        console.error('Error loading profile:', error)
        toast.error('Không thể tải thông tin tài khoản')
      } finally {
        setProfileLoading(false)
      }
    }

    loadProfile()
  }, [user])

  if (loading || profileLoading) {
    return (
      <div className="min-h-screen bg-secondary pt-24 flex items-center justify-center">
        <LoadingSpinner size={40} />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-secondary pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-300">
            Vui lòng đăng nhập để xem thông tin tài khoản
          </div>
        </div>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUpdateLoading(true)

    try {
      await updateProfile(user.id, {
        name: formData.name
      })
      toast.success('Cập nhật thông tin thành công!')
      setIsEditing(false)
    } catch (error) {
      toast.error('Có lỗi xảy ra khi cập nhật thông tin')
    } finally {
      setUpdateLoading(false)
    }
  }

  const purchasedCourseTypes = purchases.map(p => p.course_type)
  const unpurchasedCourses = availableCourses.filter(
    course => !purchasedCourseTypes.includes(course.type)
  )

  return (
    <main className="min-h-screen bg-secondary pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
          Thông tin tài khoản
        </h1>

        {/* Profile Section */}
        <div className="bg-secondary-light p-8 rounded-xl border border-primary/10 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Họ và tên
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md bg-secondary border border-primary/10 text-gray-300 px-4 py-2 disabled:opacity-50"
              />
            </div>

            {/* Email input - readonly */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                disabled
                className="mt-1 block w-full rounded-md bg-secondary border border-primary/10 text-gray-300 px-4 py-2 opacity-50"
              />
            </div>

            <div className="flex justify-end gap-4">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 rounded-full text-gray-300 hover:text-primary transition-colors"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    disabled={updateLoading}
                    className="bg-primary text-secondary px-6 py-2 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {updateLoading ? (
                      <>
                        <LoadingSpinner size={20} />
                        <span>Đang cập nhật...</span>
                      </>
                    ) : (
                      'Lưu thay đổi'
                    )}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="bg-primary text-secondary px-6 py-2 rounded-full font-semibold hover:bg-primary-light transition-all duration-300"
                >
                  Chỉnh sửa
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Purchased Courses Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Khóa học của bạn</h2>
          {purchases.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {purchases.map((purchase) => {
                const course = availableCourses.find(c => c.type === purchase.course_type)
                if (!course) return null
                
                return (
                  <div key={purchase.id} className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                    <h3 className="text-xl font-semibold text-primary mb-2">{course.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Ngày mua: {new Date(purchase.created_at).toLocaleDateString('vi-VN')}
                    </p>
                    <div className="space-y-2 mb-6">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/learn/${course.type}`}
                      className="block w-full bg-primary text-secondary text-center py-2 rounded-full font-semibold hover:bg-primary-light transition-all duration-300"
                    >
                      Vào học
                    </Link>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center text-gray-300 py-8">
              Bạn chưa đăng ký khóa học nào
            </div>
          )}
        </div>

        {/* Available Courses Section */}
        {unpurchasedCourses.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Khóa học có sẵn</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {unpurchasedCourses.map((course) => (
                <div key={course.type} className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                  <h3 className="text-xl font-semibold text-primary mb-2">{course.title}</h3>
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-300">Học phí</span>
                    <span className="text-primary text-xl font-bold">
                      {course.price.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                  <Link
                    href={`/courses/${course.type}`}
                    className="block w-full bg-primary text-secondary text-center py-2 rounded-full font-semibold hover:bg-primary-light transition-all duration-300"
                  >
                    Tìm hiểu thêm
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 