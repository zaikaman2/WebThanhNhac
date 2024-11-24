'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import CourseRegisterButton from './CourseRegisterButton'
import LoadingSpinner from './LoadingSpinner'
import { toast } from 'sonner'
interface CourseAccessButtonProps {
  courseType: string
  userId?: string
}

export default function CourseAccessButton({ courseType, userId }: CourseAccessButtonProps) {
  const [hasPurchased, setHasPurchased] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [showDevModal, setShowDevModal] = useState(false)
  const [devPassword, setDevPassword] = useState('')
  const [devError, setDevError] = useState('')
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

  const handleDevAccess = async (e: React.FormEvent) => {
    e.preventDefault()
    setDevError('')
    
    if (devPassword === '17062004') {
      try {
        const { data: { user }, error: authError } = await supabase.auth.getUser()
        
        if (authError || !user) {
          toast.error('Vui lòng đăng nhập để tiếp tục')
          return
        }

        const { error: purchaseError } = await supabase
          .from('purchases')
          .insert([
            {
              user_id: user.id,
              course_type: courseType,
              order_code: 'DEV' + Date.now(),
              amount: 0,
              payment_status: 'completed',
              created_at: new Date().toISOString()
            }
          ])

        if (purchaseError) throw purchaseError

        toast.success('Kích hoạt khóa học thành công!')
        setShowDevModal(false)
        window.location.reload()
      } catch (error) {
        console.error('Dev access error:', error)
        toast.error('Có lỗi xảy ra')
      }
    } else {
      setDevError('Mật khẩu không đúng')
    }
  }

  // Show loading spinner while checking
  if (loading) {
    return (
      <div className="flex justify-center py-4">
        <LoadingSpinner size={30} />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {!userId || (!hasPurchased && !loading) ? (
        <CourseRegisterButton courseType={courseType} />
      ) : hasPurchased ? (
        <>
          <p className="text-green-500 text-sm text-center">Bạn đã mua khóa học này</p>
          <button
            onClick={() => router.push(`/learn/${courseType}`)}
            className="w-full bg-primary text-secondary text-center py-4 rounded-full font-bold hover:bg-primary-light transition-all duration-300"
          >
            Bắt đầu học
          </button>
        </>
      ) : null}

      {isAdmin && (
        <>
          <button
            onClick={() => setShowDevModal(true)}
            className="mt-4 w-full bg-secondary-light text-primary text-center py-2 rounded-full font-bold hover:bg-secondary-darker transition-all duration-300 border border-primary/10"
          >
            Developer Code
          </button>

          {showDevModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-secondary-light p-6 rounded-xl max-w-md w-full mx-4">
                <h3 className="text-xl font-bold text-primary mb-4">Developer Access</h3>
                <form onSubmit={handleDevAccess} className="space-y-4">
                  <input
                    type="password"
                    value={devPassword}
                    onChange={(e) => setDevPassword(e.target.value)}
                    placeholder="Nhập mật khẩu"
                    className="w-full bg-secondary border border-primary/10 rounded-lg px-4 py-2 text-white"
                  />
                  {devError && (
                    <p className="text-red-500 text-sm">{devError}</p>
                  )}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShowDevModal(false)}
                      className="flex-1 bg-secondary-darker text-primary py-2 rounded-full hover:bg-secondary transition-all duration-300"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-primary text-secondary py-2 rounded-full hover:bg-primary-light transition-all duration-300"
                    >
                      Xác nhận
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
} 