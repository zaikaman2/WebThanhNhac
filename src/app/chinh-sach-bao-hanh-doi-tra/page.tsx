import type { Metadata } from 'next'
import PolicyPage from '@/components/policy/PolicyPage'

export const metadata: Metadata = {
  title: 'Chính sách bảo hành, đổi trả',
  description: 'Chính sách hỗ trợ kỹ thuật, đổi trả và hoàn tiền đối với khóa học online tại KienVocal.',
}

export default function WarrantyReturnPolicyPage() {
  return (
    <PolicyPage
      title="Chính sách bảo hành, đổi trả"
      intro="KienVocal cung cấp dịch vụ học online và nội dung số, không có sản phẩm vật lý để bảo hành hoặc đổi trả như hàng hóa thông thường. Chính sách dưới đây quy định việc hỗ trợ kỹ thuật, hủy đơn và hoàn tiền trong các trường hợp phù hợp."
      sections={[
        {
          title: 'Đặc thù dịch vụ',
          items: [
            'Khóa học được cung cấp dưới dạng quyền truy cập nội dung số trên tài khoản KienVocal.',
            'Sau khi quyền truy cập đã được kích hoạt hoặc khách hàng đã sử dụng nội dung học, KienVocal không áp dụng đổi trả như hàng hóa vật lý.',
            'Khách hàng cần xem kỹ mô tả khóa học, học phí, thời hạn sử dụng và điều kiện học trước khi thanh toán.',
          ],
        },
        {
          title: 'Trường hợp có thể hỗ trợ hoàn tiền hoặc điều chỉnh',
          items: [
            'Khách hàng thanh toán trùng cho cùng một khóa học và giao dịch trùng được KienVocal xác minh hợp lệ.',
            'Khách hàng thanh toán thành công nhưng KienVocal không thể kích hoạt hoặc cung cấp quyền truy cập sau khi đã có thời gian hợp lý để khắc phục lỗi hệ thống.',
            'Khách hàng yêu cầu hủy trước khi quyền truy cập khóa học được kích hoạt và trước khi nội dung học được sử dụng.',
          ],
        },
        {
          title: 'Trường hợp không áp dụng hoàn tiền',
          items: [
            'Khách hàng đã được kích hoạt quyền truy cập và đã sử dụng nội dung khóa học.',
            'Khách hàng thay đổi nhu cầu học, không sắp xếp được thời gian học hoặc không còn muốn tiếp tục sau khi dịch vụ đã được cung cấp.',
            'Tài khoản bị hạn chế do chia sẻ, sao chép, phát tán nội dung khóa học hoặc vi phạm điều khoản sử dụng.',
          ],
        },
        {
          title: 'Quy trình yêu cầu hỗ trợ',
          items: [
            'Khách hàng gửi yêu cầu qua email hoặc số điện thoại hỗ trợ, kèm họ tên, email đăng ký, khóa học liên quan và chứng từ thanh toán nếu có.',
            'KienVocal kiểm tra thông tin đơn hàng, tình trạng kích hoạt và lịch sử sử dụng trước khi phản hồi phương án xử lý.',
            'Nếu yêu cầu hoàn tiền được chấp thuận, khoản hoàn trả sẽ được thực hiện qua tài khoản ngân hàng hoặc phương thức phù hợp đã thống nhất với khách hàng.',
          ],
        },
      ]}
    />
  )
}
