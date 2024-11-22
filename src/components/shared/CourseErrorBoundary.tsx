'use client'

import { useEffect } from 'react'

export default function CourseErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-primary mb-4">
          Đã có lỗi xảy ra khi tải khóa học
        </h2>
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