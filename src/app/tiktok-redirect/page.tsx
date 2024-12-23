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

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <div className="text-center mb-12">
          <h1 className="text-[#FFD700] text-3xl font-bold mb-2">
            Chào mừng đến với KienVocal!
          </h1>
        </div>

        {isInTikTok ? (
          <>
            <div className="space-y-8 mb-8">
              <div className="bg-[#1E1E1E] rounded-xl p-6 space-y-4">
                <p className="text-[#FFD700] font-semibold text-lg mb-4">
                  Vui lòng làm theo các bước sau:
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold">1</span>
                    <p className="text-white">Nhấn vào nút <span className="font-bold text-xl">⋮</span> ở góc phải trên màn hình</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold">2</span>
                    <p className="text-white">Chọn "Mở trong trình duyệt"</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold">3</span>
                    <p className="text-white">Sau đó quay lại đây và nhấn nút bên dưới</p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/"
              className="block w-full bg-[#FFD700] text-black py-4 px-6 rounded-full font-bold text-center text-lg hover:bg-[#FFE55C] transition-all duration-300"
            >
              Tiếp tục vào trang web
            </Link>
          </>
        ) : (
          <Link
            href="/"
            className="block w-full bg-[#FFD700] text-black py-4 px-6 rounded-full font-bold text-center text-lg hover:bg-[#FFE55C] transition-all duration-300"
          >
            Tiếp tục vào trang web
          </Link>
        )}
      </div>
    </div>
  )
} 