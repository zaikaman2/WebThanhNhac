'use client'

import { useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { handleGoogleSignUp } from '@/lib/auth'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import toast from 'react-hot-toast'

function CallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    async function handleAuthCallback() {
      try {
        // Lấy session hiện tại
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) throw error

        if (session?.user) {
          // Xử lý đăng ký nếu là user mới
          await handleGoogleSignUp(session.user)
          
          // Chuyển hướng về trang chủ hoặc trang redirect nếu có
          const redirectTo = searchParams?.get('redirect') || '/'
          toast.success('Đăng nhập thành công!')
          router.push(redirectTo)
          router.refresh()
        }
      } catch (error) {
        console.error('Auth callback error:', error)
        toast.error('Có lỗi xảy ra khi đăng nhập')
        router.push('/auth')
      }
    }

    handleAuthCallback()
  }, [router, searchParams])

  return (
    <div className="text-center">
      <LoadingSpinner size={40} />
      <p className="mt-4 text-gray-300">Đang xử lý đăng nhập...</p>
    </div>
  )
}

export default function AuthCallbackPage() {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center">
      <Suspense fallback={<LoadingSpinner size={40} />}>
        <CallbackContent />
      </Suspense>
    </div>
  )
}
