import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { Course } from '@/components/shared/types'

async function getCourse(): Promise<Course | null> {
  try {
    const { data, error } = await supabase
      .from('Course')
      .select('*')
      .eq('type', 'advanced')
      .single()
    
    if (error) {
      return {
        id: '3',
        type: 'advanced',
        title: 'Khóa học thanh nhạc nâng cao',
        description: 'Phát triển kỹ năng thanh nhạc chuyên nghiệp với các kỹ thuật nâng cao.',
        price: 4500000,
        image: '/images/course-advanced.jpg'
      }
    }
    return data
  } catch (err) {
    return {
      id: '3',
      type: 'advanced',
      title: 'Khóa học thanh nhạc nâng cao',
      description: 'Phát triển kỹ năng thanh nhạc chuyên nghiệp với các kỹ thuật nâng cao.',
      price: 4500000, 
      image: '/images/course-advanced.jpg'
    }
  }
}

export default async function AdvancedCoursePage() {
  const course = await getCourse()

  if (!course) {
    return <div>Không tìm thấy khóa học</div>
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
              <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">
                {course.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {course.description}
              </p>
              <div className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Học phí</span>
                  <span className="text-primary text-2xl font-bold">
                    {course.price.toLocaleString('vi-VN')}
                  </span>
                </div>
                <Link
                  href={`/checkout/advanced`}
                  className="block w-full bg-primary text-secondary text-center py-4 rounded-full font-bold hover:bg-primary-light transition-all duration-300"
                >
                  Đăng ký ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}