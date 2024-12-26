import Link from 'next/link'

interface TrialLimitModalProps {
  onClose: () => void
}

export default function TrialLimitModal({ onClose }: TrialLimitModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-secondary-light rounded-xl max-w-md w-full p-6 relative">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Thời gian học thử đã hết
          </h3>
          <p className="text-gray-300 mb-6">
            Để tiếp tục xem bài học và truy cập toàn bộ khóa học, vui lòng đăng ký khóa học.
          </p>
          <div>
            <Link
              href="/courses/basic"
              className="bg-primary text-white py-3 px-6 rounded-full hover:bg-primary-light transition-colors inline-block"
            >
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 