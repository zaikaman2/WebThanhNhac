import { Metadata } from 'next'
import Image from 'next/image'
import BlogNavigation from '@/components/blog/BlogNavigation'

export const metadata: Metadata = {
  title: 'Các Bài Tập Khởi Động Giọng Hát Hiệu Quả - Blog KienVocal',
  description: 'Tổng hợp các bài tập khởi động giọng hát quan trọng và cần thiết trước mỗi buổi luyện tập hoặc biểu diễn. Hướng dẫn chi tiết cách thực hiện để bảo vệ giọng hát.',
  openGraph: {
    title: 'Các Bài Tập Khởi Động Giọng Hát Hiệu Quả - Blog KienVocal',
    description: 'Tổng hợp các bài tập khởi động giọng hát quan trọng và cần thiết trước mỗi buổi luyện tập.',
    images: ['/images/blog/khoi-dong-giong-hat.jpg'],
  },
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <article>
        {/* Cover Image */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/blog/khoi-dong-giong-hat.jpg"
            alt="Các Bài Tập Khởi Động Giọng Hát"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <time className="text-gray-300 text-sm">21/01/2024</time>
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                    Bài tập thanh nhạc
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Các Bài Tập Khởi Động Giọng Hát Hiệu Quả Trước Khi Luyện Tập
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl">
                  Tổng hợp các bài tập khởi động giọng hát quan trọng và cần thiết trước mỗi buổi luyện tập 
                  hoặc biểu diễn. Hướng dẫn chi tiết cách thực hiện để bảo vệ giọng hát.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-primary mb-4">Mục lục</h2>
              <nav className="space-y-2">
                <a href="#gioi-thieu" className="block text-gray-300 hover:text-primary">
                  Giới thiệu
                </a>
                <a href="#tam-quan-trong" className="block text-gray-300 hover:text-primary">
                  1. Tầm quan trọng của khởi động giọng hát
                </a>
                <a href="#chuan-bi" className="block text-gray-300 hover:text-primary">
                  2. Chuẩn bị trước khi khởi động
                </a>
                <a href="#bai-tap-co-ban" className="block text-gray-300 hover:text-primary">
                  3. Các bài tập khởi động cơ bản
                </a>
                <a href="#lam-nong" className="block text-gray-300 hover:text-primary">
                  4. Bài tập làm nóng dây thanh
                </a>
                <a href="#mo-rong" className="block text-gray-300 hover:text-primary">
                  5. Bài tập mở rộng âm vực
                </a>
                <a href="#ky-thuat" className="block text-gray-300 hover:text-primary">
                  6. Bài tập phát triển kỹ thuật
                </a>
                <a href="#thoi-gian" className="block text-gray-300 hover:text-primary">
                  7. Thời gian và cường độ
                </a>
                <a href="#luu-y" className="block text-gray-300 hover:text-primary">
                  Lưu ý khi thực hiện
                </a>
                <a href="#dieu-chinh" className="block text-gray-300 hover:text-primary">
                  Điều chỉnh theo nhu cầu
                </a>
              </nav>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg prose-invert max-w-none
                prose-headings:text-primary prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-gray-300 prose-li:mb-2
                prose-ul:mb-6 prose-ul:list-none prose-ul:pl-0
                prose-ol:mb-6 prose-ol:list-decimal prose-ol:pl-6
                prose-strong:text-white prose-strong:font-semibold
                prose-a:text-primary hover:prose-a:text-primary-light
                prose-blockquote:border-l-4 prose-blockquote:border-primary 
                prose-blockquote:bg-white/5 prose-blockquote:rounded-lg 
                prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:mb-6
                [&>h2]:border-b [&>h2]:border-primary/30 [&>h2]:pb-4
                [&>h2]:font-bold
                [&>h3]:text-white [&>h3]:font-semibold
                [&>ul>li]:pl-6 [&>ul>li]:relative
                [&>ul>li]:before:content-['-'] [&>ul>li]:before:absolute [&>ul>li]:before:left-2
                [&>ul>li>ul]:mt-2 [&>ul>li>ul]:mb-0
                [&>ol>li>ul]:mt-2 [&>ol>li>ul]:mb-0
              "
            >
              <h2 id="gioi-thieu">Giới thiệu</h2>
              <p>
                Khởi động giọng hát là bước không thể thiếu trước mỗi buổi luyện tập hoặc biểu diễn. 
                Giống như việc khởi động cơ thể trước khi tập thể thao, khởi động giọng hát giúp bảo vệ 
                dây thanh và tạo nền tảng cho một buổi tập hiệu quả. Trong bài viết này, chúng ta sẽ tìm 
                hiểu về các bài tập khởi động giọng hát quan trọng và cách thực hiện chúng đúng cách.
              </p>

              <h2 id="tam-quan-trong">1. Tầm quan trọng của khởi động giọng hát</h2>
              <p>
                Khởi động giọng hát mang lại nhiều lợi ích quan trọng:
              </p>
              <ul>
                <li>Bảo vệ dây thanh khỏi tổn thương</li>
                <li>Làm nóng cơ quan phát âm</li>
                <li>Tăng độ linh hoạt cho giọng hát</li>
                <li>Chuẩn bị tâm lý sẵn sàng</li>
              </ul>

              <h3>Hậu quả của việc không khởi động</h3>
              <ul>
                <li>Dễ bị khàn giọng</li>
                <li>Mất kiểm soát cao độ</li>
                <li>Giọng hát không ổn định</li>
                <li>Tăng nguy cơ tổn thương dây thanh</li>
              </ul>

              <h2 id="chuan-bi">2. Chuẩn bị trước khi khởi động</h2>
              <p>
                Trước khi bắt đầu các bài tập, cần chuẩn bị:
              </p>

              <h3>Về cơ thể</h3>
              <ul>
                <li>Uống đủ nước ấm</li>
                <li>Tư thế thẳng lưng, thả lỏng</li>
                <li>Hít thở sâu và đều</li>
                <li>Giữ tinh thần thoải mái</li>
              </ul>

              <h3>Về không gian</h3>
              <ul>
                <li>Nơi yên tĩnh, thoáng khí</li>
                <li>Nhiệt độ phòng phù hợp</li>
                <li>Có gương để quan sát</li>
                <li>Đứng cách gương 1-2m</li>
              </ul>

              <h2 id="bai-tap-co-ban">3. Các bài tập khởi động cơ bản</h2>

              <h3>Bài tập thở</h3>
              <ul>
                <li>Hít vào bằng mũi (4 nhịp)</li>
                <li>Nín thở (4 nhịp)</li>
                <li>Thở ra bằng miệng (4 nhịp)</li>
                <li>Lặp lại 5-10 lần</li>
              </ul>

              <h3>Bài tập cổ và vai</h3>
              <ul>
                <li>Xoay cổ nhẹ nhàng</li>
                <li>Thả lỏng vai</li>
                <li>Massage vùng cổ họng</li>
                <li>Thực hiện các động tác từ từ</li>
              </ul>

              <h2 id="lam-nong">4. Bài tập làm nóng dây thanh</h2>

              <h3>Bài tập rung môi</h3>
              <ul>
                <li>Thở đều và rung môi</li>
                <li>Tạo âm "brr" từ thấp lên cao</li>
                <li>Giữ môi thả lỏng</li>
                <li>Duy trì 2-3 phút</li>
              </ul>

              <h3>Bài tập ngân nga</h3>
              <ul>
                <li>Sử dụng âm "mm" hoặc "ng"</li>
                <li>Di chuyển từ nốt thấp lên cao</li>
                <li>Giữ âm thanh đều đặn</li>
                <li>Cảm nhận sự rung ở mũi</li>
              </ul>

              <h2 id="mo-rong">5. Bài tập mở rộng âm vực</h2>

              <h3>Bài tập với nguyên âm</h3>
              <ul>
                <li>Bắt đầu với âm "a"</li>
                <li>Chuyển qua "e", "i", "o", "u"</li>
                <li>Di chuyển theo quãng 3</li>
                <li>Tăng dần độ khó</li>
              </ul>

              <h3>Bài tập liên kết âm</h3>
              <ul>
                <li>Kết hợp các nguyên âm</li>
                <li>Ví dụ: "a-e-i-o-u"</li>
                <li>Giữ âm thanh liền mạch</li>
                <li>Không ngắt quãng</li>
              </ul>

              <h2 id="ky-thuat">6. Bài tập phát triển kỹ thuật</h2>

              <h3>Bài tập staccato</h3>
              <ul>
                <li>Phát âm ngắt quãng</li>
                <li>Sử dụng âm "ha" hoặc "ta"</li>
                <li>Tăng dần tốc độ</li>
                <li>Giữ âm lượng đều</li>
              </ul>

              <h3>Bài tập legato</h3>
              <ul>
                <li>Hát liền giọng</li>
                <li>Sử dụng các nguyên âm</li>
                <li>Di chuyển mượt mà</li>
                <li>Không ngắt hơi</li>
              </ul>

              <h2 id="thoi-gian">7. Thời gian và cường độ</h2>

              <h3>Thời gian khởi động</h3>
              <ul>
                <li>Tối thiểu 15-20 phút</li>
                <li>Tối đa 30-45 phút</li>
                <li>Tùy theo mục đích luyện tập</li>
                <li>Điều chỉnh theo thể trạng</li>
              </ul>

              <h3>Cường độ phù hợp</h3>
              <ul>
                <li>Bắt đầu nhẹ nhàng</li>
                <li>Tăng dần cường độ</li>
                <li>Không gắng sức</li>
                <li>Lắng nghe cơ thể</li>
              </ul>

              <h2 id="luu-y">Lưu ý khi thực hiện</h2>

              <h3>Những điều nên làm</h3>
              <ul>
                <li>Thực hiện đúng trình tự</li>
                <li>Duy trì nhịp thở đều</li>
                <li>Lắng nghe cảm giác</li>
                <li>Tập trung vào chất lượng</li>
              </ul>

              <h3>Những điều cần tránh</h3>
              <ul>
                <li>Không khởi động khi mệt</li>
                <li>Tránh gắng sức quá mức</li>
                <li>Không bỏ qua các bước</li>
                <li>Không vội vàng</li>
              </ul>

              <h2 id="dieu-chinh">Điều chỉnh theo nhu cầu</h2>

              <h3>Trước khi luyện tập</h3>
              <ul>
                <li>Tập trung vào kỹ thuật cơ bản</li>
                <li>Khởi động toàn diện</li>
                <li>Thời gian 20-30 phút</li>
                <li>Chú ý đến cảm giác</li>
              </ul>

              <h3>Trước khi biểu diễn</h3>
              <ul>
                <li>Tập trung vào bài hát</li>
                <li>Khởi động có trọng tâm</li>
                <li>Thời gian 30-45 phút</li>
                <li>Giữ năng lượng</li>
              </ul>

              <blockquote>
                <p><strong>Lời khuyên từ giảng viên:</strong> Khởi động giọng hát là một quá trình quan trọng 
                không thể bỏ qua. Hãy coi đây là thói quen bắt buộc trước mỗi buổi luyện tập hoặc biểu diễn. 
                Việc khởi động đúng cách sẽ giúp bạn phát triển giọng hát bền vững và an toàn.</p>
              </blockquote>

              <p>
                Thực hiện đều đặn các bài tập khởi động trên sẽ giúp bạn bảo vệ giọng hát và cải thiện 
                chất lượng luyện tập. Hãy nhớ rằng, một buổi tập tốt luôn bắt đầu từ việc khởi động đúng cách.
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-6">
                <Image
                  src="https://i.ibb.co/3c9RJm2/1732274222865.jpg"
                  alt="Đinh Trung Kiên"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Đinh Trung Kiên</h3>
                  <p className="text-gray-300">
                    Giảng viên thanh nhạc với hơn 30 năm kinh nghiệm. Người sáng lập KienVocal 
                    với mong muốn mang kiến thức thanh nhạc đến gần hơn với mọi người.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <BlogNavigation />
          </div>
        </div>
      </article>
    </main>
  )
} 