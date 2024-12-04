'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import toast from 'react-hot-toast'
import LoadingSpinner from './LoadingSpinner'

interface CourseRegisterButtonProps {
  courseType: string
}

export default function CourseRegisterButton({ courseType }: CourseRegisterButtonProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { user } = useUser()

  const handlePayment = async () => {
    try {
      setLoading(true)

      // Kiểm tra đăng nhập
      if (!user) {
        // Chuyển hướng đến trang đăng nhập với query param để redirect sau khi đăng nhập
        router.push(`/auth?redirect=/courses/${courseType}`)
        return
      }
      
      const response = await fetch('/api/payment/create-payment-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          courseType,
          email: user.email 
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Có lỗi xảy ra')
      }

      // Redirect to PayOS checkout page
      window.location.href = data.checkoutUrl

    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Có lỗi xảy ra')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="w-full bg-primary text-secondary text-center py-4 rounded-full font-bold hover:bg-primary-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {loading ? (
        <>
          <LoadingSpinner size={20} />
          <span>Đang xử lý...</span>
        </>
      ) : (
        'Đăng ký ngay'
      )}
    </button>
  )
} 