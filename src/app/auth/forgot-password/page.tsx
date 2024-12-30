'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { resetPassword } from '@/lib/auth'
import toast from 'react-hot-toast'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return

    setError('')
    setLoading(true)

    try {
      await resetPassword(email)
      toast.success('Email đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra hòm thư của bạn.')
      router.push('/auth')
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Đã có lỗi xảy ra')
      setError(err instanceof Error ? err.message : 'Đã có lỗi xảy ra')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Quên mật khẩu
          </h1>
          
          <div className="bg-secondary-light p-8 rounded-xl border border-primary/10">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-md mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-secondary border border-primary/10 text-gray-300 px-4 py-2"
                  required
                />
              </div>

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
                  'Gửi email đặt lại mật khẩu'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/auth" className="text-primary hover:text-primary-light">
                Quay lại đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 