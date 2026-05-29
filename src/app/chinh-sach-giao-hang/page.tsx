import type { Metadata } from 'next'
import PolicyPage from '@/components/policy/PolicyPage'

export const metadata: Metadata = {
  title: 'Chính sách giao hàng',
  description: 'Chính sách cung cấp quyền truy cập khóa học online tại KienVocal, không áp dụng giao hàng vật lý.',
}

export default function DeliveryPolicyPage() {
  return (
    <PolicyPage
      title="Chính sách giao hàng"
      intro="KienVocal không kinh doanh hàng hóa vật lý và không thực hiện giao hàng qua đơn vị vận chuyển. Dịch vụ được cung cấp dưới dạng quyền truy cập khóa học, video, tài liệu hoặc nội dung học tập online."
      sections={[
        {
          title: 'Phạm vi áp dụng',
          items: [
            'Chính sách này áp dụng cho các khóa học thanh nhạc online, nội dung học tập số và dịch vụ liên quan được cung cấp trên website KienVocal.',
            'Không phát sinh phí vận chuyển, phí giao nhận hoặc địa chỉ nhận hàng vật lý.',
            'Khách hàng cần có thiết bị kết nối internet và tài khoản hợp lệ để sử dụng nội dung học.',
          ],
        },
        {
          title: 'Cách thức cung cấp dịch vụ',
          items: [
            'Sau khi thanh toán được xác nhận, KienVocal kích hoạt quyền truy cập khóa học trên tài khoản đã đăng ký.',
            'Thông tin xác nhận có thể được hiển thị trong tài khoản hoặc gửi qua email, tin nhắn hoặc kênh hỗ trợ phù hợp.',
            'Khách hàng sử dụng tài khoản của mình để truy cập nội dung, không cần nhận bất kỳ sản phẩm vật lý nào.',
          ],
        },
        {
          title: 'Thời gian xử lý',
          items: [
            'Với giao dịch thanh toán được ghi nhận tự động, quyền truy cập thường được kích hoạt ngay hoặc trong thời gian ngắn sau khi thanh toán thành công.',
            'Với chuyển khoản cần đối soát thủ công, thời gian xử lý có thể phụ thuộc vào ngân hàng, nội dung chuyển khoản và thời điểm giao dịch.',
            'Nếu quá trình kích hoạt bị chậm, khách hàng vui lòng gửi ảnh biên lai hoặc mã giao dịch để KienVocal kiểm tra.',
          ],
        },
        {
          title: 'Sự cố truy cập',
          items: [
            'Nếu khách hàng đã thanh toán nhưng chưa được cấp quyền truy cập, KienVocal sẽ kiểm tra và hỗ trợ kích hoạt khi giao dịch hợp lệ.',
            'Nếu lỗi phát sinh từ hệ thống KienVocal làm khách hàng không thể sử dụng dịch vụ, KienVocal sẽ ưu tiên khắc phục, gia hạn quyền truy cập tương ứng hoặc xử lý theo chính sách hoàn tiền nếu không thể cung cấp dịch vụ.',
            'KienVocal không chịu trách nhiệm cho gián đoạn do thiết bị cá nhân, đường truyền internet, chia sẻ tài khoản trái phép hoặc hành vi vi phạm điều khoản sử dụng.',
          ],
        },
      ]}
    />
  )
}
