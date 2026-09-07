import { Diamond, BookOpen, PlayCircle } from 'lucide-react'

export default function VietVocalHighlights() {
  const highlights = [
    {
      icon: <Diamond className="w-10 h-10 text-primary" />,
      title: "Học cùng Giảng viên 30+ năm",
      description: "Được đào tạo và hướng dẫn trực tiếp bởi Thầy Đinh Trung Kiên – người sẽ luôn đồng hành, theo sát và giải đáp khó khăn của bạn trong suốt khóa học."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: "Dễ học - Dễ hiểu - Dễ áp dụng",
      description: "Học thanh nhạc thú vị hơn với các bài giảng thực tế, giải thích cơ chế phát âm dễ hiểu, bài tập thực hành đơn giản mang lại hiệu quả ngay tức thì."
    },
    {
      icon: <PlayCircle className="w-10 h-10 text-primary" />,
      title: "Nền tảng hiện đại - Theo sát & Sửa lỗi",
      description: "Học trực tuyến linh hoạt mọi lúc mọi nơi trên điện thoại và máy tính. Học viên được gửi bài tập để Thầy thẩm định cao độ và sửa lỗi chi tiết."
    }
  ]

  return (
    <section className="py-20 bg-secondary text-white border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (VietVocal Style) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-3">
            3 Điều Chỉ Có Tại KienVocal
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* 3 Icon Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="text-center flex flex-col items-center p-8 rounded-2xl bg-secondary-light/40 border border-primary/10 hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
