'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import CourseRegisterButton from './CourseRegisterButton'
import LoadingSpinner from './LoadingSpinner'

interface CourseAccessButtonProps {
  courseType: string
  userId?: string
}

export default function CourseAccessButton({ courseType, userId }: CourseAccessButtonProps) {
  const [hasPurchased, setHasPurchased] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function checkPurchase() {
      if (!userId) {
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('purchases')
        .select('*')
        .eq('user_id', userId)
        .eq('course_type', courseType)
        .single()

      setHasPurchased(!!data)
      setLoading(false)
    }

    checkPurchase()
  }, [userId, courseType])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!userId) {
    return <CourseRegisterButton courseType={courseType} />
  }

  return hasPurchased ? (
    <div className="space-y-4">
      <p className="text-green-500 text-sm text-center">Bạn đã mua khóa học này</p>
      <button
        onClick={() => router.push(`/learn/${courseType}`)}
        className="w-full bg-primary text-secondary text-center py-4 rounded-full font-bold hover:bg-primary-light transition-all duration-300"
      >
        Bắt đầu học
      </button>
    </div>
  ) : (
    <CourseRegisterButton courseType={courseType} />
  )
} 