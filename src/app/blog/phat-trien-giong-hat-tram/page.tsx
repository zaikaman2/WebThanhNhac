import { Metadata } from 'next'
import Image from 'next/image'
import BlogNavigation from '@/components/blog/BlogNavigation'

export const metadata: Metadata = {
  title: 'Cách Phát Triển Giọng Hát Trầm - Hướng Dẫn Toàn Diện - Blog KienVocal',
  description: 'Khám phá các phương pháp và bài tập hiệu quả để phát triển giọng hát trầm. Từ kỹ thuật thở, điều chỉnh cộng minh đến các bài tập chuyên sâu cho giọng trầm.',
  openGraph: {
    title: 'Cách Phát Triển Giọng Hát Trầm - Hướng Dẫn Toàn Diện - Blog KienVocal',
    description: 'Khám phá các phương pháp và bài tập hiệu quả để phát triển giọng hát trầm.',
    images: ['/images/blog/phat-trien-giong-tram.jpg'],
  },
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <article>
        {/* Cover Image */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/blog/phat-trien-giong-tram.jpg"
            alt="Cách Phát Triển Giọng Hát Trầm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <time className="text-gray-300 text-sm">23/01/2024</time>
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                    Kỹ thuật thanh nhạc
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Cách Phát Triển Giọng Hát Trầm - Hướng Dẫn Toàn Diện
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl">
                  Khám phá các phương pháp và bài tập hiệu quả để phát triển giọng hát trầm. 
                  Từ kỹ thuật thở, điều chỉnh cộng minh đến các bài tập chuyên sâu cho giọng trầm.
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
                <a href="#dac-diem" className="block text-gray-300 hover:text-primary">
                  1. Đặc điểm của giọng hát trầm
                </a>
                <a href="#ky-thuat-tho" className="block text-gray-300 hover:text-primary">
                  2. Kỹ thuật hơi thở cho giọng trầm
                </a>
                <a href="#cong-minh" className="block text-gray-300 hover:text-primary">
                  3. Điều chỉnh vị trí cộng minh
                </a>
                <a href="#bai-tap" className="block text-gray-300 hover:text-primary">
                  4. Bài tập phát triển âm vực trầm
                </a>
                <a href="#xu-ly" className="block text-gray-300 hover:text-primary">
                  5. Kỹ thuật xử lý bài hát
                </a>
                <a href="#bao-ve" className="block text-gray-300 hover:text-primary">
                  6. Bảo vệ và phát triển giọng
                </a>
                <a href="#ung-dung" className="block text-gray-300 hover:text-primary">
                  7. Ứng dụng trong biểu diễn
                </a>
                <a href="#luu-y" className="block text-gray-300 hover:text-primary">
                  Lưu ý quan trọng
                </a>
                <a href="#dieu-chinh" className="block text-gray-300 hover:text-primary">
                  Điều chỉnh theo thể loại nhạc
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
                Giọng hát trầm là một màu giọng độc đáo và quyến rũ trong âm nhạc. Tuy nhiên, nhiều người 
                gặp khó khăn trong việc phát triển và làm chủ dải giọng trầm của mình. Bài viết này sẽ 
                hướng dẫn bạn cách phát triển giọng hát trầm một cách khoa học và hiệu quả.
              </p>

              <h2 id="dac-diem">1. Đặc điểm của giọng hát trầm</h2>

              <h3>Ưu điểm của giọng trầm</h3>
              <ul>
                <li>Âm sắc ấm áp, truyền cảm</li>
                <li>Độ vang và độ dày tốt</li>
                <li>Phù hợp nhiều thể loại nhạc</li>
                <li>Dễ tạo ấn tượng với người nghe</li>
              </ul>

              <h3>Thách thức thường gặp</h3>
              <ul>
                <li>Khó khăn khi lên nốt cao</li>
                <li>Dễ bị mờ trong dàn hợp xướng</li>
                <li>Cần nhiều năng lượng khi hát</li>
                <li>Khó điều chỉnh âm lượng</li>
              </ul>

              <h2 id="ky-thuat-tho">2. Kỹ thuật hơi thở cho giọng trầm</h2>

              <h3>Hít thở cơ bản</h3>
              <ul>
                <li>Thở bụng sâu và đều</li>
                <li>Giữ cột hơi ổn định</li>
                <li>Kiểm soát lượng hơi thở ra</li>
                <li>Tập thở với các tư thế khác nhau</li>
              </ul>

              <h3>Bài tập hơi thở chuyên sâu</h3>
              <ul>
                <li>Thở bụng với đếm nhịp</li>
                <li>Thở kết hợp với phát âm</li>
                <li>Thở khi nằm với tạ nhẹ</li>
                <li>Thở kết hợp với vận động</li>
              </ul>

              <h2 id="cong-minh">3. Điều chỉnh vị trí cộng minh</h2>

              <h3>Kỹ thuật cơ bản</h3>
              <ul>
                <li>Hạ thanh quản tự nhiên</li>
                <li>Mở rộng khoang họng</li>
                <li>Thả lỏng hàm và lưỡi</li>
                <li>Giữ tư thế đầu cổ đúng</li>
              </ul>

              <h3>Bài tập điều chỉnh</h3>
              <ul>
                <li>Ngâm nga với âm "m"</li>
                <li>Phát âm với nguyên âm "u"</li>
                <li>Tập với âm "ng" kéo dài</li>
                <li>Kết hợp các nguyên âm</li>
              </ul>

              <h2 id="bai-tap">4. Bài tập phát triển âm vực trầm</h2>

              <h3>Khởi động giọng</h3>
              <ul>
                <li>Tập với âm thanh trầm nhẹ</li>
                <li>Di chuyển từ trung sang trầm</li>
                <li>Tập các nốt trầm ngắn</li>
                <li>Khởi động với hơi thở sâu</li>
              </ul>

              <h3>Bài tập chuyên sâu</h3>
              <ul>
                <li>Hát gam xuống thấp dần</li>
                <li>Luyện các quãng trầm</li>
                <li>Tập với các âm tiết trầm</li>
                <li>Kết hợp các kỹ thuật</li>
              </ul>

              <h2 id="xu-ly">5. Kỹ thuật xử lý bài hát</h2>

              <h3>Chọn bài hát phù hợp</h3>
              <ul>
                <li>Chọn tông thích hợp</li>
                <li>Xác định đoạn cao trầm</li>
                <li>Phân tích cấu trúc bài</li>
                <li>Điều chỉnh theo giọng</li>
              </ul>

              <h3>Xử lý các đoạn khó</h3>
              <ul>
                <li>Chuyển giọng mượt mà</li>
                <li>Điều chỉnh âm lượng</li>
                <li>Xử lý các nốt trầm</li>
                <li>Kết hợp các kỹ thuật</li>
              </ul>

              <h2 id="bao-ve">6. Bảo vệ và phát triển giọng</h2>

              <h3>Chăm sóc giọng hát</h3>
              <ul>
                <li>Giữ ấm vùng cổ họng</li>
                <li>Uống đủ nước mỗi ngày</li>
                <li>Tránh thức ăn kích thích</li>
                <li>Nghỉ ngơi hợp lý</li>
              </ul>

              <h3>Luyện tập khoa học</h3>
              <ul>
                <li>Tập đều đặn mỗi ngày</li>
                <li>Tăng dần độ khó</li>
                <li>Ghi âm và đánh giá</li>
                <li>Điều chỉnh kịp thời</li>
              </ul>

              <h2 id="ung-dung">7. Ứng dụng trong biểu diễn</h2>

              <h3>Kỹ thuật trình diễn</h3>
              <ul>
                <li>Điều chỉnh khoảng cách micro</li>
                <li>Kiểm soát âm lượng</li>
                <li>Xử lý các đoạn cao trầm</li>
                <li>Tương tác với nhạc đệm</li>
              </ul>

              <h3>Xử lý tình huống</h3>
              <ul>
                <li>Điều chỉnh khi mệt giọng</li>
                <li>Thích nghi với âm thanh</li>
                <li>Xử lý khi hát sai</li>
                <li>Duy trì chất lượng giọng</li>
              </ul>

              <h2 id="luu-y">Lưu ý quan trọng</h2>

              <h3>Những điều nên làm</h3>
              <ul>
                <li>Khởi động kỹ trước khi hát</li>
                <li>Luyện tập đều đặn</li>
                <li>Ghi âm để tự đánh giá</li>
                <li>Tham khảo ý kiến chuyên gia</li>
              </ul>

              <h3>Những điều cần tránh</h3>
              <ul>
                <li>Không gắng sức quá mức</li>
                <li>Tránh hát khi mệt mỏi</li>
                <li>Không ép giọng quá trầm</li>
                <li>Không lạm dụng kỹ thuật</li>
              </ul>

              <h2 id="dieu-chinh">Điều chỉnh theo thể loại nhạc</h2>

              <h3>Nhạc trữ tình</h3>
              <ul>
                <li>Tập trung vào cảm xúc</li>
                <li>Điều chỉnh âm sắc ấm</li>
                <li>Xử lý tinh tế</li>
                <li>Kết hợp các kỹ thuật</li>
              </ul>

              <h3>Nhạc hiện đại</h3>
              <ul>
                <li>Tăng độ nét của giọng</li>
                <li>Kết hợp nhiều kỹ thuật</li>
                <li>Xử lý linh hoạt</li>
                <li>Thích nghi với phong cách</li>
              </ul>

              <blockquote>
                <p><strong>Lời khuyên từ giảng viên:</strong> Phát triển giọng trầm đòi hỏi sự kiên nhẫn và 
                phương pháp đúng đắn. Đừng cố gắng ép giọng xuống quá thấp, hãy để giọng hát phát triển một 
                cách tự nhiên. Mỗi giọng hát đều có nét đẹp riêng, quan trọng là biết phát huy đúng thế mạnh 
                của mình.</p>
              </blockquote>

              <p>
                Phát triển giọng hát trầm là một quá trình đòi hỏi thời gian và sự kiên trì. Với phương pháp 
                luyện tập đúng đắn và sự hiểu biết về giọng hát của mình, bạn hoàn toàn có thể phát triển 
                được một giọng trầm đẹp và đầy sức hút.
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