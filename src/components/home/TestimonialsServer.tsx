import { supabase } from '@/lib/supabase'
import TestimonialList from './TestimonialList'
import SlideIn from '@/components/shared/SlideIn'

async function getTestimonials() {
  const { data, error } = await supabase
    .from('Testimonial')
    .select('*')
  
  if (error) throw error
  return data || []
}

export default async function TestimonialsServer() {
  const testimonials = await getTestimonials()

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SlideIn direction="up">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Học viên nói gì về chúng tôi
          </h2>
        </SlideIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SlideIn key={testimonial.id} direction="up" delay={index * 100}>
              <TestimonialList {...testimonial} />
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  )
} 