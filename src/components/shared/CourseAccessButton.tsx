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
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function checkUserAccess() {
      if (!userId) {
        setLoading(false)
        return
      }

      // Fetch purchase status and user role in parallel
      const [purchaseResponse, profileResponse] = await Promise.all([
        supabase
          .from('purchases')
          .select('*')
          .eq('user_id', userId)
          .eq('course_type', courseType)
          .single(),
        
        supabase
          .from('profiles')
          .select('role')
          .eq('id', userId)
          .single()
      ])

      setHasPurchased(!!purchaseResponse.data)
      setIsAdmin(profileResponse.data?.role === 'admin')
      setLoading(false)
    }

    checkUserAccess()
  }, [userId, courseType])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!userId) {
    return <CourseRegisterButton courseType={courseType} />
  }

  return (
    <div className="space-y-4">
      {hasPurchased ? (
        <>
          <p className="text-green-500 text-sm text-center">Bạn đã mua khóa học này</p>
          <button
            onClick={() => router.push(`/learn/${courseType}`)}
            className="w-full bg-primary text-secondary text-center py-4 rounded-full font-bold hover:bg-primary-light transition-all duration-300"
          >
            Bắt đầu học
          </button>
        </>
      ) : (
        <CourseRegisterButton courseType={courseType} />
      )}

      {isAdmin && (
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('openDevModal'))}
          className="mt-4 w-full bg-secondary-light text-primary text-center py-2 rounded-full font-bold hover:bg-secondary-darker transition-all duration-300 border border-primary/10"
        >
          Developer Code
        </button>
      )}
    </div>
  )
} 