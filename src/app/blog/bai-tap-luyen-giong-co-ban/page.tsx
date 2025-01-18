import { Metadata } from 'next'
import Image from 'next/image'
import BlogNavigation from '@/components/blog/BlogNavigation'

export const metadata: Metadata = {
  title: '7 Bài Tập Luyện Giọng Cơ Bản Cho Người Mới Bắt Đầu - Blog Thanh Nhạc KienVocal',
  description: 'Tổng hợp các bài tập luyện giọng hiệu quả dành cho người mới học hát. Hướng dẫn chi tiết cách thực hiện các bài tập từ cơ bản đến nâng cao giúp cải thiện giọng hát nhanh chóng.',
  openGraph: {
    title: '7 Bài Tập Luyện Giọng Cơ Bản Cho Người Mới Bắt Đầu - Blog Thanh Nhạc KienVocal',
    description: 'Tổng hợp các bài tập luyện giọng hiệu quả dành cho người mới học hát. Hướng dẫn chi tiết từng bước.',
    images: ['/images/blog/bai-tap-luyen-giong-co-ban.jpg'],
  },
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <article>
        {/* Cover Image */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/blog/bai-tap-luyen-giong-co-ban.jpg"
            alt="7 Bài Tập Luyện Giọng Cơ Bản Cho Người Mới"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <time className="text-gray-300 text-sm">19/01/2024</time>
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                    Bài tập thanh nhạc
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  7 Bài Tập Luyện Giọng Cơ Bản Cho Người Mới Bắt Đầu
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl">
                  Tổng hợp các bài tập luyện giọng hiệu quả dành cho người mới học hát. 
                  Hướng dẫn chi tiết cách thực hiện các bài tập từ cơ bản đến nâng cao 
                  giúp cải thiện giọng hát nhanh chóng.
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
                <a href="#chuan-bi" className="block text-gray-300 hover:text-primary">
                  1. Chuẩn bị trước khi luyện tập
                </a>
                <a href="#bai-tap-hit-tho" className="block text-gray-300 hover:text-primary">
                  2. Bài tập hít thở cơ bản
                </a>
                <a href="#bai-tap-rung-moi" className="block text-gray-300 hover:text-primary">
                  3. Bài tập rung môi
                </a>
                <a href="#bai-tap-ngam-nga" className="block text-gray-300 hover:text-primary">
                  4. Bài tập ngân nga
                </a>
                <a href="#bai-tap-am-luong" className="block text-gray-300 hover:text-primary">
                  5. Bài tập điều chỉnh âm lượng
                </a>
                <a href="#bai-tap-truong-do" className="block text-gray-300 hover:text-primary">
                  6. Bài tập kéo dài trường độ
                </a>
                <a href="#bai-tap-am-vuc" className="block text-gray-300 hover:text-primary">
                  7. Bài tập mở rộng âm vực
                </a>
                <a href="#luu-y" className="block text-gray-300 hover:text-primary">
                  Lưu ý khi thực hiện
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
                Luyện giọng là một phần không thể thiếu trong quá trình học hát. Với người mới bắt đầu, 
                việc thực hiện đúng các bài tập cơ bản sẽ giúp xây dựng nền tảng vững chắc cho giọng hát. 
                Trong bài viết này, chúng ta sẽ tìm hiểu 7 bài tập luyện giọng cơ bản, hiệu quả mà bất kỳ 
                người học nào cũng nên thực hiện đều đặn.
              </p>

              <h2 id="chuan-bi">1. Chuẩn bị trước khi luyện tập</h2>
              <p>
                Trước khi bắt đầu các bài tập luyện giọng, bạn cần chuẩn bị:
              </p>
              <ul>
                <li>Uống đủ nước, giữ cơ thể đủ độ ẩm</li>
                <li>Chọn thời điểm và không gian phù hợp</li>
                <li>Khởi động cơ thể nhẹ nhàng</li>
                <li>Giữ tinh thần thoải mái, không căng thẳng</li>
              </ul>

              <h3>Tư thế chuẩn</h3>
              <ul>
                <li>Đứng thẳng, vai thả lỏng</li>
                <li>Đầu giữ thẳng, cằm không được gật gù</li>
                <li>Hai chân rộng bằng vai</li>
                <li>Tay buông tự nhiên hai bên</li>
              </ul>

              <h2 id="bai-tap-hit-tho">2. Bài tập hít thở cơ bản</h2>
              <p>
                Hít thở đúng cách là nền tảng của việc luyện giọng. Bài tập này giúp:
              </p>
              <ul>
                <li>Tăng dung tích phổi</li>
                <li>Kiểm soát luồng hơi thở</li>
                <li>Tạo nền tảng cho các bài tập khác</li>
                <li>Giúp giọng hát ổn định hơn</li>
              </ul>

              <h3>Cách thực hiện</h3>
              <ul>
                <li>Hít vào bằng mũi trong 4 nhịp</li>
                <li>Giữ hơi trong 4 nhịp</li>
                <li>Thở ra bằng miệng trong 4 nhịp</li>
                <li>Lặp lại 10 lần mỗi set, thực hiện 3 set</li>
              </ul>

              <h2 id="bai-tap-rung-moi">3. Bài tập rung môi</h2>
              <p>
                Bài tập rung môi giúp khởi động dây thanh quản và làm nóng giọng một cách an toàn. 
                Lợi ích của bài tập:
              </p>
              <ul>
                <li>Làm giãn cơ môi và thanh quản</li>
                <li>Tạo độ rung tự nhiên cho giọng hát</li>
                <li>Giúp phát âm dễ dàng hơn</li>
                <li>Tránh được tổn thương dây thanh</li>
              </ul>

              <h3>Các bước thực hiện</h3>
              <ul>
                <li>Môi khép hờ, thả lỏng</li>
                <li>Thổi hơi nhẹ nhàng qua môi</li>
                <li>Tạo âm "brr" từ thấp lên cao</li>
                <li>Duy trì độ rung đều đặn</li>
              </ul>

              <h2 id="bai-tap-ngam-nga">4. Bài tập ngân nga</h2>
              <p>
                Bài tập ngân nga với âm "mm" hoặc "ng" giúp:
              </p>
              <ul>
                <li>Tìm được vị trí cộng minh tự nhiên</li>
                <li>Phát triển giọng đầu</li>
                <li>Tăng độ vang của giọng hát</li>
                <li>Cải thiện khả năng định âm</li>
              </ul>

              <h3>Hướng dẫn thực hiện</h3>
              <ul>
                <li>Bắt đầu với âm "mm" ở tông thoải mái</li>
                <li>Di chuyển lên xuống theo quãng 3</li>
                <li>Giữ âm thanh đều và liền mạch</li>
                <li>Cảm nhận độ rung ở vùng mũi và trán</li>
              </ul>

              <h2 id="bai-tap-am-luong">5. Bài tập điều chỉnh âm lượng</h2>
              <p>
                Kiểm soát âm lượng là kỹ năng quan trọng trong thanh nhạc. Bài tập này giúp:
              </p>
              <ul>
                <li>Điều chỉnh được độ to nhỏ của giọng</li>
                <li>Tạo sự biến hóa trong cách hát</li>
                <li>Kiểm soát được hơi thở tốt hơn</li>
                <li>Tăng tính cảm xúc khi trình bày</li>
              </ul>

              <h3>Phương pháp luyện tập</h3>
              <ul>
                <li>Chọn một nốt trong vùng giọng thoải mái</li>
                <li>Bắt đầu hát nhỏ (piano), tăng dần lên to (forte)</li>
                <li>Giảm dần về nhỏ</li>
                <li>Giữ chất giọng ổn định trong quá trình thay đổi</li>
              </ul>

              <h2 id="bai-tap-truong-do">6. Bài tập kéo dài trường độ</h2>
              <p>
                Luyện tập khả năng giữ nốt dài giúp:
              </p>
              <ul>
                <li>Tăng sức bền của giọng hát</li>
                <li>Kiểm soát hơi thở tốt hơn</li>
                <li>Giữ được âm thanh ổn định</li>
                <li>Cải thiện khả năng legato</li>
              </ul>

              <h3>Cách thực hiện</h3>
              <ul>
                <li>Chọn một nốt thoải mái trong âm vực</li>
                <li>Hát và giữ nốt càng lâu càng tốt</li>
                <li>Đảm bảo âm thanh không bị rung lắc</li>
                <li>Tăng dần thời gian giữ nốt qua mỗi lần tập</li>
              </ul>

              <h2 id="bai-tap-am-vuc">7. Bài tập mở rộng âm vực</h2>
              <p>
                Mở rộng âm vực giúp bạn có thể hát được nhiều bài hát hơn. Bài tập này giúp:
              </p>
              <ul>
                <li>Tăng phạm vi giọng hát</li>
                <li>Phát triển các vùng giọng khác nhau</li>
                <li>Tăng sự linh hoạt của giọng hát</li>
                <li>Tự tin hơn khi hát các nốt cao</li>
              </ul>

              <h3>Phương pháp luyện tập</h3>
              <ul>
                <li>Bắt đầu từ nốt trung tâm của giọng</li>
                <li>Di chuyển dần lên cao và xuống thấp</li>
                <li>Sử dụng các âm nguyên âm: a, e, i, o, u</li>
                <li>Không gắng sức khi lên nốt cao</li>
              </ul>

              <h2 id="luu-y">Lưu ý khi thực hiện</h2>
              <p>
                Để đạt hiệu quả tốt nhất khi luyện tập, bạn cần lưu ý:
              </p>

              <h3>1. Thời gian tập luyện</h3>
              <ul>
                <li>Tập đều đặn mỗi ngày 30-45 phút</li>
                <li>Chia thành 2-3 buổi nếu có thể</li>
                <li>Không tập quá sức trong một buổi</li>
                <li>Chọn thời điểm cơ thể thoải mái nhất</li>
              </ul>

              <h3>2. Các dấu hiệu cần chú ý</h3>
              <ul>
                <li>Dừng ngay khi cảm thấy mệt hoặc đau họng</li>
                <li>Không cố gắng lên nốt cao khi chưa sẵn sàng</li>
                <li>Tránh tập luyện khi đang bị viêm họng</li>
                <li>Uống đủ nước trong quá trình luyện tập</li>
              </ul>

              <blockquote>
                <p><strong>Lời khuyên từ giảng viên:</strong> Việc luyện tập cần kiên trì và đều đặn. 
                Đừng vội vàng muốn đạt được kết quả ngay lập tức. Hãy tập trung vào cảm giác và 
                chất lượng của từng bài tập thay vì số lượng.</p>
              </blockquote>

              <p>
                Thực hiện đều đặn 7 bài tập trên sẽ giúp bạn xây dựng được nền tảng vững chắc 
                cho giọng hát. Hãy nhớ rằng, mỗi người có tốc độ tiến bộ khác nhau, vì vậy đừng 
                so sánh mà hãy tập trung vào việc hoàn thiện bản thân mỗi ngày.
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