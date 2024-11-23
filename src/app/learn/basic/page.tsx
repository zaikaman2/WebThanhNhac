'use client'

import { useState } from 'react'
import { useUser } from '@/hooks/useUser'
import CourseAccessCheck from '@/components/shared/CourseAccessCheck'
import VideoPlayer from '@/components/learn/VideoPlayer'
import CourseContent from '@/components/learn/CourseContent'

const courseSections = [
  {
    title: 'Phần 1: Nền tảng thanh nhạc',
    lessons: [
      {
        id: 1,
        title: 'Bài 1: Làm quen với thanh nhạc',
        duration: '10:30',
        description: 'Khám phá cơ bản về giọng hát và cách hoạt động của dây thanh. Bài học này sẽ giúp bạn hiểu rõ về cấu tạo và nguyên lý hoạt động của bộ máy phát âm, đặt nền móng cho việc học thanh nhạc.',
        videoUrl: 'https://res.cloudinary.com/ddrfu9ftt/video/upload/v1732350611/pmhk7vddle3y3cjnpuvy.mp4'
      },
      {
        id: 2,
        title: 'Bài 2: Kỹ thuật thở đúng cách',
        duration: '15:45',
        description: 'Tìm hiểu và thực hành kỹ thuật thở bụng cơ bản. Bạn sẽ học cách sử dụng cơ hoành hiệu quả và các bài tập giúp kiểm soát hơi thở tốt hơn khi hát.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 3,
        title: 'Bài 3: Luyện khẩu hình và phát âm',
        duration: '12:20',
        description: 'Hướng dẫn chi tiết về cách mở khẩu hình và phát âm chuẩn xác. Thông qua các bài tập với nguyên âm và phụ âm, bạn sẽ cải thiện được độ rõ ràng trong giọng hát.',
        videoUrl: 'https://res.cloudinary.com/...'
      }
    ]
  },
  {
    title: 'Phần 2: Luyện giọng và kiểm soát cao độ',
    lessons: [
      {
        id: 4,
        title: 'Bài 4: Làm ấm giọng',
        duration: '14:15',
        description: 'Học các bài tập khởi động giọng hát quan trọng. Bạn sẽ được hướng dẫn cách làm ấm giọng đúng cách và an toàn trước khi luyện tập hoặc biểu diễn.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 5,
        title: 'Bài 5: Mở rộng quãng giọng',
        duration: '16:30',
        description: 'Khám phá các kỹ thuật để mở rộng phạm vi giọng hát của bạn. Bài học tập trung vào việc phát triển khả năng hát các nốt cao và thấp một cách tự nhiên.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 6,
        title: 'Bài 6: Điều chỉnh cao độ và cảm âm',
        duration: '18:45',
        description: 'Phát triển khả năng nghe và hát đúng cao độ. Thông qua các bài tập thực hành, bạn sẽ nâng cao khả năng cảm thụ âm nhạc của mình.',
        videoUrl: 'https://res.cloudinary.com/...'
      }
    ]
  },
  {
    title: 'Phần 3: Biểu cảm và ứng dụng thực tế',
    lessons: [
      {
        id: 7,
        title: 'Bài 7: Tạo sắc thái trong giọng hát',
        duration: '15:20',
        description: 'Khám phá cách điều chỉnh âm lượng và màu sắc giọng hát. Bạn sẽ học được cách tạo ra những sắc thái khác nhau trong giọng hát để truyền tải cảm xúc tốt hơn.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 8,
        title: 'Bài 8: Hát đúng nhịp điệu',
        duration: '17:40',
        description: 'Tìm hiểu về nhịp và phách trong âm nhạc. Bài học này sẽ giúp bạn nắm vững cách đếm nhịp và hát đúng tiết tấu thông qua các bài tập thực hành.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 9,
        title: 'Bài 9: Biểu cảm khi trình diễn',
        duration: '13:55',
        description: 'Học cách kết hợp giữa giọng hát và ngôn ngữ cơ thể. Bạn sẽ được hướng dẫn cách thể hiện cảm xúc qua ánh mắt và cử chỉ khi trình diễn.',
        videoUrl: 'https://res.cloudinary.com/...'
      }
    ]
  },
  {
    title: 'Phần 4: Thực hành bài hát',
    lessons: [
      {
        id: 10,
        title: 'Bài 10: Lựa chọn bài hát phù hợp',
        duration: '11:25',
        description: 'Hướng dẫn cách chọn bài hát phù hợp với giọng hát của bạn. Học cách phân tích cấu trúc và độ khó của bài hát để lựa chọn và luyện tập hiệu quả.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 11,
        title: 'Bài 11: Thực hành bài hát cơ bản',
        duration: '20:15',
        description: 'Áp dụng các kỹ thuật đã học vào một bài hát cụ thể. Bạn sẽ được hướng dẫn chi tiết cách phân tích và thực hành từng đoạn trong bài hát.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 12,
        title: 'Bài 12: Tăng cường tự tin khi hát',
        duration: '16:40',
        description: 'Học cách kiểm soát cảm xúc và xây dựng sự tự tin khi hát. Khám phá các kỹ thuật giúp giảm căng thẳng và thể hiện bài hát một cách tự nhiên nhất.',
        videoUrl: 'https://res.cloudinary.com/...'
      },
      {
        id: 13,
        title: 'Bài 13: Tổng kết và hướng dẫn luyện tập lâu dài',
        duration: '19:30',
        description: 'Ôn tập lại toàn bộ kiến thức đã học và nhận hướng dẫn chi tiết về cách luyện tập hàng ngày. Bạn sẽ có được lộ trình rõ ràng để tiếp tục phát triển giọng hát của mình.',
        videoUrl: 'https://res.cloudinary.com/...'
      }
    ]
  }
]

export default function LearnBasicPage() {
  const { user } = useUser()
  const [currentLessonId, setCurrentLessonId] = useState(1)
  
  const currentLesson = courseSections
    .flatMap(section => section.lessons)
    .find(lesson => lesson.id === currentLessonId)

  return (
    <CourseAccessCheck courseType="basic" userId={user?.id}>
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