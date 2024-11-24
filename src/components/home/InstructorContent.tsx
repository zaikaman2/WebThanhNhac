'use client'

import Image from 'next/image'
import Link from 'next/link'
import SlideIn from '@/components/shared/SlideIn'
import GlowingEffect from '@/components/shared/GlowingEffect'

export default function InstructorContent() {
  return (
    <>
      <SlideIn direction="up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-primary">
          Giảng viên thanh nhạc chuyên nghiệp
        </h2>
      </SlideIn>
      
      <div className="flex flex-col md:flex-row items-start gap-20">
        <SlideIn direction="left">
          <div className="w-[300px] h-[300px]">
            <GlowingEffect intensity={0.4} duration={4}>
              <Image
                src="https://i.ibb.co/3c9RJm2/1732274222865.jpg"
                alt="Giảng viên Đinh Trung Kiên"
                width={300}
                height={300}
                className="rounded-lg relative aspect-square object-cover"
                priority
              />
            </GlowingEffect>
          </div>
        </SlideIn>
        
        <SlideIn direction="right" delay={200}>
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl text-primary font-bold">Đinh Trung Kiên</h3>
            <div className="space-y-6 max-w-3xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                Với hơn 30 năm kinh nghiệm trong lĩnh vực sư phạm thanh nhạc, thầy Đinh Trung Kiên 
                đã đồng hành và phát triển tài năng cho hàng nghìn học viên trên khắp cả nước.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Là người đạt giải nhất tiếng hát phát thanh năm 2004 và huy chương vàng diễn viên 
                ca kịch năm 1992. Thầy Kiên đã từng là giảng viên của Đại học Văn hóa nghệ thuật 
                Quân đội và Cao đẳng văn hóa nghệ thuật TPHCM.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Với hơn 30 năm kinh nghiệm làm ca sĩ ở nhiều sự kiện nổi trội, thầy Kiên cam kết 
                sẽ giúp học viên phát triển kỹ thuật thanh nhạc một cách toàn diện và chuyên nghiệp.
              </p>
            </div>
            <Link 
              href="/about"
              className="inline-block bg-primary text-secondary px-12 py-4 rounded-full font-bold text-lg 
                hover:bg-primary-light transition-all duration-300"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </SlideIn>
      </div>
    </>
  )
} 