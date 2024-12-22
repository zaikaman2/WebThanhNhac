'use client'

import { Suspense } from 'react'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import toast from 'react-hot-toast'
import { signInWithGoogle } from '@/lib/auth'

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
  const courseType = searchParams?.get('course')
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
        toast.error(data.message || 'Đăng ký thất bại')
        throw new Error(data.message || 'Đăng ký thất bại')
      }

      toast.success(
        'Đăng ký thành công! Email xác nhận đã được gửi đến hòm thư của bạn. Vui lòng kiểm tra cả thư mục Spam/Rác nếu không thấy email trong hộp thư đến.',
        {
          duration: 8000
        }
      )
      router.push('/auth')

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã có lỗi xảy ra')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      setError('')
      await signInWithGoogle()
    } catch (err) {
      toast.error('Có lỗi xảy ra khi đăng ký với Google')
      setError('Có lỗi xảy ra khi đăng ký với Google')
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

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-primary/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-secondary-light text-gray-300">
              Hoặc đăng ký với
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="mt-4 w-full flex items-center justify-center gap-3 bg-white text-gray-900 py-3 rounded-full font-bold hover:bg-gray-50 transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google
        </button>
      </div>
    </form>
  )
} 