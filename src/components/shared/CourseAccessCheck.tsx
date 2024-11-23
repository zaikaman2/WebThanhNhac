'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import LoadingSpinner from './LoadingSpinner'

interface CourseAccessCheckProps {
  courseType: 'basic' | 'intermediate'
  userId?: string
  children: React.ReactNode
}

export default function CourseAccessCheck({ courseType, userId, children }: CourseAccessCheckProps) {
  const [loading, setLoading] = useState(true)
  const [hasPurchased, setHasPurchased] = useState(false)
  const router = useRouter()
  const courseTitle = courseType === 'basic' ? 'cơ bản' : 'nâng cao'

  useEffect(() => {
    if (!userId) {
      const timer = setTimeout(() => {
        router.push('/login')
      }, 3000)
      return () => clearTimeout(timer)
    }

    async function checkPurchase() {
      const { data } = await supabase
        .from('purchases')
        .select('*')
        .eq('user_id', userId)
        .eq('course_type', courseType)
        .single()

      setHasPurchased(!!data)
      setLoading(false)

      if (!data) {
        const timer = setTimeout(() => {
          router.push(`/courses/${courseType}`)
        }, 3000)
        return () => clearTimeout(timer)
      }
    }

    checkPurchase()
  }, [userId, courseType, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <LoadingSpinner size={40} />
      </div>
    )
  }

  if (!userId) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Bạn chưa đăng nhập
          </h1>
          <p className="text-gray-300 mb-4">
            Vui lòng đăng nhập rồi quay lại sau
          </p>
          <div className="flex items-center justify-center gap-2">
            <LoadingSpinner size={20} />
            <span className="text-gray-300">Đang chuyển hướng đến trang đăng nhập...</span>
          </div>
        </div>
      </div>
    )
  }

  if (!hasPurchased) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Bạn chưa mua khóa học {courseTitle}
          </h1>
          <p className="text-gray-300 mb-4">
            Vui lòng mua khóa học rồi quay lại sau
          </p>
          <div className="flex items-center justify-center gap-2">
            <LoadingSpinner size={20} />
            <span className="text-gray-300">Đang chuyển hướng đến trang chi tiết khóa học...</span>
          </div>
        </div>
      </div>
    )
  }

  return children
} 