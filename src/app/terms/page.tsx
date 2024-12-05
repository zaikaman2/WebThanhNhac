export default function TermsPage() {
  return (
    <main className="min-h-screen bg-secondary pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
          Điều khoản sử dụng
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section className="bg-secondary-light p-8 rounded-xl border border-primary/10">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Điều khoản chung</h2>
            <p className="leading-relaxed">
              Bằng việc truy cập và sử dụng website của KienVocal, bạn đồng ý tuân thủ và chịu ràng buộc bởi các điều khoản và điều kiện này.
            </p>
          </section>

          <section className="bg-secondary-light p-8 rounded-xl border border-primary/10">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Tài khoản người dùng</h2>
            <p className="leading-relaxed mb-4">
              Khi tạo tài khoản, bạn phải:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Cung cấp thông tin chính xác và đầy đủ</li>
              <li>Bảo mật thông tin đăng nhập</li>
              <li>Chịu trách nhiệm về mọi hoạt động dưới tài khoản của mình</li>
              <li>Thông báo ngay cho chúng tôi nếu phát hiện truy cập trái phép</li>
            </ul>
          </section>

          <section className="bg-secondary-light p-8 rounded-xl border border-primary/10">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Khóa học và thanh toán</h2>
            <p className="leading-relaxed mb-4">
              Quy định về khóa học:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Học phí được thanh toán trước khi bắt đầu khóa học</li>
              <li>Nội dung khóa học thuộc quyền sở hữu của KienVocal</li>
              <li>Không chia sẻ tài khoản hoặc nội dung khóa học cho người khác</li>
            </ul>
          </section>

          <section className="bg-secondary-light p-8 rounded-xl border border-primary/10">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Quyền sở hữu trí tuệ</h2>
            <p className="leading-relaxed">
              Tất cả nội dung trên website và trong khóa học, bao gồm văn bản, hình ảnh, âm thanh, video đều thuộc quyền sở hữu của KienVocal. Nghiêm cấm sao chép, phân phối hoặc sử dụng vì mục đích thương mại khi chưa được sự đồng ý.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 