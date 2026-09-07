import { supabase } from '@/lib/supabase'
import TestimonialList from './TestimonialList'

interface TestimonialData {
  id: string
  name: string
  content: string
  avatar: string
}

const FALLBACK_TESTIMONIALS: TestimonialData[] = [
  {
    id: '1',
    name: 'Nguyễn Thị Kim',
    avatar: 'https://i.ibb.co/n3H5Nq5/3282224-removebg-preview.png',
    content: 'Sau 12 ngày học và làm theo bài tập nén hơi của Thầy Kiên, giọng hát của mình đã cải thiện rõ rệt, không còn bị đuối khi lên nốt cao. Thầy dạy rất dễ hiểu.',
  },
  {
    id: '2',
    name: 'Trần Thị Diễm',
    avatar: 'https://i.ibb.co/n3H5Nq5/3282224-removebg-preview.png',
    content: 'Phương pháp giảng dạy của Thầy vô cùng khoa học và gần gũi. Trước đây mình hát bị nghẹt cổ, giờ đã biết cách mở khẩu hình vòm họng vang sáng hơn rất nhiều.',
  },
  {
    id: '3',
    name: 'Lê Minh Hải',
    avatar: 'https://i.ibb.co/n3H5Nq5/3282224-removebg-preview.png',
    content: 'Khóa học thực sự rất đáng giá tiền. Nội dung chi tiết, bài tập bám sát thực tế và được Thầy góp ý chỉnh sửa tận tình khi gửi bài tập.',
  },
]

async function getTestimonials(): Promise<TestimonialData[]> {
  try {
    const { data, error } = await supabase
      .from('Testimonial')
      .select('*')
    
    if (error || !data || data.length === 0) return FALLBACK_TESTIMONIALS
    return data
  } catch {
    return FALLBACK_TESTIMONIALS
  }
}

export default async function TestimonialsServer() {
  const testimonials = await getTestimonials()

  return (
    <section className="py-20 lg:py-24 bg-secondary text-white border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (VietVocal Style) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-3">
            Cảm Nhận Của Học Viên
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Hàng nghìn học viên đã tìm thấy niềm vui và sự tự tin khi cất cao giọng hát cùng KienVocal.
          </p>
        </div>
        
        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialList key={testimonial.id} {...testimonial} />
          ))}
        </div>

      </div>
    </section>
  )
}