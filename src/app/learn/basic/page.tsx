'use client'

import { useUser } from '@/hooks/useUser'
import CourseAccessCheck from '@/components/shared/CourseAccessCheck'

export default function LearnBasicPage() {
  const { user } = useUser()

  return (
    <CourseAccessCheck courseType="basic" userId={user?.id}>
      <main className="min-h-screen bg-secondary pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-primary">Đợi chút nhé!</h1>
          <p className="text-gray-300 mt-4">để test thôi</p>
        </div>
      </main>
    </CourseAccessCheck>
  )
} 