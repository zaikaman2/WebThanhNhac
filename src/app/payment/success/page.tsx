'use client'

import { Suspense, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

function SuccessContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const courseType = searchParams.get('courseType')
  const orderCode = searchParams.get('orderCode')

  const courseTitle = courseType === 'basic' ? 'cơ bản' : 'nâng cao'
  const redirectPath = `/courses/${courseType}`

  useEffect(() => {
    async function createPurchaseRecord() {
      try {
        const { data: { user }, error: authError } = await supabase.auth.getUser()
        
        if (authError || !user) {
          throw new Error('Lỗi xác thực người dùng')
        }

        const amount = courseType === 'basic' ? 3000 : 599000

        const { error: purchaseError } = await supabase
          .from('purchases')
          .insert([
            {
              user_id: user.id,
              course_type: courseType,
              order_code: orderCode,
              amount: amount,
              payment_status: 'completed',
              created_at: new Date().toISOString()
            }
          ])

        if (purchaseError) {
          throw new Error('Lỗi khi tạo đơn hàng')
        }

        // Redirect sau khi tạo purchase thành công
        const timer = setTimeout(() => {
          router.push(redirectPath)
        }, 3000)
        return () => clearTimeout(timer)

      } catch (error) {
        console.error('Error creating purchase:', error)
        toast.error('Có lỗi xảy ra khi xử lý đơn hàng')
      }
    }

    createPurchaseRecord()
  }, [courseType, orderCode, redirectPath, router])

  return (
    <div className="text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
      <h1 className="text-4xl font-bold mb-4 text-primary">
        Chúc mừng bạn đã đăng ký thành công!
      </h1>
      <p className="text-gray-300 mb-4">
        Bạn đã đăng ký khóa học {courseTitle} thành công.
      </p>
      <p className="text-gray-300 mb-8 flex items-center justify-center gap-2">
        <LoadingSpinner size={20} />
        <span>Đang chuyển hướng đến trang khóa học...</span>
      </p>
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-secondary pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense fallback={
          <div className="flex justify-center">
            <LoadingSpinner size={40} />
          </div>
        }>
          <SuccessContent />
        </Suspense>
      </div>
    </main>
  )
} 