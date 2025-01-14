'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import toast from 'react-hot-toast'
import { getProfile, type Profile } from '@/lib/profile'
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
  const [profileLoading, setProfileLoading] = useState(true)
  const [purchases, setPurchases] = useState<Purchase[]>([])

  const availableCourses = [
    {
      type: 'basic',
      title: 'Khóa học cơ bản',
      description: 'Nền tảng vững chắc cho người mới bắt đầu',
      price: 399000,
      features: ['14 bài học chi tiết', '14 ngày học tập', 'Kỹ thuật cơ bản']
    }
  ]

  useEffect(() => {
    async function loadProfile() {
      if (!user) return
      try {
        // Kiểm tra provider của user
        const isGoogleProvider = user.app_metadata.provider === 'google'

        if (isGoogleProvider) {
          // Nếu đăng nhập bằng Google, lấy thông tin từ user metadata
          setFormData({
            name: user.user_metadata.full_name || user.user_metadata.name || '',
            email: user.email || ''
          })
        } else {
          // Nếu đăng nhập bằng email, lấy thông tin từ profiles
          const profile = await getProfile(user.id)
          if (profile) {
            setFormData({
              name: profile.name || '',
              email: profile.email || user.email || ''
            })
          }
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

        {/* Profile Section with improved styling */}
        <div className="bg-secondary-light p-8 rounded-xl border border-primary/10 mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Thông tin cá nhân</h2>
          <div className="space-y-6">
            {/* Name display */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Họ và tên
              </label>
              <div className="block w-full rounded-lg bg-secondary/50 border border-primary/10 text-gray-300 px-4 py-3">
                {formData.name}
              </div>
            </div>

            {/* Email display */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <div className="block w-full rounded-lg bg-secondary/50 border border-primary/10 text-gray-300 px-4 py-3">
                {formData.email}
              </div>
            </div>

            {/* Provider display */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Phương thức đăng nhập
              </label>
              <div className="block w-full rounded-lg bg-secondary/50 border border-primary/10 text-gray-300 px-4 py-3">
                {user.app_metadata.provider === 'google' ? 'Google' : 'Email'}
              </div>
            </div>
          </div>
        </div>

        {/* Purchased Courses Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Khóa học của bạn</h2>
          {purchases.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {purchases.map((purchase) => {
                const course = availableCourses.find(c => c.type === purchase.course_type)
                if (!course) return null
                
                return (
                  <div key={purchase.id} className="bg-secondary-light p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-primary mb-3">{course.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">
                      Ngày mua: {new Date(purchase.created_at).toLocaleDateString('vi-VN')}
                    </p>
                    <div className="space-y-3 mb-8">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-primary/80" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/learn/${course.type}`}
                      className="block w-full bg-primary text-secondary text-center py-3 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Vào học
                    </Link>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center bg-secondary-light p-12 rounded-xl border border-primary/10">
              <p className="text-gray-300 text-lg">Bạn chưa đăng ký khóa học nào</p>
            </div>
          )}
        </div>

        {/* Available Courses Section */}
        {unpurchasedCourses.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">Khóa học có sẵn</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {unpurchasedCourses.map((course) => (
                <div key={course.type} className="bg-secondary-light p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-primary mb-3">{course.title}</h3>
                  <p className="text-gray-300 mb-6">{course.description}</p>
                  <div className="space-y-3 mb-8">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-primary/80" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400">Học phí</span>
                    <span className="text-primary text-2xl font-bold">
                      {course.price.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                  <Link
                    href={`/courses/${course.type}`}
                    className="block w-full bg-primary text-secondary text-center py-3 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 transform hover:scale-[1.02]"
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