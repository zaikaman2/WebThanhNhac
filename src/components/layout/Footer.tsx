"use client"

import Link from 'next/link'
import ChatbotButton from '../shared/ChatbotButton'

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary-darker text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo và thông tin */}
            <div className="col-span-1">
              <Link href="/" className="text-3xl font-bold text-primary">
                KienVocal
              </Link>
              <p className="mt-4 text-gray-400 hover:text-gray-300 transition-colors">
                Nơi ươm mầm những tài năng âm nhạc cùng giảng viên Đinh Trung Kiên
              </p>
            </div>

            {/* Liên kết nhanh */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-primary">Liên kết nhanh</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-primary transition-colors">
                    Khóa học
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                    Về giảng viên
                  </Link>
                </li>
                <li>
                  <Link href="/auth" className="text-gray-400 hover:text-primary transition-colors">
                    Đăng ký/Đăng nhập
                  </Link>
                </li>
              </ul>
            </div>

            {/* Liên hệ */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-primary">Liên hệ</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-primary transition-colors">Email: kienalai@gmail.com</li>
                <li className="hover:text-primary transition-colors">Điện thoại: 0903100887</li>
                <li className="hover:text-primary transition-colors">Địa chỉ: Hồ Chí Minh, Việt Nam</li>
              </ul>
            </div>

            {/* Mạng xã hội */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-primary">Kết nối</h3>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/thanhnhackiendinh" className="text-gray-400 hover:text-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@giangvienthanhnhackienc5" className="text-gray-400 hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@kienvocal" className="text-gray-400 hover:text-white">
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright và điều khoản */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-400">
                © 2024 KienVocal. Tất cả quyền được bảo lưu.
              </p>
              <div className="mt-4 space-x-8">
                <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                  Chính sách bảo mật
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                  Điều khoản sử dụng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ChatbotButton />
    </>
  )
}
