'use client'

import { useEffect } from 'react'

// Thêm hàm logError để track lỗi
const logError = (error: Error) => {
  // Trong tương lai có thể tích hợp với service như Sentry
  console.error('Application error:', error)
}

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    logError(error)
  }, [error])

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h2 className="text-xl font-semibold text-primary mb-4">
          Đã có lỗi xảy ra
        </h2>
        <p className="text-gray-300 mb-4">
          {error.message || 'Vui lòng thử lại sau'}
        </p>
        <button
          onClick={reset}
          className="bg-primary text-secondary px-4 py-2 rounded-full"
        >
          Thử lại
        </button>
      </div>
    </div>
  )
} 