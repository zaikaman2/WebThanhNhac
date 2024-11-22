'use client'

import { Suspense } from 'react'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Đăng ký tài khoản
          </h1>
          
          <div className="bg-secondary-light p-8 rounded-xl border border-primary/10">
            <Suspense fallback={<LoadingSpinner />}>
              <RegisterForm />
            </Suspense>
            
            <div className="mt-6 text-center">
              <Link href="/auth" className="text-primary hover:text-primary-light">
                Đã có tài khoản? Đăng nhập ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function RegisterForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const courseType = searchParams.get('course')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return
    
    setError('')
    setLoading(true)

    try {
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Mật khẩu không khớp')
      }

      if (formData.password.length < 6) {
        throw new Error('Mật khẩu phải có ít nhất 6 ký tự')
      }

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Đăng ký thất bại')
      }

      // Hiển thị thông báo thành công
      alert('Đăng ký thành công! Vui lòng đăng nhập để tiếp tục.')
      
      // Chuyển đến trang đăng nhập
      router.push('/auth')

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã có lỗi xảy ra')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-md">
          {error}
        </div>
      )}

      {/* Name input */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Họ và tên
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="mt-1 block w-full rounded-md bg-secondary border border-primary/10 text-gray-300 px-4 py-2"
          required
        />
      </div>

      {/* Email input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="mt-1 block w-full rounded-md bg-secondary border border-primary/10 text-gray-300 px-4 py-2"
          required
        />
      </div>

      {/* Password input */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Mật khẩu
        </label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="mt-1 block w-full rounded-md bg-secondary border border-primary/10 text-gray-300 px-4 py-2"
          required
        />
      </div>

      {/* Confirm password input */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
          Xác nhận mật khẩu
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          className="mt-1 block w-full rounded-md bg-secondary border border-primary/10 text-gray-300 px-4 py-2"
          required
        />
      </div>

      {courseType && (
        <div className="text-gray-300 text-sm">
          Bạn đang đăng ký cho khóa học: <span className="text-primary">{courseType}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-secondary py-3 rounded-full font-bold hover:bg-primary-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <LoadingSpinner size={20} />
            <span>Đang xử lý...</span>
          </div>
        ) : (
          'Đăng ký'
        )}
      </button>
    </form>
  )
} 