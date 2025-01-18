import { Metadata } from 'next'
import Image from 'next/image'
import BlogNavigation from '@/components/blog/BlogNavigation'

export const metadata: Metadata = {
  title: '5 Kỹ Thuật Hỗ Trợ Giọng Hát Hiệu Quả - Blog Thanh Nhạc KienVocal',
  description: 'Khám phá 5 kỹ thuật cơ bản giúp cải thiện giọng hát của bạn một cách hiệu quả, phù hợp cho người mới bắt đầu học thanh nhạc.',
  openGraph: {
    title: '5 Kỹ Thuật Hỗ Trợ Giọng Hát Hiệu Quả - Blog Thanh Nhạc KienVocal',
    description: 'Khám phá 5 kỹ thuật cơ bản giúp cải thiện giọng hát của bạn một cách hiệu quả.',
    images: ['/images/blog/ky-thuat-ho-tro-giong-hat.jpg'],
  },
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <article>
        {/* Cover Image */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/blog/ky-thuat-ho-tro-giong-hat.jpg"
            alt="5 Kỹ Thuật Hỗ Trợ Giọng Hát Hiệu Quả"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <time className="text-gray-300 text-sm">18/01/2024</time>
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                    Kỹ thuật thanh nhạc
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  5 Kỹ Thuật Hỗ Trợ Giọng Hát Hiệu Quả Cho Người Mới Bắt Đầu
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl">
                  Khám phá 5 kỹ thuật cơ bản giúp cải thiện giọng hát của bạn một cách hiệu quả, 
                  phù hợp cho người mới bắt đầu học thanh nhạc.
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
                <a href="#ky-thuat-tho-bung" className="block text-gray-300 hover:text-primary">
                  1. Kỹ thuật thở bụng
                </a>
                <a href="#khoi-dong-giong-hat" className="block text-gray-300 hover:text-primary">
                  2. Khởi động giọng hát
                </a>
                <a href="#ky-thuat-mix-voice" className="block text-gray-300 hover:text-primary">
                  3. Kỹ thuật Mix Voice
                </a>
                <a href="#phat-am-ro-rang" className="block text-gray-300 hover:text-primary">
                  4. Phát âm rõ ràng
                </a>
                <a href="#kiem-soat-cuong-do" className="block text-gray-300 hover:text-primary">
                  5. Kiểm soát cường độ
                </a>
                <a href="#loi-khuyen" className="block text-gray-300 hover:text-primary">
                  Lời khuyên thực hành
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
                Khi mới bắt đầu học hát, việc nắm vững các kỹ thuật cơ bản là vô cùng quan trọng. 
                Trong bài viết này, chúng ta sẽ tìm hiểu về 5 kỹ thuật hỗ trợ giọng hát hiệu quả 
                mà bất kỳ người học nào cũng nên biết. Những kỹ thuật này đã được kiểm chứng và 
                áp dụng thành công bởi nhiều học viên tại KienVocal.
              </p>

              <h2 id="ky-thuat-tho-bung">1. Kỹ thuật thở bụng</h2>
              <p>
                Hơi thở là nền tảng của việc hát. Thở bụng (hay còn gọi là thở hoành cách mô) 
                là kỹ thuật quan trọng nhất mà bạn cần nắm vững. Kỹ thuật này giúp bạn:
              </p>
              <ul>
                <li>Kiểm soát được luồng hơi khi hát</li>
                <li>Hát được những câu dài mà không bị đứt hơi</li>
                <li>Giữ được độ ổn định của giọng</li>
                <li>Tạo được âm lượng lớn mà không cần gắng sức</li>
              </ul>

              <h3>Cách thực hiện thở bụng</h3>
              <p><strong>Tư thế chuẩn bị:</strong></p>
              <ul>
                <li>Đứng thẳng, vai thả lỏng</li>
                <li>Hai chân rộng bằng vai</li>
                <li>Đặt một tay lên bụng, tay kia lên ngực</li>
              </ul>

              <p><strong>Các bước thực hiện:</strong></p>
              <ul>
                <li>Hít vào sâu bằng mũi, cảm nhận bụng phình ra</li>
                <li>Giữ hơi trong 2-3 giây</li>
                <li>Thở ra từ từ bằng miệng, kiểm soát luồng hơi</li>
                <li>Lặp lại 10-15 lần mỗi ngày</li>
              </ul>

              <blockquote>
                <p><strong>Lưu ý quan trọng:</strong> Khi thực hiện, đảm bảo chỉ có bụng chuyển động, 
                ngực giữ nguyên không di chuyển.</p>
              </blockquote>

              <h2 id="khoi-dong-giong-hat">2. Khởi động giọng hát</h2>
              <p>
                Khởi động giọng là bước không thể thiếu trước khi hát, giống như việc khởi động 
                cơ thể trước khi tập thể thao. Việc này mang lại nhiều lợi ích:
              </p>
              <ul>
                <li>Giúp dây thanh quản linh hoạt</li>
                <li>Tránh được tổn thương thanh quản</li>
                <li>Hát được những nốt cao dễ dàng hơn</li>
                <li>Tăng độ bền của giọng hát</li>
              </ul>

              <h3>Bài tập khởi động cơ bản</h3>
              <p><strong>1. Ngân nga với âm "mm":</strong></p>
              <ul>
                <li>Bắt đầu từ nốt thấp, đi lên và xuống theo quãng 5</li>
                <li>Thực hiện 5-7 lần</li>
              </ul>

              <p><strong>2. Luyện tập với nguyên âm:</strong></p>
              <ul>
                <li>Sử dụng các âm: a, e, i, o, u</li>
                <li>Kết hợp với phụ âm m hoặc n</li>
                <li>Ví dụ: ma-me-mi-mo-mu</li>
              </ul>

              <h2 id="ky-thuat-mix-voice">3. Kỹ thuật Mix Voice</h2>
              <p>
                Mix Voice là sự kết hợp hoàn hảo giữa giọng ngực và giọng đầu, tạo ra một âm sắc 
                tự nhiên và mượt mà. Đây là kỹ thuật quan trọng giúp:
              </p>
              <ul>
                <li>Tạo ra âm thanh tự nhiên, không bị gằn</li>
                <li>Chuyển giọng mượt mà giữa các quãng</li>
                <li>Mở rộng được âm vực</li>
                <li>Hát được nhiều thể loại nhạc khác nhau</li>
              </ul>

              <h3>Cách luyện Mix Voice</h3>
              <p><strong>1. Xác định vùng chuyển giọng:</strong></p>
              <ul>
                <li>Thường nằm ở quãng 4-5 của giọng</li>
                <li>Sử dụng âm "oo" để cảm nhận</li>
              </ul>

              <p><strong>2. Bài tập cơ bản:</strong></p>
              <ul>
                <li>Bắt đầu với nốt thoải mái trong giọng ngực</li>
                <li>Đi lên từng nửa cung</li>
                <li>Giữ độ mở họng vừa phải</li>
                <li>Duy trì luồng hơi đều đặn</li>
              </ul>

              <h2 id="phat-am-ro-rang">4. Phát âm rõ ràng</h2>
              <p>
                Phát âm tốt không chỉ giúp người nghe hiểu rõ lời mà còn tạo nên tính chuyên nghiệp 
                trong giọng hát. Kỹ thuật này giúp:
              </p>
              <ul>
                <li>Truyền tải được cảm xúc bài hát</li>
                <li>Người nghe dễ hiểu lời</li>
                <li>Tăng tính chuyên nghiệp</li>
                <li>Tạo được ấn tượng với khán giả</li>
              </ul>

              <h3>Các bước luyện phát âm</h3>
              <p><strong>1. Tập đọc chậm và rõ ràng:</strong></p>
              <ul>
                <li>Đọc từng từ một cách rõ ràng</li>
                <li>Chú ý đến các phụ âm cuối</li>
                <li>Tập trung vào các từ khó phát âm</li>
              </ul>

              <p><strong>2. Ghi âm và lắng nghe:</strong></p>
              <ul>
                <li>Ghi âm giọng của bạn</li>
                <li>So sánh với bản gốc</li>
                <li>Điều chỉnh những chỗ chưa chuẩn</li>
              </ul>

              <h2 id="kiem-soat-cuong-do">5. Kiểm soát cường độ</h2>
              <p>
                Kiểm soát cường độ giọng hát là kỹ năng quan trọng giúp bạn:
              </p>
              <ul>
                <li>Tạo điểm nhấn cho bài hát</li>
                <li>Thể hiện được cảm xúc đa dạng</li>
                <li>Bảo vệ được giọng hát</li>
                <li>Tạo sự thu hút cho người nghe</li>
              </ul>

              <h3>Kỹ thuật điều chỉnh cường độ</h3>
              <p><strong>1. Luyện tập crescendo và decrescendo:</strong></p>
              <ul>
                <li>Bắt đầu với âm lượng nhỏ</li>
                <li>Tăng dần lên forte</li>
                <li>Giảm dần về piano</li>
                <li>Giữ chất giọng ổn định</li>
              </ul>

              <p><strong>2. Bài tập thực hành:</strong></p>
              <ul>
                <li>Chọn một nốt thoải mái</li>
                <li>Hát với các mức độ khác nhau</li>
                <li>Duy trì chất lượng âm thanh</li>
              </ul>

              <h2 id="loi-khuyen">Lời khuyên thực hành</h2>
              <p>Để phát triển giọng hát một cách toàn diện, bạn nên:</p>

              <h3>1. Lập kế hoạch tập luyện</h3>
              <ul>
                <li>Tập đều đặn mỗi ngày</li>
                <li>Mỗi buổi tập 30-45 phút</li>
                <li>Chia thời gian cho từng kỹ thuật</li>
              </ul>

              <h3>2. Theo dõi tiến độ</h3>
              <ul>
                <li>Ghi âm và lắng nghe giọng hát của mình</li>
                <li>Ghi chép những điểm cần cải thiện</li>
                <li>Điều chỉnh phương pháp tập luyện</li>
              </ul>

              <h3>3. Tham khảo ý kiến chuyên gia</h3>
              <ul>
                <li>Học hỏi từ giáo viên thanh nhạc</li>
                <li>Tham gia các khóa học chuyên sâu</li>
                <li>Nhận phản hồi từ người có kinh nghiệm</li>
              </ul>

              <h3>4. Chọn bài hát phù hợp</h3>
              <ul>
                <li>Bắt đầu với những bài đơn giản</li>
                <li>Tăng dần độ khó</li>
                <li>Chọn bài phù hợp với âm vực</li>
              </ul>

              <blockquote>
                <p><strong>Lời khuyên từ giảng viên:</strong> Hãy nhớ rằng, việc học hát cần có 
                thời gian và sự kiên nhẫn. Đừng vội vàng muốn đạt được kết quả ngay lập tức. 
                Quan trọng nhất là bạn phải thực hành đều đặn và đúng phương pháp.</p>
              </blockquote>

              <p>
                Để phát triển giọng hát một cách toàn diện, bạn nên kết hợp cả 5 kỹ thuật trên 
                trong quá trình luyện tập. Mỗi kỹ thuật đều có vai trò riêng và bổ trợ cho nhau. 
                Hãy kiên trì thực hiện và bạn sẽ thấy được sự tiến bộ rõ rệt trong giọng hát của mình.
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