import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { Course } from '@/components/shared/types'
import CourseCard from '@/components/shared/CourseCard'

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('Course')
    .select('*')
  
  if (error) throw error
  return data || []
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-darker to-secondary-light opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary tracking-normal leading-[1.2] md:leading-[1.15]">
              Khóa học thanh nhạc
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-normal">
              Khám phá các khóa học được thiết kế chuyên biệt giúp bạn phát triển kỹ năng thanh nhạc 
              từ cơ bản đến nâng cao
            </p>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
