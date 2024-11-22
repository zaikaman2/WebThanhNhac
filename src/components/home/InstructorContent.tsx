'use client'

import Image from 'next/image'
import Link from 'next/link'
import SlideIn from '@/components/shared/SlideIn'

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
            <div className="relative">
              <div className="absolute -inset-4 bg-primary opacity-20 blur-3xl rounded-lg"></div>
              <Image
                src="https://i.ibb.co/3c9RJm2/1732274222865.jpg"
                alt="Giảng viên Đinh Trung Kiên"
                width={300}
                height={300}
                className="rounded-lg relative aspect-square object-cover"
                priority
              />
            </div>
          </div>
        </SlideIn>
        
        <SlideIn direction="right" delay={200}>
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl text-primary font-bold">Đinh Trung Kiên</h3>
            <div className="space-y-6 max-w-3xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực đào tạo thanh nhạc, thầy Đinh Trung Kiên 
                đã đồng hành và phát triển tài năng cho hàng nghìn học viên trên khắp cả nước.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Là người đạt giải nhất cuộc thi thanh nhạc quốc gia 2020 và từng là huấn luyện viên 
                The Voice Vietnam 2022, thầy Kiên không chỉ là một người thầy mà còn là người 
                truyền cảm hứng cho những người đam mê âm nhạc.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Với phương pháp giảng dạy khoa học và tận tâm, thầy Kiên cam kết sẽ giúp học viên 
                phát triển kỹ thuật thanh nhạc một cách toàn diện và chuyên nghiệp.
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