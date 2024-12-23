'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function TikTokRedirectPage() {
  const router = useRouter()
  const [isInTikTok, setIsInTikTok] = useState(true)

  useEffect(() => {
    // Check if we're in TikTok's browser
    const isTikTokBrowser = /musical_ly|tiktok/i.test(navigator.userAgent)
    setIsInTikTok(isTikTokBrowser)
  }, [])

  if (!isInTikTok) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-secondary-light p-8 rounded-xl border border-primary/10">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-6">Chào mừng đến với KienVocal!</h1>
            <button
              onClick={() => router.push('/')}
              className="w-full bg-primary text-white py-3 px-6 rounded-full font-semibold hover:bg-primary-light transition-all duration-300"
            >
              Tiếp tục vào trang web
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-secondary-light p-8 rounded-xl border border-primary/10">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-6">Chào mừng đến với KienVocal!</h1>
          
          <div className="space-y-6 mb-8">
            <p className="text-gray-300">Để có trải nghiệm tốt nhất, vui lòng:</p>
            <ol className="text-gray-300 list-decimal list-inside space-y-4">
              <li className="flex items-center justify-center gap-2">
                Nhấn vào biểu tượng
                <span className="font-bold text-xl leading-none">⋮</span>
                ở góc phải phía trên
              </li>
              <li>
                Chọn "Mở trong trình duyệt"
              </li>
              <li>
                Sau khi mở trong trình duyệt, nhấn nút "Tiếp tục" bên dưới
              </li>
            </ol>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-light opacity-30 blur rounded-lg">
            </div>
            <Link
              href="/"
              className="relative block w-full bg-secondary py-3 px-6 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-all duration-300"
            >
              Tiếp tục
            </Link>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            KienVocal - Nơi ươm mầm những tài năng âm nhạc
          </p>
        </div>
      </div>
    </div>
  )
} 