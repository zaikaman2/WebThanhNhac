'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-secondary pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Thanh toán thành công!
          </h1>
          <p className="text-gray-300 mb-8">
            Cảm ơn bạn đã đăng ký khóa học. Chúng tôi sẽ liên hệ với bạn sớm nhất.
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