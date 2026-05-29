import type { Metadata } from 'next'
import PolicyPage from '@/components/policy/PolicyPage'

export const metadata: Metadata = {
  title: 'Hình thức thanh toán',
  description: 'Các hình thức thanh toán được KienVocal hỗ trợ: quét mã QR và chuyển khoản ngân hàng.',
}

export default function PaymentMethodsPage() {
  return (
    <PolicyPage
      title="Hình thức thanh toán"
      intro="KienVocal hiện hỗ trợ thanh toán không dùng tiền mặt bằng quét mã QR hoặc chuyển khoản ngân hàng. Khách hàng cần kiểm tra kỹ thông tin giao dịch trước khi xác nhận thanh toán."
      sections={[
        {
          title: 'Thanh toán bằng quét mã QR',
          items: [
            'Khách hàng quét mã QR thanh toán được hiển thị trong quá trình đặt mua hoặc do KienVocal cung cấp qua kênh hỗ trợ chính thức.',
            'Vui lòng kiểm tra tên người nhận, số tiền và nội dung thanh toán trước khi xác nhận trên ứng dụng ngân hàng.',
            'Sau khi giao dịch thành công, khách hàng nên lưu lại biên lai hoặc ảnh chụp màn hình để đối chiếu khi cần.',
          ],
        },
        {
          title: 'Thanh toán bằng chuyển khoản ngân hàng',
          items: [
            'Khách hàng chuyển khoản theo thông tin tài khoản ngân hàng do KienVocal cung cấp tại thời điểm đặt mua.',
            'KienVocal không yêu cầu khách hàng chuyển tiền đến tài khoản không được công bố hoặc không do bộ phận hỗ trợ chính thức xác nhận.',
          ],
        },
        {
          title: 'Xác nhận thanh toán',
          items: [
            'Đơn hàng được xác nhận sau khi giao dịch thanh toán được ngân hàng hoặc hệ thống thanh toán ghi nhận thành công.',
            'Trường hợp cần đối soát thủ công, KienVocal có thể yêu cầu khách hàng cung cấp biên lai, mã giao dịch hoặc thông tin liên quan.',
            'Nếu thanh toán thiếu, sai nội dung hoặc không xác định được người thanh toán, thời gian kích hoạt khóa học có thể bị kéo dài cho đến khi thông tin được xác minh.',
          ],
        },
        {
          title: 'An toàn thanh toán',
          items: [
            'Khách hàng tự bảo mật tài khoản ngân hàng, mã OTP, mật khẩu và các thông tin xác thực thanh toán.',
            'Không cung cấp mã OTP, mật khẩu ngân hàng hoặc thông tin nhạy cảm cho bất kỳ cá nhân nào.',
            'Nếu phát hiện giao dịch bất thường, vui lòng liên hệ ngân hàng của bạn và thông báo cho KienVocal để được hỗ trợ kiểm tra đơn hàng.',
          ],
        },
      ]}
    />
  )
}
