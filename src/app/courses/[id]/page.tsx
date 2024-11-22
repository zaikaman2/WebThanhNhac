import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Course } from '@/components/shared/types'

async function getCourse(id: string): Promise<Course | null> {
  const { data, error } = await supabase
    .from('Course')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data
}

interface PageProps {
  params: {
    id: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function CoursePage({ params, searchParams }: PageProps) {
  const course = await getCourse(params.id)

  if (!course) {
    notFound()
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-darker to-secondary-light opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary opacity-20 blur-lg rounded-lg"></div>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl relative"
                  priority
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary tracking-normal leading-[1.2]">
                {course.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {course.description}
              </p>
              <div className="bg-secondary-light p-6 rounded-xl border border-primary/10 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Học phí</span>
                  <span className="text-primary text-2xl font-bold">
                    {course.price.toLocaleString('vi-VN')}
                  </span>
                </div>
                <Link
                  href={`/checkout/${course.id}`}
                  className="block w-full bg-primary text-secondary text-center py-4 rounded-full font-bold hover:bg-primary-light transition-all duration-300"
                >
                  Đăng ký ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Nội dung khóa học
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.curriculum?.map((item, index) => (
              <div 
                key={index}
                className="bg-secondary-light p-6 rounded-xl border border-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Lợi ích khóa học
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {course.benefits?.map((benefit, index) => (
              <div 
                key={index}
                className="bg-secondary-light p-8 rounded-xl border border-primary/10"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Học viên nói gì về khóa học
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {course.testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-secondary-light p-8 rounded-2xl border border-primary/10">
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-light to-primary rounded-full blur opacity-70"></div>
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover border-4 border-secondary relative"
                    />
                  </div>
                  <p className="text-gray-300 mb-4 text-center italic">"{testimonial.content}"</p>
                  <h3 className="text-primary font-semibold">{testimonial.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
