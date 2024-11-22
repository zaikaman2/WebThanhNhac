"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { signOut } from '@/lib/auth'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      toast.success('Đăng xuất thành công!')
      router.push('/')
      router.refresh()
    } catch (error) {
      toast.error('Có lỗi xảy ra khi đăng xuất')
    }
  }

  return (
    <header className="bg-secondary shadow-lg fixed w-full top-0 z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              KienVocal
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <Link href="/courses" className="text-gray-300 hover:text-primary transition-colors">
              Khóa học
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
              Về giảng viên
            </Link>
            {user ? (
              <div className="flex items-center gap-4">
                <Link 
                  href="/account" 
                  className="bg-primary text-secondary px-6 py-2 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
                >
                  Tài khoản
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <>
                <Link href="/auth" className="text-gray-300 hover:text-primary transition-colors">
                  Đăng nhập
                </Link>
                <Link 
                  href="/auth/register" 
                  className="bg-primary text-secondary px-6 py-2 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
                >
                  Đăng ký ngay
                </Link>
              </>
            )}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-secondary-light border-t border-primary/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-primary">
                Trang chủ
              </Link>
              <Link href="/courses" className="block px-3 py-2 text-gray-300 hover:text-primary">
                Khóa học
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-primary">
                Về giảng viên
              </Link>
              {user ? (
                <>
                  <Link href="/account" className="block px-3 py-2 text-primary hover:text-primary-light">
                    Tài khoản
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-primary"
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth" className="block px-3 py-2 text-gray-300 hover:text-primary">
                    Đăng nhập
                  </Link>
                  <Link href="/auth/register" className="block px-3 py-2 text-primary hover:text-primary-light">
                    Đăng ký ngay
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
