import Link from 'next/link'
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react'

export default function Banner() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-secondary text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-primary/20 overflow-hidden">
      {/* Subtle stage ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-secondary to-[#111111] opacity-90 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Academy Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Học Viện Thanh Nhạc Trực Tuyến KienVocal</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Học Thanh Nhạc Cùng <br className="hidden sm:inline" />
          <span className="text-primary">Giảng Viên Đinh Trung Kiên</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Nơi đánh thức giọng hát bản năng, làm chủ hơi thở và tự tin cất cao tiếng hát với phương pháp sư phạm khoa học hơn 30 năm kinh nghiệm.
        </p>

        {/* Big Clean Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-secondary px-9 py-4 rounded-full font-bold text-base transition-all duration-200 shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 uppercase tracking-wider"
          >
            <span>Khám phá khóa học</span>
            <ArrowRight className="w-5 h-5 text-secondary" />
          </Link>

          <a
            href="#tu-van"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-base border-2 border-primary/40 hover:border-primary transition-all duration-200 uppercase tracking-wider"
          >
            <PhoneCall className="w-4 h-4 text-primary" />
            <span>Nhận tư vấn ngay</span>
          </a>
        </div>

      </div>
    </section>
  )
}
