"use client"

import { useRef } from 'react'
import { Course } from '@/components/shared/types'
import ImageWithLoading from '@/components/shared/ImageWithLoading'
import { Users, MapPin, Calendar, CheckCircle, Music, Star, Phone, Facebook} from 'lucide-react'
import SlideIn from '@/components/shared/SlideIn'

interface AdvancedCourseContentProps {
  course: Course
}

const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-6 h-6"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export default function AdvancedCourseContent({ course }: AdvancedCourseContentProps) {
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
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
      value: '0931816175',
      href: 'tel:0931816175'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: 'Facebook',
      value: 'Thanh Nhạc Kiên Đinh',
      href: 'https://www.facebook.com/thanhnhackiendinh'
    },
    {
      icon: <TikTokIcon />,
      title: 'TikTok',
      value: '@kienvocal',
      href: 'https://www.tiktok.com/@kienvocal'
    }
  ]

  return (
    <main>
      <section className="relative bg-secondary text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-darker to-secondary-light opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <SlideIn direction="left">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary-light/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative">
                    <ImageWithLoading
                      src={course.image}
                      alt={course.title}
                      width={600}
                      height={400}
                      className="rounded-xl shadow-2xl w-full aspect-video object-cover"
                    />
                  </div>
                </div>
              </SlideIn>
            </div>
            
            <div className="md:w-1/2">
              <SlideIn direction="right">
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
                  <button
                    onClick={scrollToContact}
                    className="block w-full bg-primary text-secondary text-center py-4 rounded-full font-bold hover:bg-primary-light transition-all duration-300"
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-24 bg-secondary relative overflow-hidden" ref={contactRef}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SlideIn direction="up">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Liên hệ tư vấn
            </h2>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <SlideIn key={index} direction="up" delay={index * 100}>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-light p-6 rounded-xl border border-primary/10 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
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