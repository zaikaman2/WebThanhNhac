'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function TikTokRedirectPage() {
  const router = useRouter()
  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'other'>('other')

  useEffect(() => {
    // Detect device type
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      setDeviceType('ios')
    } else if (/android/i.test(navigator.userAgent)) {
      setDeviceType('android')
    }
  }, [])

  const openInBrowser = () => {
    if (deviceType === 'ios') {
      // For iOS: Try to open in Safari
      window.location.href = 'https://kienvocal.com'
    } else if (deviceType === 'android') {
      // For Android: Try to open in Chrome
      window.location.href = 'googlechrome://navigate?url=https://kienvocal.com'
      // Fallback after delay
      setTimeout(() => {
        window.location.href = 'https://kienvocal.com'
      }, 1000)
    } else {
      // For other devices
      window.location.href = 'https://kienvocal.com'
    }
  }

  const getInstructions = () => {
    if (deviceType === 'ios') {
      return (
        <>
          <p className="text-gray-300 mb-4">Để có trải nghiệm tốt nhất:</p>
          <ol className="text-gray-300 list-decimal list-inside space-y-2 mb-6">
            <li>Nhấn vào nút "Mở trong Safari" bên dưới</li>
            <li>Hoặc nhấn vào biểu tượng ⋮ (ba chấm) ở góc phải</li>
            <li>Chọn "Mở trong Safari"</li>
          </ol>
        </>
      )
    } else if (deviceType === 'android') {
      return (
        <>
          <p className="text-gray-300 mb-4">Để có trải nghiệm tốt nhất:</p>
          <ol className="text-gray-300 list-decimal list-inside space-y-2 mb-6">
            <li>Nhấn vào nút "Mở trong Chrome" bên dưới</li>
            <li>Hoặc nhấn vào biểu tượng ⋮ (ba chấm) ở góc phải</li>
            <li>Chọn "Mở trong trình duyệt"</li>
          </ol>
        </>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-secondary-light p-8 rounded-xl border border-primary/10">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-6">Chào mừng đến với KienVocal!</h1>
          
          {getInstructions()}

          <button
            onClick={openInBrowser}
            className="w-full bg-primary text-white py-3 px-6 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 mb-4"
          >
            {deviceType === 'ios' ? 'Mở trong Safari' : deviceType === 'android' ? 'Mở trong Chrome' : 'Mở trang web'}
          </button>

          <a
            href="https://kienvocal.com"
            className="inline-block w-full text-center py-3 px-6 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Mở trong trình duyệt mặc định
          </a>

          <p className="text-sm text-gray-400 mt-6">
            KienVocal - Nơi ươm mầm những tài năng âm nhạc
          </p>
        </div>
      </div>
    </div>
  )
} 