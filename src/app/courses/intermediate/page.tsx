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
import ReviewSection from '@/components/shared/ReviewSection'
import { generateMockReviews } from '@/utils/mockReviews'

export default function IntermediatePage() {
  const { user } = useUser()
  const [course, setCourse] = useState<Course | null>(null)
  const [showDevModal, setShowDevModal] = useState(false)
  const [devPassword, setDevPassword] = useState('')
  const [devError, setDevError] = useState('')

  useEffect(() => {
    async function loadCourse() {
      const response = await fetch('/api/courses/intermediate')
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

  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: '21 bài học chuyên sâu',
      description: 'Nội dung được thiết kế cho người đã có kiến thức cơ bản'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '6 tháng học tập',
      description: 'Thời gian đủ để phát triển kỹ năng chuyên nghiệp'
    },
    {
      icon: <Mic2 className="w-6 h-6" />,
      title: 'Kỹ thuật nâng cao',
      description: 'Học các kỹ thuật chuyên nghiệp như belting, riff & run'
    }
  ]

  const courseSections = [
    {
      title: 'Phần 1: Hoàn thiện kỹ thuật thanh nhạc cơ bản',
      lessons: [
        {
          title: 'Bài 1: Ôn tập và củng cố kỹ thuật cơ bản',
          content: [
            'Luyện tập lấy hơi, phát âm và mở khẩu hình nâng cao',
            'Kiểm tra và sửa lỗi phổ biến từ khóa học cơ bản'
          ]
        },
        {
          title: 'Bài 2: Tăng cường kiểm soát hơi thở',
          content: [
            'Bài tập giữ hơi dài hơn và kiểm soát áp lực hơi thở',
            'Ứng dụng trong các đoạn hát đòi hỏi nhiều kỹ thuật'
          ]
        },
        {
          title: 'Bài 3: Mở rộng quãng giọng nâng cao',
          content: [
            'Các bài tập tăng độ linh hoạt cho quãng giọng',
            'Thực hành xử lý các nốt cực cao (head voice) và cực thấp (chest voice)'
          ]
        },
        {
          title: 'Bài 4: Kỹ thuật nối quãng giọng (Bridging)',
          content: [
            'Học cách nối liền mượt mà giữa chest voice và head voice',
            'Thực hành với các bài luyện thanh ngắt quãng (interval training)'
          ]
        }
      ]
    },
    {
      title: 'Phần 2: Phát triển phong cách và màu sắc giọng hát',
      lessons: [
        {
          title: 'Bài 5: Phát triển vibrato',
          content: [
            'Hiểu cách tạo và kiểm soát vibrato',
            'Thực hành vibrato trong các bài hát dài và ngắn'
          ]
        },
        {
          title: 'Bài 6: Kỹ thuật belting',
          content: [
            'Học cách hát nốt cao mạnh mẽ mà không gây tổn thương dây thanh',
            'Thực hành belting an toàn và hiệu quả qua các bài tập thực tiễn'
          ]
        },
        {
          title: 'Bài 7: Tạo màu sắc giọng hát cá nhân',
          content: [
            'Cách khám phá và định hình phong cách riêng biệt qua giọng hát',
            'Phân tích các ca sĩ nổi tiếng để học cách tạo dấu ấn riêng'
          ]
        },
        {
          title: 'Bài 8: Xử lý sắc thái nâng cao',
          content: [
            'Kết hợp các yếu tố âm lượng, cảm xúc và nhấn nhá để truyền tải nội dung bài hát',
            'Bài tập thực hành chuyển đổi sắc thái trong một bài hát'
          ]
        }
      ]
    },
    {
      title: 'Phần 3: Xử lý bài hát phức tạp',
      lessons: [
        {
          title: 'Bài 9: Kỹ thuật chạy nốt (Riff & Run)',
          content: [
            'Học cách chạy nốt nhanh, chính xác, và mượt mà',
            'Bài tập với các mẫu riff & run từ cơ bản đến phức tạp'
          ]
        },
        {
          title: 'Bài 10: Hát giai điệu khó và nhảy quãng (Melismatic Singing)',
          content: [
            'Kỹ thuật xử lý các đoạn hát dài, nhảy quãng rộng',
            'Thực hành với các bài hát đòi hỏi độ chính xác cao về cao độ và nhịp điệu'
          ]
        },
        {
          title: 'Bài 11: Xử lý câu hát dài',
          content: [
            'Luyện tập hơi thở và kỹ thuật nối câu để giữ sự liền mạch trong các đoạn dài',
            'Thực hành trên các bài hát ballad hoặc opera'
          ]
        },
        {
          title: 'Bài 12: Kỹ thuật hát đa ngôn ngữ',
          content: [
            'Phát âm và xử lý các bài hát bằng tiếng Anh, Ý, Pháp, hoặc các ngôn ngữ khác',
            'Chú trọng vào âm sắc và nhịp điệu từng ngôn ngữ'
          ]
        }
      ]
    },
    {
      title: 'Phần 4: Biểu diễn chuyên nghiệp',
      lessons: [
        {
          title: 'Bài 13: Xử lý micro và âm thanh sân khấu',
          content: [
            'Cách sử dụng micro để hỗ trợ giọng hát tốt nhất',
            'Mẹo kiểm soát âm lượng và âm thanh trên sân khấu'
          ]
        },
        {
          title: 'Bài 14: Làm chủ biểu cảm sân khấu',
          content: [
            'Kết hợp ánh mắt, ngôn ngữ cơ thể và giọng hát để biểu diễn lôi cuốn',
            'Thực hành diễn xuất trên nền các bài hát cảm xúc mạnh'
          ]
        },
        {
          title: 'Bài 15: Ứng biến và sáng tạo trên sân khấu',
          content: [
            'Kỹ thuật ứng biến linh hoạt khi biểu diễn live',
            'Học cách xử lý lỗi kỹ thuật hoặc tình huống bất ngờ khi hát'
          ]
        }
      ]
    },
    {
      title: 'Phần 5: Hát chuyên sâu theo thể loại',
      lessons: [
        {
          title: 'Bài 16: Thanh nhạc cổ điển (Classical Singing)',
          content: [
            'Luyện kỹ thuật hát opera và nhạc cổ điển',
            'Tập trung vào cách nhả chữ, giữ hơi, và phát âm chuẩn mực'
          ]
        },
        {
          title: 'Bài 17: Thanh nhạc nhạc pop',
          content: [
            'Kỹ thuật hát pop hiện đại, xử lý giai điệu mềm mại và bắt tai',
            'Thực hành với các bài hit nổi tiếng'
          ]
        },
        {
          title: 'Bài 18: Thanh nhạc jazz',
          content: [
            'Cách sử dụng scatting, phrasing, và swing trong nhạc jazz',
            'Tập trung vào ngẫu hứng và làm mới bài hát'
          ]
        },
        {
          title: 'Bài 19: Thanh nhạc rock và nhạc kịch',
          content: [
            'Kỹ thuật giọng mạnh mẽ, đầy nội lực phù hợp với rock và nhạc kịch',
            'Thực hành với các bài hát nổi bật trong hai thể loại này'
          ]
        }
      ]
    },
    {
      title: 'Phần 6: Tối ưu hóa kỹ năng và hướng phát triển',
      lessons: [
        {
          title: 'Bài 20: Phòng tránh và khắc phục chấn thương giọng hát',
          content: [
            'Các mẹo chăm sc giọng hát chuyên nghiệp',
            'Xử lý nhanh khi giọng bị khàn, mất hơi hoặc căng dây thanh'
          ]
        },
        {
          title: 'Bài 21: Định hướng phát triển sự nghiệp ca hát',
          content: [
            'Lập kế hoạch luyện tập và cải thiện lâu dài',
            'Lời khuyên cho biểu diễn, thu âm chuyên nghiệp và xây dựng thương hiệu cá nhân'
          ]
        }
      ]
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

        const { error: purchaseError } = await supabase
          .from('purchases')
          .insert([
            {
              user_id: user.id,
              course_type: 'intermediate',
              order_code: 'DEV' + Date.now(),
              amount: 0,
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

  const intermediateReviews = [
    {
      id: 1,
      name: "Vũ Hoàng Long",
      rating: 5,
      comment: "Khóa học nâng cao này thực sự giúp mình phát triển kỹ thuật thanh nhạc lên tầm cao mới. Đặc biệt là phần luyện vibrato và xử lý bài hát rất chuyên nghiệp.",
      date: "12/03/2024"
    },
    {
      id: 2,
      name: "Nguyễn Thanh Thảo",
      rating: 5,
      comment: "Sau khi học xong khóa cơ bản, mình tiếp tục đăng ký khóa nâng cao và không hề thất vọng. Các kỹ thuật được dạy rất chuyên sâu và thực tế.",
      date: "08/03/2024"
    },
    {
      id: 3,
      name: "Trần Đức Thắng",
      rating: 4,
      comment: "Phần kỹ thuật belting và mix voice được giảng dạy rất chi tiết. Thầy rất chú trọng đến việc thực hành an toàn để không làm tổn thương dây thanh.",
      date: "03/03/2024"
    },
    {
      id: 4,
      name: "Lê Minh Phương",
      rating: 5,
      comment: "Mình đã có thể hát được những nốt cao mà trước đây không dám thử. Cảm ơn thầy đã giúp mình phát triển giọng hát toàn diện.",
      date: "28/02/2024"
    },
    {
      id: 5,
      name: "Đặng Thu Hà",
      rating: 5,
      comment: "Khóa học giúp mình hiểu sâu hơn về cách xử lý bài hát theo từng thể loại khác nhau. Đặc biệt là phần jazz và ballad rất bổ ích.",
      date: "23/02/2024"
    },
    {
      id: 6,
      name: "Bùi Quang Minh",
      rating: 5,
      comment: "Thầy không chỉ dạy kỹ thuật mà còn truyền đạt được cảm xúc trong âm nhạc. Mình đã học được cách làm cho bài hát trở nên sống động hơn.",
      date: "18/02/2024"
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
              <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">
                {course.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {course.description}
              </p>
              <div className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Học phí</span>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-400 line-through text-sm">
                      699.000
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-2xl font-bold">
                        {course.price.toLocaleString('vi-VN')}
                      </span>
                      <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full animate-bounce">
                        -14.4%
                      </span>
                    </div>
                  </div>
                </div>
                <CourseAccessButton courseType="intermediate" userId={user?.id} />
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

      {/* Course Content */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SlideIn direction="up">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Nội dung khóa học nâng cao
            </h2>
          </SlideIn>
          
          <div className="space-y-8">
            {courseSections.map((section, index) => (
              <SlideIn key={index} direction="up" delay={index * 100}>
                <div className="bg-secondary-light p-8 rounded-xl border border-primary/10">
                  <h3 className="text-2xl font-semibold text-primary mb-8">{section.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="space-y-3">
                        <h4 className="text-lg font-medium text-gray-200 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {lessonIndex + 1}
                          </span>
                          {lesson.title}
                        </h4>
                        <ul className="space-y-2 pl-10">
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

      <ReviewSection reviews={intermediateReviews} averageRating={4.8} />

      {showDevModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-secondary-light p-6 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-primary mb-4">Developer Access</h3>
            <form onSubmit={handleDevAccess} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={devPassword}
                  onChange={(e) => setDevPassword(e.target.value)}
                  placeholder="Nhập mật khẩu"
                  className="w-full bg-secondary border border-primary/10 rounded-lg px-4 py-2 text-white"
                />
                {devError && (
                  <p className="text-red-500 text-sm mt-1">{devError}</p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowDevModal(false)}
                  className="flex-1 bg-secondary-darker text-primary py-2 rounded-full hover:bg-secondary transition-all duration-300"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-secondary py-2 rounded-full hover:bg-primary-light transition-all duration-300"
                >
                  Xác nhận
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
} 