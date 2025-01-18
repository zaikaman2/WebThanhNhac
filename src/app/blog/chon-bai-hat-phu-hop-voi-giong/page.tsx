import { Metadata } from 'next'
import Image from 'next/image'
import BlogNavigation from '@/components/blog/BlogNavigation'

export const metadata: Metadata = {
  title: 'Cách Chọn Bài Hát Phù Hợp Với Giọng - Hướng Dẫn Chi Tiết - Blog KienVocal',
  description: 'Hướng dẫn chi tiết cách chọn bài hát phù hợp với giọng hát của bạn. Từ xác định âm vực, chất giọng đến phân tích độ khó và phong cách bài hát.',
  openGraph: {
    title: 'Cách Chọn Bài Hát Phù Hợp Với Giọng - Hướng Dẫn Chi Tiết - Blog KienVocal',
    description: 'Hướng dẫn chi tiết cách chọn bài hát phù hợp với giọng hát của bạn.',
    images: ['/images/blog/chon-bai-hat-phu-hop.jpg'],
  },
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <article>
        {/* Cover Image */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/blog/chon-bai-hat-phu-hop.jpg"
            alt="Cách Chọn Bài Hát Phù Hợp Với Giọng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <time className="text-gray-300 text-sm">20/01/2024</time>
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                    Kỹ thuật thanh nhạc
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Cách Chọn Bài Hát Phù Hợp Với Giọng - Hướng Dẫn Chi Tiết
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl">
                  Hướng dẫn chi tiết cách chọn bài hát phù hợp với giọng hát của bạn. 
                  Từ xác định âm vực, chất giọng đến phân tích độ khó và phong cách bài hát.
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
                <a href="#xac-dinh-am-vuc" className="block text-gray-300 hover:text-primary">
                  1. Xác định âm vực giọng hát
                </a>
                <a href="#phan-tich-chat-giong" className="block text-gray-300 hover:text-primary">
                  2. Phân tích chất giọng
                </a>
                <a href="#phan-tich-bai-hat" className="block text-gray-300 hover:text-primary">
                  3. Phân tích bài hát
                </a>
                <a href="#danh-gia-do-kho" className="block text-gray-300 hover:text-primary">
                  4. Đánh giá độ khó
                </a>
                <a href="#xem-xet-phong-cach" className="block text-gray-300 hover:text-primary">
                  5. Xem xét phong cách
                </a>
                <a href="#thu-nghiem" className="block text-gray-300 hover:text-primary">
                  6. Thử nghiệm và điều chỉnh
                </a>
                <a href="#loi-khuyen" className="block text-gray-300 hover:text-primary">
                  7. Lời khuyên bổ sung
                </a>
                <a href="#luu-y" className="block text-gray-300 hover:text-primary">
                  Lưu ý quan trọng
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
                Chọn bài hát phù hợp với giọng là một trong những yếu tố quan trọng quyết định sự thành công 
                khi trình diễn. Một bài hát phù hợp không chỉ giúp bạn thể hiện được hết khả năng mà còn tạo 
                sự thoải mái và tự tin khi hát. Trong bài viết này, chúng ta sẽ tìm hiểu các tiêu chí và 
                phương pháp để chọn bài hát phù hợp với giọng của bạn.
              </p>

              <h2 id="xac-dinh-am-vuc">1. Xác định âm vực giọng hát</h2>
              <p>
                Bước đầu tiên và quan trọng nhất là xác định chính xác âm vực giọng hát của bạn.
              </p>

              <h3>Cách xác định âm vực</h3>
              <ul>
                <li>Hát các nốt từ thấp lên cao trong tầm thoải mái</li>
                <li>Ghi nhận nốt thấp nhất và cao nhất hát được</li>
                <li>Xác định vùng giọng thoải mái nhất (sweet spot)</li>
                <li>Phân biệt giọng đầu và giọng ngực</li>
              </ul>

              <h3>Các loại giọng phổ biến</h3>
              <ul>
                <li>Nam:
                  <ul>
                    <li>Giọng nam cao (Tenor)</li>
                    <li>Giọng nam trung (Baritone)</li>
                    <li>Giọng nam trầm (Bass)</li>
                  </ul>
                </li>
                <li>Nữ:
                  <ul>
                    <li>Giọng nữ cao (Soprano)</li>
                    <li>Giọng nữ trung (Mezzo-soprano)</li>
                    <li>Giọng nữ trầm (Alto)</li>
                  </ul>
                </li>
              </ul>

              <h2 id="phan-tich-chat-giong">2. Phân tích chất giọng</h2>
              <p>
                Ngoài âm vực, chất giọng cũng là yếu tố quan trọng cần xem xét.
              </p>

              <h3>Các đặc điểm cần chú ý</h3>
              <ul>
                <li>Độ vang của giọng</li>
                <li>Màu sắc giọng hát (sáng/tối)</li>
                <li>Khả năng xử lý các kỹ thuật</li>
                <li>Sở trường về phong cách</li>
              </ul>

              <h3>Đánh giá điểm mạnh</h3>
              <ul>
                <li>Khả năng xử lý nốt cao</li>
                <li>Độ ổn định của giọng hát</li>
                <li>Khả năng xử lý các đoạn luyến láy</li>
                <li>Sức bền của giọng hát</li>
              </ul>

              <h2 id="phan-tich-bai-hat">3. Phân tích bài hát</h2>
              <p>
                Khi chọn bài hát, cần phân tích kỹ các yếu tố sau:
              </p>

              <h3>Về kỹ thuật</h3>
              <ul>
                <li>Âm vực của bài hát</li>
                <li>Các đoạn cao trào</li>
                <li>Độ khó của tiết tấu</li>
                <li>Yêu cầu về hơi</li>
              </ul>

              <h3>Về nội dung</h3>
              <ul>
                <li>Thông điệp của bài hát</li>
                <li>Cảm xúc cần thể hiện</li>
                <li>Độ phù hợp với độ tuổi</li>
                <li>Sự phù hợp với hoàn cảnh</li>
              </ul>

              <h2 id="danh-gia-do-kho">4. Đánh giá độ khó</h2>
              <p>
                Việc đánh giá độ khó giúp bạn biết được liệu mình có thể thể hiện tốt bài hát hay không.
              </p>

              <h3>Các yếu tố cần xem xét</h3>
              <ul>
                <li>Kỹ thuật thanh nhạc yêu cầu</li>
                <li>Độ dài của bài hát</li>
                <li>Cường độ cảm xúc</li>
                <li>Yêu cầu về trình diễn</li>
              </ul>

              <h3>Mức độ phù hợp</h3>
              <ul>
                <li>Dễ: Phù hợp để luyện tập</li>
                <li>Trung bình: Có thể thể hiện tốt</li>
                <li>Khó: Cần thời gian rèn luyện</li>
                <li>Rất khó: Nên cân nhắc kỹ</li>
              </ul>

              <h2 id="xem-xet-phong-cach">5. Xem xét phong cách</h2>
              <p>
                Mỗi phong cách âm nhạc có những đặc thù riêng cần lưu ý.
              </p>

              <h3>Các phong cách phổ biến</h3>
              <ul>
                <li>Ballad: Đòi hỏi cảm xúc sâu lắng</li>
                <li>Pop: Cần sự năng động, tươi trẻ</li>
                <li>Rock: Yêu cầu giọng khỏe</li>
                <li>Jazz: Đòi hỏi kỹ thuật và cảm nhạc tốt</li>
              </ul>

              <h3>Lựa chọn phù hợp</h3>
              <ul>
                <li>Dựa trên sở thích cá nhân</li>
                <li>Xem xét thế mạnh của giọng</li>
                <li>Cân nhắc yếu tố thị hiếu</li>
                <li>Tính đến mục đích trình diễn</li>
              </ul>

              <h2 id="thu-nghiem">6. Thử nghiệm và điều chỉnh</h2>
              <p>
                Sau khi chọn bài hát, cần có quá trình thử nghiệm và điều chỉnh.
              </p>

              <h3>Các bước thực hiện</h3>
              <ul>
                <li>Hát thử toàn bộ bài</li>
                <li>Ghi âm và lắng nghe</li>
                <li>Xác định các đoạn khó</li>
                <li>Tham khảo ý kiến chuyên gia</li>
              </ul>

              <h3>Điều chỉnh phù hợp</h3>
              <ul>
                <li>Thay đổi tông nếu cần</li>
                <li>Điều chỉnh tiết tấu</li>
                <li>Thay đổi cách xử lý</li>
                <li>Tùy chỉnh độ dài bài hát</li>
              </ul>

              <h2 id="loi-khuyen">7. Lời khuyên bổ sung</h2>
              <p>
                Một số lời khuyên giúp việc chọn bài hát hiệu quả hơn:
              </p>

              <h3>Về tâm lý</h3>
              <ul>
                <li>Chọn bài hát bạn thực sự yêu thích</li>
                <li>Không so sánh với người khác</li>
                <li>Tự tin với lựa chọn của mình</li>
                <li>Sẵn sàng thử thách bản thân</li>
              </ul>

              <h3>Về thực tế</h3>
              <ul>
                <li>Cân nhắc hoàn cảnh trình diễn</li>
                <li>Xem xét đối tượng khán giả</li>
                <li>Tính đến thời gian chuẩn bị</li>
                <li>Đánh giá khả năng hỗ trợ (nhạc đệm, band...)</li>
              </ul>

              <h2 id="luu-y">Lưu ý quan trọng</h2>
              <p>
                Khi chọn bài hát, cần tránh một số sai lầm phổ biến:
              </p>

              <h3>Những điều nên tránh</h3>
              <ul>
                <li>Chọn bài quá khó so với khả năng</li>
                <li>Bắt chước giọng ca sĩ gốc</li>
                <li>Cố gắng hát những nốt ngoài tầm</li>
                <li>Chọn bài không phù hợp với độ tuổi</li>
              </ul>

              <h3>Cách khắc phục</h3>
              <ul>
                <li>Bắt đầu với những bài đơn giản</li>
                <li>Tìm cách thể hiện phong cách riêng</li>
                <li>Điều chỉnh tông phù hợp</li>
                <li>Tham khảo ý kiến giáo viên</li>
              </ul>

              <blockquote>
                <p><strong>Lời khuyên từ giảng viên:</strong> Đừng ngại thử nghiệm với nhiều bài hát khác nhau, 
                nhưng hãy luôn nhớ rằng bài hát phù hợp nhất là bài hát giúp bạn thể hiện được điểm mạnh và 
                cảm thấy thoải mái nhất khi trình diễn.</p>
              </blockquote>

              <p>
                Việc chọn bài hát phù hợp là một quá trình đòi hỏi sự kiên nhẫn và thử nghiệm. Đừng vội vàng 
                và hãy dành thời gian để tìm ra những bài hát thực sự phù hợp với giọng hát của bạn. Điều này 
                sẽ giúp bạn tự tin hơn và có những trình diễn thành công.
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