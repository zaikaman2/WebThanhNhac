import { getCourses } from '@/lib/getCourses'
import CourseCard from '../shared/CourseCard'
import { Course } from '../shared/types'
import SlideIn from '@/components/shared/SlideIn'

export default async function CourseList() {
  const courses = await getCourses()

  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn direction="up">
          <h2 className="text-3xl font-bold text-center mb-12">Các khóa học nổi bật</h2>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course: Course, index: number) => (
            <SlideIn 
              key={course.id} 
              direction="up"
              delay={index * 100}
            >
              <CourseCard {...course} />
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  )
}
