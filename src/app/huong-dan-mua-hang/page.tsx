import type { Metadata } from 'next'
import PolicyPage from '@/components/policy/PolicyPage'

export const metadata: Metadata = {
  title: 'Hướng dẫn mua hàng',
  description: 'Hướng dẫn đăng ký, đặt mua và nhận quyền truy cập khóa học thanh nhạc online tại KienVocal.',
}

export default function PurchaseGuidePage() {
  return (
    <PolicyPage
      title="Hướng dẫn mua hàng"
      intro="KienVocal cung cấp khóa học thanh nhạc online và dịch vụ học tập số. Khách hàng đăng ký tài khoản, chọn khóa học, thanh toán và nhận quyền truy cập nội dung học sau khi giao dịch được xác nhận."
      sections={[
        {
          title: 'Chọn khóa học',
          items: [
            'Truy cập trang Khóa học để xem thông tin chương trình, nội dung học, học phí và điều kiện sử dụng.',
            'Chọn khóa học phù hợp với nhu cầu học thanh nhạc của bạn.',
            'Đọc các điều khoản liên quan đến thanh toán, cung cấp dịch vụ và chính sách đổi trả trước khi đặt mua.',
          ],
        },
        {
          title: 'Đăng ký hoặc đăng nhập tài khoản',
          items: [
            'Tạo tài khoản bằng thông tin chính xác để KienVocal có thể xác nhận quyền truy cập khóa học.',
            'Nếu đã có tài khoản, đăng nhập trước khi tiến hành thanh toán.',
            'Khách hàng chịu trách nhiệm bảo mật thông tin đăng nhập và không chia sẻ tài khoản cho người khác.',
          ],
        },
        {
          title: 'Thanh toán đơn hàng',
          items: [
            'KienVocal hiện hỗ trợ thanh toán bằng quét mã QR hoặc chuyển khoản ngân hàng.',
            'Nội dung chuyển khoản nên bao gồm username để việc đối soát được nhanh hơn.',
            'Đơn hàng chỉ được xử lý sau khi KienVocal ghi nhận giao dịch thanh toán thành công.',
          ],
        },
        {
          title: 'Xác nhận và nhận quyền truy cập',
          items: [
            'Sau khi thanh toán được xác nhận, hệ thống hoặc bộ phận hỗ trợ sẽ kích hoạt quyền truy cập khóa học trên tài khoản của khách hàng.',
            'Nếu chưa thấy khóa học sau khi đã thanh toán, vui lòng liên hệ qua email hoặc số điện thoại hỗ trợ và cung cấp chứng từ giao dịch.',
            'KienVocal có quyền từ chối hoặc tạm dừng đơn hàng nếu thông tin thanh toán không khớp, giao dịch bị nghi ngờ gian lận hoặc vi phạm điều khoản sử dụng.',
          ],
        },
      ]}
    />
  )
}
