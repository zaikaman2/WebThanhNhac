import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { Course } from '@/components/shared/types'
import CourseCard from '@/components/shared/CourseCard'
import { Users, Layers, Target, Award, Star } from 'lucide-react'
import { getCourses } from '@/lib/getCourses'

export default async function CoursesPage() {
  const courses = await getCourses()

  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Giảng viên chuyên nghiệp',
      description: 'Được đào tạo bởi giảng viên có hơn 30 năm kinh nghiệm trong lĩnh vực thanh nhạc'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Lộ trình rõ ràng',
      description: 'Chương trình học được thiết kế khoa học từ cơ bản đến nâng cao'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Phương pháp hiệu quả',
      description: 'Phương pháp giảng dạy độc quyền giúp học viên tiến bộ nhanh chóng'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Giảng dạy tận tâm',
      description: 'Giảng viên luôn sẵn sàng hỗ trợ và giải đáp thắc mắc của học viên'
    }
  ]

  const faqs = [
    {
      question: 'Tôi chưa biết gì về thanh nhạc có thể học được không?',
      answer: 'Hoàn toàn có thể! Khóa học cơ bản được thiết kế phù hợp cho người mới bắt đầu, giúp bạn xây dựng nền tảng vững chắc.'
    },
    {
      question: 'Tôi có thể học thử trước khi đăng ký không?',
      answer: 'Có, bạn có thể xem các video demo miễn phí trên kênh YouTube của chúng tôi để tham khảo phương pháp giảng dạy.'
    },
    {
      question: 'Sau khi mua khóa học tôi có thể xem trong bao lâu?',
      answer: 'Bạn có thể xem không giới hạn kể từ ngày mua khóa học.'
    },
    {
      question: 'Làm sao để được hỗ trợ khi gặp khó khăn?',
      answer: 'Chúng tôi có đội ngũ hỗ trợ qua số điện thoại và email.'
    }
  ]

  const testimonials = [
    {
      name: 'Nguyễn Thị Kim',
      avatar: 'https://i.ibb.co/n3H5Nq5/3282224-removebg-preview.png',
      content: 'Sau 13 ngày học, giọng hát của tôi đã cải thiện rõ rệt. Thầy Kiên dạy rất tận tâm và dễ hiểu.',
      rating: 5
    },
    {
      name: 'Trần Thị Diễm', 
      avatar: 'https://i.ibb.co/n3H5Nq5/3282224-removebg-preview.png',
      content: 'Phương pháp giảng dạy rất khoa học và hiệu quả. Tôi đã tự tin hơn nhiều khi hát.',
      rating: 5
    },
    {
      name: 'Lê Minh Hải',
      avatar: 'https://i.ibb.co/n3H5Nq5/3282224-removebg-preview.png', 
      content: 'Các khóa học rất đáng giá đồng tiền. Nội dung chi tiết và được hỗ trợ nhiệt tình.',
      rating: 5
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-darker to-secondary-light opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary tracking-normal leading-[1.2] md:leading-[1.15]">
              Khóa học thanh nhạc
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-normal">
              Khám phá các khóa học được thiết kế chuyên biệt giúp bạn phát triển kỹ năng thanh nhạc 
              từ cơ bản đến nâng cao
            </p>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Tại sao chọn KienVocal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="bg-secondary-light p-6 rounded-xl border border-primary/10 hover:shadow-xl transition-all duration-300">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            Học viên nói gì về chúng tôi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{item.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Câu hỏi thường gặp
          </h2>
          <div className="space-y-8">
            {faqs.map((item, index) => (
              <div key={index} className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                <h3 className="text-lg font-semibold text-primary mb-2">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
