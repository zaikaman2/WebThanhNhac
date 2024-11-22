'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import toast from 'react-hot-toast'

export default function AccountPage() {
  const { user, loading } = useAuth()
  const [formData, setFormData] = useState({
    name: user?.user_metadata?.name || '',
    email: user?.email || '',
    avatar_url: null
  })
  const [isEditing, setIsEditing] = useState(false)
  const [updateLoading, setUpdateLoading] = useState(false)

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary pt-24 flex items-center justify-center">
        <LoadingSpinner size={40} />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-secondary pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-300">
            Vui lòng đăng nhập để xem thông tin tài khoản
          </div>
        </div>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUpdateLoading(true)

    try {
      // TODO: Implement update profile logic
      toast.success('Cập nhật thông tin thành công!')
      setIsEditing(false)
    } catch (error) {
      toast.error('Có lỗi xảy ra khi cập nhật thông tin')
    } finally {
      setUpdateLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-secondary pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
          Thông tin tài khoản
        </h1>

        <div className="bg-secondary-light p-8 rounded-xl border border-primary/10">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                disabled={!isEditing}
                className="mt-1 block w-full rounded-md bg-secondary border border-primary/10 text-gray-300 px-4 py-2 disabled:opacity-50"
              />
            </div>

            {/* Email input - readonly */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                disabled
                className="mt-1 block w-full rounded-md bg-secondary border border-primary/10 text-gray-300 px-4 py-2 opacity-50"
              />
            </div>

            <div className="flex justify-end gap-4">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 rounded-full text-gray-300 hover:text-primary transition-colors"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    disabled={updateLoading}
                    className="bg-primary text-secondary px-6 py-2 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {updateLoading ? (
                      <>
                        <LoadingSpinner size={20} />
                        <span>Đang cập nhật...</span>
                      </>
                    ) : (
                      'Lưu thay đổi'
                    )}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="bg-primary text-secondary px-6 py-2 rounded-full font-semibold hover:bg-primary-light transition-all duration-300"
                >
                  Chỉnh sửa
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  )
} 