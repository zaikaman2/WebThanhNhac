import Banner from '@/components/home/Banner'
import CourseList from '@/components/home/CourseList'
import Testimonials from '@/components/home/Testimonials'
import Instructor from '@/components/home/Instructor'

export default function Home() {
  return (
    <main>
      <Banner />
      <Instructor />
      <CourseList />
      <Testimonials />
    </main>
  )
}
