import Image from 'next/image'
import Link from 'next/link'
import { Award, GraduationCap, ArrowRight } from 'lucide-react'

export default function WelcomeSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#141414] text-white border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (VietVocal Style) */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase mb-2">
            Lời Chào Mừng Từ Giảng Viên
          </h2>
          <p className="text-lg sm:text-xl text-primary font-semibold">
            Thầy Đinh Trung Kiên
          </p>
        </div>

        {/* 2-Column Content: Letter on Left, Portrait on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Letter text */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
            <p>
              Chào đón bạn đến với <strong className="text-white font-bold">KienVocal</strong>. Tôi luôn có một niềm tin cốt lõi: 
              <span className="italic text-primary"> &ldquo;Ca hát không dành riêng cho một vài người có năng khiếu bẩm sinh – ca hát là dành cho tất cả chúng ta&rdquo;</span>.
            </p>

            <p>
              Khởi động Học viện thanh nhạc trực tuyến KienVocal, tôi hy vọng sẽ hiện thực hóa ước mơ chia sẻ và phổ cập âm nhạc bài bản đến hàng triệu người yêu ca hát trên khắp cả nước, chắp cánh đam mê cho những ai chưa có điều kiện tiếp cận với môi trường đào tạo chuyên nghiệp.
            </p>

            <p>
              Với hơn 30 năm kinh nghiệm trong lĩnh vực sư phạm thanh nhạc và ca sĩ biểu diễn sân khấu, tôi cam kết mang đến những phương pháp khoa học, dễ hiểu, giúp bạn giải phóng những áp lực ở cổ họng, làm chủ cột hơi và tự tin cất cao tiếng hát của chính mình.
            </p>

            {/* Quick credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary-light/60 border border-primary/15">
                <Award className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-200">
                  Giải Nhất Tiếng Hát Phát Thanh 2004 & HCV Ca Kịch 1992
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary-light/60 border border-primary/15">
                <GraduationCap className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-200">
                  Nguyên Giảng Viên ĐH VHNT Quân Đội & CĐ VHNT TP.HCM
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-bold text-base transition-colors"
              >
                <span>Tìm hiểu thêm về giảng viên</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 bg-secondary">
              <Image
                src="https://i.ibb.co/3c9RJm2/1732274222865.jpg"
                alt="Giảng viên Đinh Trung Kiên"
                width={500}
                height={600}
                className="w-full h-auto object-cover aspect-[4/5]"
                priority
              />
              <div className="p-4 bg-secondary text-center border-t border-primary/20">
                <div className="font-bold text-white text-lg">Giảng viên Đinh Trung Kiên</div>
                <div className="text-xs text-primary">Nhà sáng lập KienVocal</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
