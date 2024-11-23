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
      title: 'Phần 1: Lấy hơi và kiểm soát hơi thở',
      lessons: [
        {
          title: 'Bài 1: Nguyên tắc lấy hơi trong thanh nhạc',
          content: [
            'Hiểu sự khác biệt giữa lấy hơi để thở thường và lấy hơi trong thanh nhạc',
            'Luyện tập lấy hơi nhanh như ngáp và giữ hơi chắc như nén'
          ]
        },
        {
          title: 'Bài 2: Kiểm soát hơi thở khi phát âm',
          content: [
            'Kỹ thuật kiểm soát hơi khi hát: ra hơi chậm, đều',
            'Tập kiểm soát hơi thông qua các bài tập nhỏ, vừa, và lớn'
          ]
        }
      ]
    },
    {
      title: 'Phần 2: Đặt âm thanh đúng',
      lessons: [
        {
          title: 'Bài 3: Đặt âm thanh đúng vị trí',
          content: [
            'Học cách phát âm để âm thanh vang từ môi và hướng ra trước mặt',
            'Thực hành âm "O", "A", "E", "I"'
          ]
        },
        {
          title: 'Bài 4: Tập rung môi để phát âm đúng',
          content: [
            'Bài tập rung môi giúp âm thanh vang tự nhiên'
          ]
        }
      ]
    },
    {
      title: 'Phần 3: Hát ở âm trung',
      lessons: [
        {
          title: 'Bài 5: Hát các nguyên âm ở âm trung',
          content: [
            'Luyện hát ở âm trung (không quá cao, không quá thấp) với các nguyên âm',
            'Ví dụ: "Hô hô hô, hà hà hà"'
          ]
        },
        {
          title: 'Bài 6: Kiểm soát âm lượng qua lực hơi',
          content: [
            'Tập phát âm với lượng hơi nhỏ, trung bình, và mạnh',
            'Hiểu mối quan hệ giữa lực hơi và độ lớn của âm thanh'
          ]
        }
      ]
    },
    {
      title: 'Phần 4: Tập rung và tạo cảm giác âm thanh',
      lessons: [
        {
          title: 'Bài 7: Luyện tập rung âm thanh',
          content: [
            'Tập rung dây thanh bằng rung tự nhiên và dùng ngón tay để hỗ trợ'
          ]
        },
        {
          title: 'Bài 8: Phát âm trầm và cảm nhận rung ở ngực',
          content: [
            'Luyện âm trầm, tập cảm giác âm thanh chảy xuống ngực',
            'Kiểm tra độ rung của ngực khi phát âm'
          ]
        }
      ]
    },
    {
      title: 'Phần 5: Luyện các nốt cao',
      lessons: [
        {
          title: 'Bài 9: Kỹ thuật lấy hơi và giữ hơi cho nốt cao',
          content: [
            'Lấy hơi đầy đủ và giữ hơi chắc ở nền móng',
            'Tập thả lỏng cổ, không gồng khi hát nốt cao'
          ]
        },
        {
          title: 'Bài 10: Tập âm lượng nhỏ cho nốt cao',
          content: [
            'Hát nốt cao với âm lượng trung bình hoặc nhỏ, tránh làm căng dây thanh'
          ]
        }
      ]
    },
    {
      title: 'Phần 6: Xử lý bài hát',
      lessons: [
        {
          title: 'Bài 11: Cách xử lý cảm xúc trong bài hát',
          content: [
            'Hiểu ý nghĩa bài hát và điều chỉnh cách hát cho phù hợp'
          ]
        },
        {
          title: 'Bài 12: Tập luyện xử lý bài hát mẫu (1)',
          content: [
            'Ví dụ bài: Cắt đôi nỗi sầu'
          ]
        },
        {
          title: 'Bài 13: Tập luyện xử lý bài hát mẫu (2)',
          content: [
            'Ví dụ bài: Ngày mai người ta lấy chồng'
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