import { getCourseByType } from '@/lib/getCourses'
import Image from 'next/image'
import Link from 'next/link'
import { Course } from '@/components/shared/types'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import ImageWithLoading from '@/components/shared/ImageWithLoading'
import { Users, MapPin, Calendar, Phone, Facebook, Video } from 'lucide-react'
import SlideIn from '@/components/shared/SlideIn'

export default async function AdvancedPage() {
  const course = await getCourseByType('advanced')

  if (!course) {
    return <div>Không tìm thấy khóa học</div>
  }

  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Học 1 kèm 1',
      description: 'Chương trình được cá nhân hóa theo nhu cầu và trình độ của học viên'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Linh hoạt địa điểm',
      description: 'Học offline tại nhà thầy Kiên hoặc online qua Messenger'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Lịch học linh động',
      description: 'Sắp xếp thời gian học phù hợp với lịch trình của học viên'
    }
  ]

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Điện thoại',
      value: '0903100887',
      link: 'tel:0903100887'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: 'Facebook',
      value: 'Vocal Studio',
      link: 'https://www.facebook.com/thanhnhackiendinh'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'TikTok',
      value: '@vocalstudio',
      link: 'https://www.tiktok.com/@kienvocal'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-darker to-secondary-light opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <ImageWithLoading
                src={course.image}
                alt={course.title}
                width={600}
                height={400}
              />
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

      {/* Course Features */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <SlideIn key={index} direction="up" delay={index * 100}>
                <div className="bg-secondary-light p-6 rounded-xl border border-primary/10 hover:shadow-xl transition-all duration-300">
                  <div className="text-primary mb-4">{highlight.icon}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{highlight.title}</h3>
                  <p className="text-gray-300">{highlight.description}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SlideIn direction="up">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Đăng ký học
            </h2>
            <p className="text-xl text-center text-gray-300 mb-12">
              Liên hệ với chúng tôi qua các kênh sau để đăng ký và nhận tư vấn chi tiết
            </p>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <SlideIn key={index} direction="up" delay={index * 100}>
                <a 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-light p-6 rounded-xl border border-primary/10 hover:shadow-xl transition-all duration-300 block"
                >
                  <div className="text-primary mb-4">{method.icon}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{method.title}</h3>
                  <p className="text-gray-300">{method.value}</p>
                </a>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}