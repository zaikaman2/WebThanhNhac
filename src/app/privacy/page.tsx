export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-secondary pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
          Chính sách bảo mật
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section className="bg-secondary-light p-8 rounded-xl border border-primary/10">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Thu thập thông tin</h2>
            <p className="leading-relaxed">
              Chúng tôi thu thập các thông tin cá nhân khi bạn đăng ký tài khoản, bao gồm: họ tên, địa chỉ email, và các thông tin liên quan đến khóa học bạn đăng ký.
            </p>
          </section>

          <section className="bg-secondary-light p-8 rounded-xl border border-primary/10">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Sử dụng thông tin</h2>
            <p className="leading-relaxed mb-4">
              Thông tin của bạn được sử dụng để:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Cung cấp và quản lý các khóa học</li>
              <li>Liên lạc về các cập nhật khóa học</li>
              <li>Gửi thông tin về các chương trình ưu đãi</li>
              <li>Cải thiện trải nghiệm học tập của bạn</li>
            </ul>
          </section>

          <section className="bg-secondary-light p-8 rounded-xl border border-primary/10">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Bảo mật thông tin</h2>
            <p className="leading-relaxed">
              Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn bằng các biện pháp bảo mật phù hợp và không chia sẻ thông tin với bên thứ ba khi chưa có sự đồng ý.
            </p>
          </section>

          <section className="bg-secondary-light p-8 rounded-xl border border-primary/10">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Quyền của người dùng</h2>
            <p className="leading-relaxed mb-4">
              Bạn có quyền:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Truy cập và chỉnh sửa thông tin cá nhân</li>
              <li>Yêu cầu xóa tài khoản</li>
              <li>Từ chối nhận email marketing</li>
              <li>Liên hệ với chúng tôi về các vấn đề bảo mật</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
} 