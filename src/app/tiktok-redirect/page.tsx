'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TikTokRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    const openInBrowser = () => {
      // Check if we're in TikTok's in-app browser
      const isInTikTokBrowser = /musical_ly|tiktok/i.test(navigator.userAgent)
      
      if (isInTikTokBrowser) {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        const isAndroid = /android/i.test(navigator.userAgent)
        
        if (isIOS) {
          // For iOS devices
          window.location.href = 'kienvocal://' // Custom URL scheme
          
          // Fallback after delay
          setTimeout(() => {
            window.location.href = 'https://kienvocal.com'
          }, 2500)
        } else if (isAndroid) {
          // For Android devices
          try {
            // Try to open in Chrome
            window.location.href = 'googlechrome://navigate?url=https://kienvocal.com'
            
            // Fallback after delay
            setTimeout(() => {
              // Try to open in default browser
              window.location.href = 'https://kienvocal.com'
            }, 2500)
          } catch (e) {
            // If Chrome not installed, open in default browser
            window.location.href = 'https://kienvocal.com'
          }
        } else {
          // For other devices
          window.location.href = 'https://kienvocal.com'
        }
      } else {
        // If not in TikTok browser, just redirect normally
        router.push('/')
      }
    }

    openInBrowser()
  }, [router])

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-primary mb-4">Đang chuyển hướng...</h1>
        <p className="text-gray-300">Vui lòng đợi trong giây lát</p>
        <p className="text-sm text-gray-400 mt-2">Nếu không tự động chuyển hướng, vui lòng nhấn vào <a href="https://kienvocal.com" className="text-primary hover:text-primary-light">đây</a></p>
      </div>
    </div>
  )
} 