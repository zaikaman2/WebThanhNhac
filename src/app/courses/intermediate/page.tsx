import { getCourseByType } from '@/lib/getCourses'
import ImageWithLoading from '@/components/shared/ImageWithLoading'
import { BookOpen, Clock, Award, CheckCircle, Mic2, Music, Star } from 'lucide-react'
import SlideIn from '@/components/shared/SlideIn'
import CourseRegisterButton from '@/components/shared/CourseRegisterButton'

export default async function IntermediatePage() {
  const course = await getCourseByType('intermediate')

  if (!course) {
    return <div>Không tìm thấy khóa học</div>
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

  const courseContent = [
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
            'Các mẹo chăm sóc giọng hát chuyên nghiệp',
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
                className="rounded-xl shadow-2xl"
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
                <CourseRegisterButton courseType="intermediate" />
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
            {courseContent.map((section, index) => (
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
    </main>
  )
} 