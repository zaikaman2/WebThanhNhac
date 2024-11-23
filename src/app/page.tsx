import Banner from '@/components/home/Banner'
import CourseList from '@/components/home/CourseList'
import Features from '@/components/home/Features'
import TestimonialsServer from '@/components/home/TestimonialsServer'
import Instructor from '@/components/home/Instructor'

export default function Home() {
  return (
    <main>
      <Banner />
      <Instructor />
      <CourseList />
      <Features />
      <TestimonialsServer />
    </main>
  )
}
