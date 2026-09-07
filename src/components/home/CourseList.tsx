import { getCourses } from '@/lib/getCourses'
import CourseCard from '../shared/CourseCard'
import { Course } from '../shared/types'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function CourseList() {
  let courses: Course[] = []
  try {
    courses = await getCourses()
  } catch (err) {
    console.error('Error in CourseList:', err)
  }

  return (
    <section id="courses" className="py-20 lg:py-24 bg-[#141414] text-white border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (VietVocal Style) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-3">
            Hệ Thống Khóa Học
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Các khóa học được thiết kế chuyên biệt, từ người mới bắt đầu đến người muốn làm chủ kỹ thuật thanh nhạc nâng cao.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((course: Course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* View All Courses Button (VietVocal Style) */}
        <div className="mt-14 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-primary text-primary hover:text-secondary px-8 py-3.5 rounded-full font-bold text-sm sm:text-base border-2 border-primary transition-all duration-300 uppercase tracking-wider"
          >
            <span>Tất cả khóa học</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
