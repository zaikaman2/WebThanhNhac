import { getCourseByType } from '@/lib/getCourses'
import AdvancedCourseContent from '@/components/courses/AdvancedCourseContent'

export default async function AdvancedPage() {
  const course = await getCourseByType('advanced')

  if (!course) {
    return <div>Không tìm thấy khóa học</div>
  }

  return <AdvancedCourseContent course={course} />
}