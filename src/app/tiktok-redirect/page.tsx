'use client'

import Link from 'next/link'

export default function TikTokRedirectPage() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <div className="text-center mb-16">
          <h1 className="text-[#FFD700] text-4xl font-bold">
            Chào mừng đến với<br />KienVocal!
          </h1>
        </div>

        <div className="mb-12">
          <div className="bg-[#1E1E1E] rounded-2xl p-6">
            <p className="text-[#FFD700] font-semibold text-2xl mb-8">
              Vui lòng làm theo các bước sau:
            </p>
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold text-2xl shrink-0">
                  1
                </div>
                <div className="flex items-center">
                  <p className="text-white text-xl">Nhấn vào nút <span className="font-bold text-2xl">...</span> ở góc phải trên màn hình</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold text-2xl shrink-0">
                  2
                </div>
                <div className="flex items-center">
                  <p className="text-white text-xl">Chọn "Mở trong trình duyệt"</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold text-2xl shrink-0">
                  3
                </div>
                <div className="flex items-center">
                  <p className="text-white text-xl">Sau khi làm xong 2 bước trên thì nhấn nút bên dưới</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="block w-full bg-[#FFD700] text-black py-5 px-6 rounded-full font-bold text-center text-xl"
        >
          Tiếp tục vào trang web
        </Link>
      </div>
    </div>
  )
} 