import Image from 'next/image'

const instructor = {
  name: 'Đinh Trung Kiên',
  bio: 'Với hơn 30 năm kinh nghiệm trong lĩnh vực sư phạm thanh nhạc, thầy Đinh Trung Kiên đã đồng hành và phát triển tài năng cho hàng nghìn học viên trên khắp cả nước.',
  image: 'https://i.ibb.co/3c9RJm2/1732274222865.jpg',
  achievements: [
    'Giải nhất tiếng hát phát thanh năm 2004',
    'Huy chương vàng diễn viên ca kịch năm 1992',
    'Đã từng là giảng viên của Đại học Văn hóa nghệ thuật Quân đội và Cao đẳng văn hóa nghệ thuật TPHCM',
    'Hơn 30 năm kinh nghiệm làm ca sĩ ở nhiều sự kiện nổi trội',
    'Influencer với hơn 600 nghìn followers trên nền tảng TikTok',
    'Hơn 30 năm kinh nghiệm trong lĩnh vực sư phạm thanh nhạc'
  ]
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-darker to-secondary-light opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary opacity-20 blur-lg rounded-lg"></div>
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={600}
                  height={800}
                  className="rounded-lg shadow-2xl relative object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">
                {instructor.name}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                {instructor.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Thành tựu nổi bật
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructor.achievements.map((achievement: string, index: number) => (
              <div 
                key={index}
                className="bg-secondary-light p-8 rounded-xl border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-primary text-4xl font-bold mb-4">0{index + 1}</div>
                <p className="text-gray-300 text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Phương pháp giảng dạy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-secondary-light p-8 rounded-xl border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-4">Khóa học Video</h3>
              <p className="text-gray-300 leading-relaxed">
                Các khóa học trực tuyến được thiết kế chi tiết, có hệ thống từ cơ bản đến nâng cao. 
                Học viên có thể học tập theo tiến độ riêng và xem lại bài học không giới hạn.
              </p>
            </div>
            <div className="bg-secondary-light p-8 rounded-xl border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-4">Học 1-1 Trực tiếp</h3>
              <p className="text-gray-300 leading-relaxed">
                Đào tạo cá nhân hóa tại nhà hoặc online, với lộ trình được thiết kế riêng cho từng học viên. 
                Tương tác trực tiếp và nhận phản hồi chi tiết từ giảng viên.
              </p>
            </div>
            <div className="bg-secondary-light p-8 rounded-xl border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-4">Kinh nghiệm Thực tiễn</h3>
              <p className="text-gray-300 leading-relaxed">
                Nội dung giảng dạy được đúc kết từ hơn 30 năm kinh nghiệm biểu diễn và giảng dạy 
                thanh nhạc chuyên nghiệp.
              </p>
            </div>
          </div>

          {/* Course Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Khóa học Video</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">•</div>
                  <p className="text-gray-300">Nội dung được thiết kế có hệ thống, dễ hiểu</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">•</div>
                  <p className="text-gray-300">Học tập linh hoạt theo thời gian của bạn</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">•</div>
                  <p className="text-gray-300">Xem lại bài học không giới hạn</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">•</div>
                  <p className="text-gray-300">Chi phí hợp lý, phù hợp mọi đối tượng</p>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Học 1-1 với Giảng viên</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">•</div>
                  <p className="text-gray-300">Lộ trình học tập được cá nhân hóa</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">•</div>
                  <p className="text-gray-300">Tương tác trực tiếp và nhận phản hồi ngay lập tức</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">•</div>
                  <p className="text-gray-300">Điều chỉnh phương pháp theo tiến độ học tập</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">•</div>
                  <p className="text-gray-300">Hỗ trợ tư vấn chuyên sâu về phát triển giọng hát</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Experience */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Kinh nghiệm giảng dạy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-primary">Thành tựu học viên</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Trong suốt hơn 30 năm giảng dạy, tôi đã đào tạo nhiều thế hệ ca sĩ và nghệ sĩ 
                  thành công trong ngành âm nhạc. Nhiều học viên đã đạt giải cao trong các cuộc thi 
                  thanh nhạc và phát triển sự nghiệp ca hát chuyên nghiệp.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Phương pháp giảng dạy của tôi không chỉ tập trung vào kỹ thuật thanh nhạc mà còn 
                  chú trọng phát triển cá tính âm nhạc và bản sắc riêng của từng học viên.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-primary">Tầm nhìn giảng dạy</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Tôi tin rằng mỗi người đều có tiềm năng âm nhạc riêng. Nhiệm vụ của người thầy 
                  là khơi dậy và phát triển tiềm năng đó thông qua phương pháp giảng dạy phù hợp 
                  và sự kiên nhẫn.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Mục tiêu của tôi không chỉ là đào tạo ca sĩ chuyên nghiệp mà còn giúp học viên 
                  tự tin thể hiện bản thân qua âm nhạc và phát triển niềm đam mê với nghệ thuật.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
