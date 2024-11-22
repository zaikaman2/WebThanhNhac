import Banner from '@/components/home/Banner'
import CourseList from '@/components/home/CourseList'
import TestimonialsServer from '@/components/home/TestimonialsServer'
import Instructor from '@/components/home/Instructor'

export default function Home() {
  return (
    <main>
      <Banner />
      <Instructor />
      <CourseList />
      <TestimonialsServer />
    </main>
  )
}
