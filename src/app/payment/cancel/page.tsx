'use client'

import { Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { XCircle } from 'lucide-react'
import Link from 'next/link'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

function CancelContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const orderCode = searchParams.get('orderCode')

  return (
    <div className="text-center">
      <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
      <h1 className="text-4xl font-bold mb-4 text-primary">
        Thanh toán không thành công
      </h1>
      <p className="text-gray-300 mb-8">
        Đơn hàng #{orderCode} đã bị hủy. Vui lòng thử lại sau.
      </p>
      <Link 
        href="/courses"
        className="bg-primary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-primary-light transition-all duration-300"
      >
        Quay lại trang khóa học
      </Link>
    </div>
  )
}

export default function PaymentCancelPage() {
  return (
    <main className="min-h-screen bg-secondary pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense fallback={
          <div className="flex justify-center">
            <LoadingSpinner size={40} />
          </div>
        }>
          <CancelContent />
        </Suspense>
      </div>
    </main>
  )
} 