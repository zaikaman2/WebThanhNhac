import Image from 'next/image'
import Link from 'next/link'

export default async function Instructor() {
  return (
    <section className="py-24 bg-neutral-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
          Giảng viên thanh nhạc chuyên nghiệp
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary opacity-20 blur-lg rounded-lg"></div>
              <Image
                src="https://i.ibb.co/3c9RJm2/1732274222865.jpg"
                alt="Giảng viên Đinh Trung Kiên"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl relative object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl text-primary mb-8 font-semibold">Đinh Trung Kiên</h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực đào tạo thanh nhạc, thầy Đinh Trung Kiên 
                đã đồng hành và phát triển tài năng cho hàng nghìn học viên trên khắp cả nước.
              </p>
              <p className="leading-relaxed">
                Là người đạt giải nhất cuộc thi thanh nhạc quốc gia 2020 và từng là huấn luyện viên 
                The Voice Vietnam 2022, thầy Kiên không chỉ là một người thầy mà còn là người 
                truyền cảm hứng cho những người đam mê âm nhạc.
              </p>
              <p className="leading-relaxed">
                Với phương pháp giảng dạy khoa học và tận tâm, thầy Kiên cam kết sẽ giúp học viên 
                phát triển kỹ thuật thanh nhạc một cách toàn diện và chuyên nghiệp.
              </p>
            </div>
            <Link 
              href="/about"
              className="inline-block bg-primary text-secondary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-105 mt-8"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 