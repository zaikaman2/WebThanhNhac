import Banner from '@/components/home/Banner'
import WelcomeSection from '@/components/home/WelcomeSection'
import VietVocalHighlights from '@/components/home/VietVocalHighlights'
import CourseList from '@/components/home/CourseList'
import TestimonialsServer from '@/components/home/TestimonialsServer'
import GrandFinaleCta from '@/components/home/GrandFinaleCta'

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary text-white selection:bg-primary selection:text-secondary">
      {/* 1. Hero Banner: Clean, legible headline & CTAs */}
      <Banner />

      {/* 2. Welcome from Instructor (Modeled after VietVocal's founder welcome) */}
      <WelcomeSection />

      {/* 3. 3 Core Highlights (Modeled after VietVocal's 3 distinct features) */}
      <VietVocalHighlights />

      {/* 4. Course System (Modeled after VietVocal's course list) */}
      <CourseList />

      {/* 5. Student Testimonials (Modeled after VietVocal's reviews) */}
      <TestimonialsServer />

      {/* 6. Call to Action (Modeled after VietVocal's 'Tham Gia Ngay') */}
      <GrandFinaleCta />
    </main>
  )
}
