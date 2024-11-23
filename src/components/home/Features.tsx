import { Diamond, BookOpen, Video } from 'lucide-react'
import SlideIn from '@/components/shared/SlideIn'

export default function Features() {
  const features = [
    {
      icon: <Diamond className="w-12 h-12 text-primary" />,
      title: "Giảng viên chuyên nghiệp",
      description: "Được đào tạo bởi giảng viên Đinh Trung Kiên với hơn 10 năm kinh nghiệm trong lĩnh vực thanh nhạc."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Phương pháp khoa học",
      description: "Giáo trình được thiết kế khoa học, từ cơ bản đến nâng cao, giúp học viên tiến bộ nhanh chóng."
    },
    {
      icon: <Video className="w-12 h-12 text-primary" />,
      title: "Học tập linh hoạt",
      description: "Học trực tuyến bằng video trên website, giúp học viên có thể học mọi lúc, mọi nơi."
    }
  ]

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SlideIn direction="up">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Điểm nổi bật tại KienVocal
          </h2>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <SlideIn key={feature.title} direction="up" delay={index * 100}>
              <div className="bg-secondary-light p-8 rounded-2xl border border-primary/10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  )
} 