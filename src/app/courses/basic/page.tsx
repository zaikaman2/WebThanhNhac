'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@/hooks/useUser'
import { supabase } from '@/lib/supabase'
import { Course } from '@/components/shared/types'
import toast from 'react-hot-toast'
import CourseAccessButton from '@/components/shared/CourseAccessButton'
import { BookOpen, Clock, Mic2, CheckCircle } from 'lucide-react'
import SlideIn from '@/components/shared/SlideIn'
import ImageWithLoading from '@/components/shared/ImageWithLoading'

export default function BasicCoursePage() {
  const { user } = useUser()
  const [course, setCourse] = useState<Course | null>(null)
  const [hasPurchased, setHasPurchased] = useState(false)
  const [showDevModal, setShowDevModal] = useState(false)
  const [devPassword, setDevPassword] = useState('')
  const [devError, setDevError] = useState('')

  useEffect(() => {
    async function loadCourse() {
      const response = await fetch('/api/courses/basic')
      const data = await response.json()
      setCourse(data)
    }
    loadCourse()
  }, [])

  useEffect(() => {
    const handleOpenDevModal = () => setShowDevModal(true)
    window.addEventListener('openDevModal', handleOpenDevModal)
    return () => window.removeEventListener('openDevModal', handleOpenDevModal)
  }, [])

  if (!course) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-primary">Loading...</div>
      </div>
    )
  }

  const courseContent = [
    {
      title: 'Phần 1: Khởi động và nền tảng cơ bản',
      lessons: [
        {
          title: 'Bài 1: Làm quen với thanh nhạc',
          content: [
            'Giới thiệu khóa học và tầm quan trọng của thanh nhạc',
            'Kiến thức cơ bản về giọng hát và cơ chế hoạt động của dây thanh quản'
          ]
        },
        {
          title: 'Bài 2: Kỹ thuật thở đúng cách',
          content: [
            'Hướng dẫn cách lấy hơi bằng cơ hoành',
            'Bài tập kiểm soát hơi thở và duy trì hơi lâu hơn'
          ]
        },
        {
          title: 'Bài 3: Luyện khẩu hình và phát âm',
          content: [
            'Các bài tập mở khẩu hình chuẩn xác để phát âm rõ ràng',
            'Thực hành với nguyên âm và phụ âm để cải thiện chất lượng giọng hát'
          ]
        }
      ]
    },
    {
      title: 'Phần 2: Luyện giọng và kiểm soát cao độ',
      lessons: [
        {
          title: 'Bài 4: Làm ấm giọng',
          content: [
            'Những bài tập làm ấm giọng trước khi hát để bảo vệ dây thanh',
            'Hướng dẫn luyện thanh cơ bản với âm "ma-me-mi-mo-mu"'
          ]
        },
        {
          title: 'Bài 5: Mở rộng quãng giọng',
          content: [
            'Phương pháp luyện thanh giúp hát được các nốt cao và thấp hơn',
            'Thực hành mở rộng quãng giọng với bài tập glissando'
          ]
        },
        {
          title: 'Bài 6: Điều chỉnh cao độ và cảm âm',
          content: [
            'Cách nghe và hát đúng cao độ qua các bài luyện ngắn',
            'Bài tập thẩm âm cơ bản để tăng khả năng cảm nhận âm thanh'
          ]
        }
      ]
    },
    {
      title: 'Phần 3: Biểu cảm và ứng dụng thực tế',
      lessons: [
        {
          title: 'Bài 7: Tạo sắc thái trong giọng hát',
          content: [
            'Cách điều chỉnh âm lượng, độ sáng và độ mềm của giọng hát',
            'Bài tập thay đổi sắc thái để tạo cảm xúc'
          ]
        },
        {
          title: 'Bài 8: Hát đúng nhịp điệu',
          content: [
            'Giới thiệu về nhịp và phách trong âm nhạc',
            'Thực hành hát đúng nhịp với các đoạn nhạc đơn giản'
          ]
        },
        {
          title: 'Bài 9: Biểu cảm khi trình diễn',
          content: [
            'Hướng dẫn cách truyền tải cảm xúc qua ánh mắt, cơ thể và giọng hát',
            'Tích hợp biểu cảm với lời bài hát'
          ]
        }
      ]
    },
    {
      title: 'Phần 4: Thực hành bài hát',
      lessons: [
        {
          title: 'Bài 10: Lựa chọn bài hát phù hợp',
          content: [
            'Cách chọn bài hát vừa sức và phù hợp với chất giọng',
            'Phân tích cấu trúc bài hát để luyện tập hiệu quả'
          ]
        },
        {
          title: 'Bài 11: Thực hành bài hát cơ bản',
          content: [
            'Hát thử một bài hát ngắn với sự hướng dẫn từng đoạn',
            'Tập trung vào hơi thở, cao độ và nhịp điệu'
          ]
        },
        {
          title: 'Bài 12: Tăng cường tự tin khi hát',
          content: [
            'Mẹo để giảm căng thẳng trước khi hát',
            'Thực hành bài hát hoàn chỉnh với sự tự tin'
          ]
        },
        {
          title: 'Bài 13: Tổng kết và hướng dẫn luyện tập lâu dài',
          content: [
            'Tóm tắt các kỹ thuật đã học trong khóa',
            'Gợi ý lịch luyện tập hàng ngày để duy trì và phát triển giọng hát'
          ]
        }
      ]
    }
  ]

  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: '13 bài học chi tiết',
      description: 'Nội dung được thiết kế khoa học từ cơ bản đến nâng cao'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '3 tháng học tập',
      description: 'Thời gian đủ để nắm vững các kỹ thuật cơ bản'
    },
    {
      icon: <Mic2 className="w-6 h-6" />,
      title: 'Kỹ thuật cơ bản',
      description: 'Học các kỹ thuật nền tảng cho thanh nhạc'
    }
  ]

  const handleDevAccess = async (e: React.FormEvent) => {
    e.preventDefault()
    setDevError('')
    
    if (devPassword === '17062004') {
      try {
        const { data: { user }, error: authError } = await supabase.auth.getUser()
        
        if (authError) {
          throw new Error('Lỗi xác thực: ' + authError.message)
        }
        
        if (!user) {
          toast.error('Vui lòng đăng nhập để tiếp tục')
          return
        }

        // Create purchase record without payment
        const { error: purchaseError } = await supabase
          .from('purchases')
          .insert([
            {
              user_id: user.id,
              course_type: 'basic',
              order_code: 'DEV' + Date.now(),
              amount: 0, // Free access
              payment_status: 'completed',
              created_at: new Date().toISOString()
            }
          ])

        if (purchaseError) {
          throw new Error('Lỗi tạo đơn hàng: ' + purchaseError.message)
        }

        toast.success('Kích hoạt khóa học thành công!')
        setShowDevModal(false)
        window.location.reload()
      } catch (error) {
        console.error('Dev access error:', error instanceof Error ? error.message : 'Unknown error')
        toast.error('Có lỗi xảy ra')
      }
    } else {
      setDevError('Mật khẩu không đúng')
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-darker to-secondary-light opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Left column with image */}
            <div className="md:w-1/2">
              <SlideIn direction="left">
                <ImageWithLoading
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </SlideIn>
            </div>
            
            {/* Right column with course info */}
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
                  <CourseAccessButton courseType="basic" userId={user?.id} />
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
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

      {/* Course Content */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Nội dung khóa học
          </h2>
          
          <div className="space-y-8">
            {courseContent.map((section, index) => (
              <SlideIn key={index} direction="up" delay={index * 100}>
                <div className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                  <h3 className="text-xl font-semibold text-primary mb-6">{section.title}</h3>
                  <div className="space-y-4">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="pl-4">
                        <h4 className="text-lg font-medium text-gray-200 mb-2">{lesson.title}</h4>
                        <ul className="space-y-2">
                          {lesson.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 