'use client'

import { useState } from 'react'
import { useUser } from '@/hooks/useUser'
import CourseAccessCheck from '@/components/shared/CourseAccessCheck'
import VideoPlayer from '@/components/learn/VideoPlayer'
import CourseContent from '@/components/learn/CourseContent'
import LessonComments from '@/components/learn/LessonComments'

const courseSections = [
  {
    title: 'Phần 1: Lấy hơi và kiểm soát hơi thở',
    lessons: [
      {
        id: 1,
        title: 'Bài 1: Nguyên tắc lấy hơi trong thanh nhạc',
        duration: '10:28',
        description: 'Hiểu sự khác biệt giữa lấy hơi để thở thường và lấy hơi trong thanh nhạc. Luyện tập lấy hơi nhanh như ngáp và giữ hơi chắc như nén.',
        videoId: '1033721174'
      },
      {
        id: 2,
        title: 'Bài 2: Kiểm soát hơi thở khi phát âm',
        duration: '03:02',
        description: 'Kỹ thuật kiểm soát hơi khi hát: ra hơi chậm, đều. Tập kiểm soát hơi thông qua các bài tập nhỏ, vừa, và lớn.',
        videoId: '1033700924'
      }
    ]
  },
  {
    title: 'Phần 2: Đặt âm thanh đúng',
    lessons: [
      {
        id: 3,
        title: 'Bài 3: Đặt âm thanh đúng vị trí',
        duration: '07:45',
        description: 'Học cách phát âm để âm thanh vang từ môi và hướng ra trước mặt. Thực hành âm "O", "A", "E", "I".',
        videoId: '1033722684'
      },
      {
        id: 4,
        title: 'Bài 4: Tập rung môi để phát âm đúng',
        duration: '05:27',
        description: 'Bài tập rung môi giúp âm thanh vang tự nhiên.',
        videoId: '1033700672'
      }
    ]
  },
  {
    title: 'Phần 3: Hát ở âm trung',
    lessons: [
      {
        id: 5,
        title: 'Bài 5: Hát các nguyên âm ở âm trung',
        duration: '10:28',
        description: 'Luyện hát ở âm trung (không quá cao, không quá thấp) với các nguyên âm. Ví dụ: "Hô hô hô, hà hà hà".',
        videoId: '1033729475'
      },
      {
        id: 6,
        title: 'Bài 6: Kiểm soát âm lượng qua lực hơi',
        duration: '07:05',
        description: 'Tập phát âm với lượng hơi nhỏ, trung bình, và mạnh. Hiểu mối quan hệ giữa lực hơi và độ lớn của âm thanh.',
        videoId: '1033806012'
      }
    ]
  },
  {
    title: 'Phần 4: Tập rung và tạo cảm giác âm thanh',
    lessons: [
      {
        id: 7,
        title: 'Bài 7: Luyện tập rung âm thanh',
        duration: '05:41',
        description: 'Tập rung dây thanh bằng rung tự nhiên và dùng ngón tay để hỗ trợ.',
        videoId: '1034402221'
      },
      {
        id: 8,
        title: 'Bài 8: Phát âm trầm và cảm nhận rung ở ngực',
        duration: '05:15',
        description: 'Luyện âm trầm, tập cảm giác âm thanh chảy xuống ngực. Kiểm tra độ rung của ngực khi phát âm.',
        videoId: '1034406282'
      }
    ]
  },
  {
    title: 'Phần 5: Luyện các nốt cao và khẩu hình',
    lessons: [
      {
        id: 9,
        title: 'Bài 9: Kỹ thuật lấy hơi và giữ hơi cho nốt cao',
        duration: '07:47',
        description: 'Lấy hơi đầy đủ và giữ hơi chắc ở nền móng. Tập thả lỏng cổ, không gồng khi hát nốt cao.',
        videoId: '1034883248'
      },
      {
        id: 10,
        title: 'Bài 10: Khẩu hình trong thanh nhạc',
        duration: '14:30',
        description: 'Hướng dẫn như thế nào là khẩu hình đúng trong thanh nhạc.',
        videoId: 'https://res.cloudinary.com/...'
      }
    ]
  },
  {
    title: 'Phần 6: Xử lý bài hát',
    lessons: [
      {
        id: 11,
        title: 'Bài 11: Cách xử lý cảm xúc trong bài hát',
        duration: '10:14',
        description: 'Hiểu ý nghĩa bài hát và điều chỉnh cách hát cho phù hợp.',
        videoId: '1034589231'
      },
      {
        id: 12,
        title: 'Bài 12: Tập luyện xử lý bài hát mẫu (1)',
        duration: '08:28',
        description: 'Ví dụ bài: Cắt đôi nỗi sầu.',
        videoId: '1034738744'
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
                videoId={currentLesson?.videoId}
                title={currentLesson?.title || ''}
                courseType="basic"
                lessonId={currentLesson?.id || 1}
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
              
              <LessonComments 
                courseType="basic"
                lessonId={currentLesson?.id || 1}
              />
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