import { Metadata } from 'next'
import Image from 'next/image'
import BlogNavigation from '@/components/blog/BlogNavigation'

export const metadata: Metadata = {
  title: 'Cách Luyện Hát Đúng Tông - Hướng Dẫn Chi Tiết - Blog KienVocal',
  description: 'Hướng dẫn chi tiết cách luyện hát đúng tông cho người mới bắt đầu. Từ cách nghe nhạc, xác định cao độ đến các bài tập luyện giọng hiệu quả.',
  openGraph: {
    title: 'Cách Luyện Hát Đúng Tông - Hướng Dẫn Chi Tiết - Blog KienVocal',
    description: 'Hướng dẫn chi tiết cách luyện hát đúng tông cho người mới bắt đầu.',
    images: ['/images/blog/luyen-hat-dung-tong.jpg'],
  },
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <article>
        {/* Cover Image */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/blog/luyen-hat-dung-tong.jpg"
            alt="Cách Luyện Hát Đúng Tông"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <time className="text-gray-300 text-sm">22/01/2024</time>
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                    Kỹ thuật thanh nhạc
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Cách Luyện Hát Đúng Tông - Hướng Dẫn Chi Tiết Cho Người Mới
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl">
                  Hướng dẫn chi tiết cách luyện hát đúng tông cho người mới bắt đầu. 
                  Từ cách nghe nhạc, xác định cao độ đến các bài tập luyện giọng hiệu quả.
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
                <a href="#hieu-ve-tong" className="block text-gray-300 hover:text-primary">
                  1. Hiểu về tông và cao độ
                </a>
                <a href="#nguyen-nhan" className="block text-gray-300 hover:text-primary">
                  2. Nguyên nhân hát sai tông
                </a>
                <a href="#xac-dinh-tong" className="block text-gray-300 hover:text-primary">
                  3. Cách xác định tông phù hợp
                </a>
                <a href="#luyen-nghe" className="block text-gray-300 hover:text-primary">
                  4. Các bài tập luyện nghe nhạc
                </a>
                <a href="#luyen-hat" className="block text-gray-300 hover:text-primary">
                  5. Bài tập luyện hát đúng tông
                </a>
                <a href="#ky-thuat" className="block text-gray-300 hover:text-primary">
                  6. Kỹ thuật điều chỉnh giọng
                </a>
                <a href="#phuong-phap" className="block text-gray-300 hover:text-primary">
                  7. Phương pháp luyện tập hiệu quả
                </a>
                <a href="#luu-y" className="block text-gray-300 hover:text-primary">
                  Lưu ý khi luyện tập
                </a>
                <a href="#dieu-chinh" className="block text-gray-300 hover:text-primary">
                  Điều chỉnh theo trình độ
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
                Hát đúng tông là một trong những kỹ năng cơ bản nhất mà bất kỳ ca sĩ nào cũng cần phải có. 
                Tuy nhiên, đối với nhiều người mới bắt đầu, việc hát đúng tông lại là một thách thức không nhỏ. 
                Trong bài viết này, chúng ta sẽ tìm hiểu về các phương pháp và bài tập giúp bạn cải thiện khả 
                năng hát đúng tông một cách hiệu quả.
              </p>

              <h2 id="hieu-ve-tong">1. Hiểu về tông và cao độ</h2>

              <h3>Khái niệm cơ bản</h3>
              <ul>
                <li>Tông là cao độ chuẩn của bài hát</li>
                <li>Cao độ là độ cao thấp của âm thanh</li>
                <li>Quãng là khoảng cách giữa hai nốt nhạc</li>
                <li>Âm chuẩn là nốt làm chuẩn (thường là La=440Hz)</li>
              </ul>

              <h3>Tầm quan trọng của việc hát đúng tông</h3>
              <ul>
                <li>Tạo sự hài hòa với nhạc đệm</li>
                <li>Thể hiện đúng cảm xúc bài hát</li>
                <li>Không gây khó chịu cho người nghe</li>
                <li>Bảo vệ dây thanh khỏi tổn thương</li>
              </ul>

              <h2 id="nguyen-nhan">2. Nguyên nhân hát sai tông</h2>

              <h3>Về kỹ thuật</h3>
              <ul>
                <li>Không phân biệt được cao độ</li>
                <li>Thiếu kỹ năng điều khiển giọng</li>
                <li>Chưa quen với việc nghe nhạc</li>
                <li>Khó khăn trong việc bắt nhịp</li>
              </ul>

              <h3>Về tâm lý</h3>
              <ul>
                <li>Lo lắng, thiếu tự tin</li>
                <li>Áp lực khi hát trước người khác</li>
                <li>Không tập trung khi hát</li>
                <li>Quá chú trọng vào kỹ thuật</li>
              </ul>

              <h2 id="xac-dinh-tong">3. Cách xác định tông phù hợp</h2>

              <h3>Đánh giá âm vực</h3>
              <ul>
                <li>Xác định nốt thấp nhất có thể hát</li>
                <li>Xác định nốt cao nhất có thể hát</li>
                <li>Tìm vùng giọng thoải mái nhất</li>
                <li>Chọn tông phù hợp với âm vực</li>
              </ul>

              <h3>Sử dụng công cụ hỗ trợ</h3>
              <ul>
                <li>Đàn piano/keyboard</li>
                <li>Ứng dụng đo cao độ</li>
                <li>Máy đếm nhịp (metronome)</li>
                <li>Phần mềm chỉnh tông</li>
              </ul>

              <h2 id="luyen-nghe">4. Các bài tập luyện nghe nhạc</h2>

              <h3>Bài tập cơ bản</h3>
              <ul>
                <li>Nghe và bắt chước âm thanh đơn</li>
                <li>Phân biệt nốt cao/thấp</li>
                <li>Nhận diện quãng cơ bản</li>
                <li>Tập hát theo gam</li>
              </ul>

              <h3>Bài tập nâng cao</h3>
              <ul>
                <li>Nghe và hát theo hợp âm</li>
                <li>Phân biệt các quãng phức tạp</li>
                <li>Tập hát hòa âm</li>
                <li>Luyện nghe nhạc không lời</li>
              </ul>

              <h2 id="luyen-hat">5. Bài tập luyện hát đúng tông</h2>

              <h3>Bài tập với piano</h3>
              <ul>
                <li>Hát theo nốt đơn</li>
                <li>Di chuyển theo quãng</li>
                <li>Hát theo giai điệu đơn giản</li>
                <li>Tập với hợp âm cơ bản</li>
              </ul>

              <h3>Bài tập không nhạc cụ</h3>
              <ul>
                <li>Luyện tập với âm thanh chuẩn</li>
                <li>Ghi âm và tự đánh giá</li>
                <li>Tập hát a cappella</li>
                <li>Luyện tập với bạn học</li>
              </ul>

              <h2 id="ky-thuat">6. Kỹ thuật điều chỉnh giọng</h2>

              <h3>Kỹ thuật cơ bản</h3>
              <ul>
                <li>Điều chỉnh hơi thở</li>
                <li>Kiểm soát cường độ</li>
                <li>Thay đổi vị trí cộng minh</li>
                <li>Sử dụng các kỹ thuật chuyển giọng</li>
              </ul>

              <h3>Kỹ thuật nâng cao</h3>
              <ul>
                <li>Điều chỉnh âm sắc</li>
                <li>Xử lý các đoạn chuyển tông</li>
                <li>Kỹ thuật vibrato</li>
                <li>Xử lý các nốt cao/thấp</li>
              </ul>

              <h2 id="phuong-phap">7. Phương pháp luyện tập hiệu quả</h2>

              <h3>Lịch trình luyện tập</h3>
              <ul>
                <li>Tập đều đặn mỗi ngày</li>
                <li>Chia thành nhiều phiên ngắn</li>
                <li>Tăng dần độ khó</li>
                <li>Theo dõi tiến bộ</li>
              </ul>

              <h3>Các công cụ hỗ trợ</h3>
              <ul>
                <li>Ứng dụng luyện hát</li>
                <li>Phần mềm ghi âm</li>
                <li>Video hướng dẫn</li>
                <li>Tài liệu học tập</li>
              </ul>

              <h2 id="luu-y">Lưu ý khi luyện tập</h2>

              <h3>Những điều nên làm</h3>
              <ul>
                <li>Khởi động giọng trước khi tập</li>
                <li>Ghi âm để tự đánh giá</li>
                <li>Tập trung vào chất lượng</li>
                <li>Kiên trì và đều đặn</li>
              </ul>

              <h3>Những điều cần tránh</h3>
              <ul>
                <li>Không gắng sức quá mức</li>
                <li>Tránh tập khi mệt mỏi</li>
                <li>Không so sánh với người khác</li>
                <li>Không vội vàng khi tập</li>
              </ul>

              <h2 id="dieu-chinh">Điều chỉnh theo trình độ</h2>

              <h3>Cho người mới bắt đầu</h3>
              <ul>
                <li>Tập các bài hát đơn giản</li>
                <li>Chọn tông dễ hát</li>
                <li>Tập trung vào kỹ thuật cơ bản</li>
                <li>Không vội vàng lên nốt cao</li>
              </ul>

              <h3>Cho người đã có kinh nghiệm</h3>
              <ul>
                <li>Thử thách với các bài khó hơn</li>
                <li>Mở rộng âm vực</li>
                <li>Tập các kỹ thuật nâng cao</li>
                <li>Thử nghiệm nhiều phong cách</li>
              </ul>

              <blockquote>
                <p><strong>Lời khuyên từ giảng viên:</strong> Hát đúng tông là một kỹ năng có thể rèn luyện được. 
                Đừng nản lòng nếu ban đầu bạn gặp khó khăn. Hãy kiên trì luyện tập và tin tưởng vào khả năng 
                của mình. Mỗi người đều có tiến độ phát triển khác nhau.</p>
              </blockquote>

              <p>
                Việc luyện hát đúng tông đòi hỏi sự kiên trì và phương pháp phù hợp. Hãy nhớ rằng, không có 
                con đường tắt nào để đạt được kỹ năng này. Chỉ có thực hành đều đặn và đúng cách mới giúp bạn 
                cải thiện được khả năng hát của mình.
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