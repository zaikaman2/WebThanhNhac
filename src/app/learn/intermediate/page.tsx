'use client'

import { useState } from 'react'
import { useUser } from '@/hooks/useUser'
import CourseAccessCheck from '@/components/shared/CourseAccessCheck'
import VideoPlayer from '@/components/learn/VideoPlayer'
import CourseContent from '@/components/learn/CourseContent'

const courseSections = [
  {
    title: 'Phần 1: Hoàn thiện kỹ thuật thanh nhạc cơ bản',
    lessons: [
      {
        id: 1,
        title: 'Bài 1: Ôn tập và củng cố kỹ thuật cơ bản',
        duration: '15:30',
        description: 'Ôn lại và nâng cao các kỹ thuật cơ bản về hơi thở, phát âm và khẩu hình. Bài học này giúp bạn phát hiện và sửa các lỗi thường gặp, tạo nền tảng vững chắc cho các kỹ thuật nâng cao.',
        videoUrl: 'https://res.cloudinary.com/ddrfu9ftt/video/upload/v1732350611/pmhk7vddle3y3cjnpuvy.mp4'
      },
      {
        id: 2,
        title: 'Bài 2: Tăng cường kiểm soát hơi thở',
        duration: '18:45',
        description: 'Học các bài tập nâng cao về kiểm soát hơi thở, tập trung vào việc duy trì và điều chỉnh áp lực không khí. Bạn sẽ được thực hành với các bài tập thở chuyên sâu và ứng dụng vào các đoạn hát khó.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 3,
        title: 'Bài 3: Mở rộng quãng giọng nâng cao',
        duration: '20:15',
        description: 'Khám phá và mở rộng giới hạn của giọng hát thông qua các bài tập chuyên sâu. Học cách phát triển head voice và chest voice một cách an toàn và hiệu quả, đồng thời tăng độ linh hoạt cho giọng hát.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 4,
        title: 'Bài 4: Kỹ thuật nối quãng giọng (Bridging)',
        duration: '22:30',
        description: 'Tìm hiểu và thực hành kỹ thuật nối liền các quãng giọng một cách mượt mà. Bạn sẽ học cách chuyển đổi giữa chest voice và head voice tự nhiên, cùng với các bài tập interval training chuyên sâu.',
        videoUrl: 'https://res.cloudinary.com/...'
      }
    ]
  },
  {
    title: 'Phần 2: Phát triển phong cách và màu sắc giọng hát',
    lessons: [
      {
        id: 5,
        title: 'Bài 5: Phát triển vibrato',
        duration: '19:45',
        description: 'Học cách tạo và kiểm soát vibrato tự nhiên trong giọng hát. Khám phá các kỹ thuật để điều chỉnh tốc độ và cường độ vibrato, cùng với các bài tập thực hành để phát triển vibrato ổn định.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 6,
        title: 'Bài 6: Kỹ thuật belting',
        duration: '21:15',
        description: 'Tìm hiểu về kỹ thuật belting an toàn và hiệu quả. Học cách sử dụng năng lượng và kiểm soát hơi thở để hát nốt cao mạnh mẽ mà không gây tổn thương cho dây thanh.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 7,
        title: 'Bài 7: Tạo màu sắc giọng hát cá nhân',
        duration: '17:30',
        description: 'Khám phá và phát triển phong cách giọng hát độc đáo của riêng bạn. Phân tích các yếu tố tạo nên màu sắc giọng hát và học cách kết hợp các kỹ thuật để tạo dấu ấn cá nhân.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 8,
        title: 'Bài 8: Xử lý sắc thái nâng cao',
        duration: '23:45',
        description: 'Nâng cao khả năng diễn đạt cảm xúc thông qua giọng hát. Học cách kết hợp các yếu tố như âm lượng, cường độ và texture để tạo ra những thay đổi sắc thái tinh tế trong bài hát.',
        videoUrl: 'https://res.cloudinary.com/...'
      }
    ]
  },
  {
    title: 'Phần 3: Xử lý bài hát phức tạp',
    lessons: [
      {
        id: 9,
        title: 'Bài 9: Kỹ thuật chạy nốt (Riff & Run)',
        duration: '24:15',
        description: 'Học cách thực hiện các đoạn chạy nốt phức tạp một cách chính xác và mượt mà. Thực hành với các mẫu riff & run từ đơn giản đến phức tạp, tập trung vào tốc độ và độ chính xác.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 10,
        title: 'Bài 10: Hát giai điệu khó và nhảy quãng',
        duration: '25:30',
        description: 'Phát triển kỹ năng xử lý các giai điệu phức tạp và nhảy quãng lớn. Tập trung vào việc duy trì độ chính xác cao độ trong các đoạn melismatic và các bài hát có cấu trúc phức tạp.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 11,
        title: 'Bài 11: Xử lý câu hát dài',
        duration: '20:45',
        description: 'Nâng cao khả năng kiểm soát hơi thở để xử lý các câu hát dài. Học cách phân bổ hơi thở hiệu quả và duy trì chất lượng âm thanh trong suốt các đoạn hát kéo dài.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 12,
        title: 'Bài 12: Kỹ thuật hát đa ngôn ngữ',
        duration: '22:15',
        description: 'Tìm hiểu về cách phát âm và xử lý các bài hát bằng nhiều ngôn ngữ khác nhau. Học cách duy trì chất lượng giọng hát trong khi đảm bảo độ chính xác của phát âm và ngữ điệu.',
        videoUrl: 'https://res.cloudinary.com/...'
      }
    ]
  },
  {
    title: 'Phần 4: Biểu diễn chuyên nghiệp',
    lessons: [
      {
        id: 13,
        title: 'Bài 13: Xử lý micro và âm thanh sân khấu',
        duration: '19:30',
        description: 'Học cách sử dụng micro chuyên nghiệp và xử lý âm thanh trên sân khấu. Tìm hiểu về các kỹ thuật micro, monitor mix và cách điều chỉnh giọng hát theo môi trường biểu diễn.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 14,
        title: 'Bài 14: Làm chủ biểu cảm sân khấu',
        duration: '21:45',
        description: 'Phát triển kỹ năng trình diễn toàn diện trên sân khấu. Học cách kết hợp giọng hát với ngôn ngữ cơ thể, ánh mắt và cử chỉ để tạo ra những màn trình diễn đầy cảm xúc.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 15,
        title: 'Bài 15: Ứng biến và sáng tạo trên sân khấu',
        duration: '23:15',
        description: 'Nâng cao khả năng xử lý tình huống và sáng tạo trong biểu diễn live. Học cách ứng biến với các tình huống bất ngờ và tạo những khoảnh khắc độc đáo trên sân khấu.',
        videoUrl: 'https://res.cloudinary.com/...'
      }
    ]
  },
  {
    title: 'Phần 5: Hát chuyên sâu theo thể loại',
    lessons: [
      {
        id: 16,
        title: 'Bài 16: Thanh nhạc cổ điển (Classical Singing)',
        duration: '26:30',
        description: 'Tìm hiểu về kỹ thuật hát opera và nhạc cổ điển. Học cách phát triển giọng hát lyric, kỹ thuật legato và các phong cách biểu diễn trong nhạc cổ điển.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 17,
        title: 'Bài 17: Thanh nhạc nhạc pop',
        duration: '24:45',
        description: 'Khám phá các kỹ thuật hát pop hiện đại và cách xử lý các bài hit đương đại. Tập trung vào việc tạo sound hiện đại và các kỹ thuật mix voice phổ biến trong nhạc pop.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 18,
        title: 'Bài 18: Thanh nhạc jazz',
        duration: '25:15',
        description: 'Học cách hát jazz với các kỹ thuật như scatting và swing. Phát triển khả năng ứng biến và tạo phong cách riêng trong thể loại jazz.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 19,
        title: 'Bài 19: Thanh nhạc rock và nhạc kịch',
        duration: '27:30',
        description: 'Phát triển kỹ thuật hát mạnh mẽ cho rock và nhạc kịch. Học cách giữ giọng khỏe mạnh trong khi thể hiện các bài hát đòi hỏi nhiều năng lượng và cảm xúc.',
        videoUrl: 'https://res.cloudinary.com/...'
      }
    ]
  },
  {
    title: 'Phần 6: Tối ưu hóa kỹ năng và hướng phát triển',
    lessons: [
      {
        id: 20,
        title: 'Bài 20: Phòng tránh và khắc phục chấn thương giọng hát',
        duration: '23:45',
        description: 'Học cách bảo vệ và chăm sóc giọng hát chuyên nghiệp. Tìm hiểu về các phương pháp phòng tránh chấn thương và cách phục hồi giọng hát khi gặp vấn đề.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 21,
        title: 'Bài 21: Định hướng phát triển sự nghiệp ca hát',
        duration: '28:15',
        description: 'Nhận được những lời khuyên quý giá về phát triển sự nghiệp ca hát chuyên nghiệp. Học cách xây dựng thương hiệu cá nhân, tạo portfolio và định hướng phát triển lâu dài trong ngành công nghiệp âm nhạc.',
        videoUrl: 'https://res.cloudinary.com/...'
      }
    ]
  }
]

export default function LearnIntermediatePage() {
  const { user } = useUser()
  const [currentLessonId, setCurrentLessonId] = useState(1)
  
  const currentLesson = courseSections
    .flatMap(section => section.lessons)
    .find(lesson => lesson.id === currentLessonId)

  return (
    <CourseAccessCheck courseType="intermediate" userId={user?.id}>
      <main className="min-h-screen bg-secondary pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <VideoPlayer 
                src={currentLesson?.videoUrl || ''}
                title={currentLesson?.title || ''} 
              />
              <div className="mt-6">
                <h1 className="text-2xl font-bold text-primary mb-2">
                  {currentLesson?.title}
                </h1>
                <p className="text-gray-400 mb-4">
                  Thời lượng: {currentLesson?.duration}
                </p>
                <div className="bg-secondary-light p-6 rounded-lg border border-primary/10">
                  <p className="text-gray-300 leading-relaxed">
                    {currentLesson?.description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-primary mb-4">
                Nội dung khóa học
              </h2>
              <CourseContent 
                sections={courseSections}
                currentLessonId={currentLessonId}
                onSelectLesson={setCurrentLessonId}
              />
            </div>
          </div>
        </div>
      </main>
    </CourseAccessCheck>
  )
} 