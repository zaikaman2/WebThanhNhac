'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TikTokRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    // Open the default browser instead of TikTok's in-app browser
    const openInBrowser = () => {
      const currentURL = window.location.href
      const targetURL = currentURL.replace('/tiktok-redirect', '')
      
      // Check if we're in TikTok's in-app browser
      const isInTikTokBrowser = /musical_ly|tiktok/i.test(navigator.userAgent)
      
      if (isInTikTokBrowser) {
        // Redirect to the actual site in the default browser
        window.location.href = `intent://${window.location.host}#Intent;scheme=https;package=com.android.chrome;end`
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
      </div>
    </div>
  )
} 