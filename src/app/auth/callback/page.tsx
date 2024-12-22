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
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        <div className="absolute -inset-4 bg-primary opacity-20 blur-lg rounded-full"></div>
        <LoadingSpinner size={60} />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-primary">Đang xử lý đăng nhập</h2>
        <p className="text-gray-300">Vui lòng đợi trong giây lát...</p>
      </div>
    </div>
  )
}

export default function AuthCallbackPage() {
  return (
    <main className="min-h-screen bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <Suspense 
            fallback={
              <div className="flex flex-col items-center justify-center space-y-6">
                <LoadingSpinner size={60} />
                <p className="text-gray-300">Đang tải...</p>
              </div>
            }
          >
            <CallbackContent />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
