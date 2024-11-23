'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { XCircle } from 'lucide-react'
import Link from 'next/link'

export default function PaymentCancelPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const orderCode = searchParams.get('orderCode')

  useEffect(() => {
    // Validate if this is a legitimate cancel from PayOS
    if (!orderCode) {
      router.push('/courses')
    }
  }, [orderCode, router])

  return (
    <main className="min-h-screen bg-secondary pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
      </div>
    </main>
  )
} 