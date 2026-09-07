'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import SlideIn from '@/components/shared/SlideIn'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: 'Tôi hát phô, hụt hơi và hay bị chê từ bé thì có học được không?',
    answer: 'Hoàn toàn học được! Giọng hát không phải đặc quyền của người có năng khiếu, mà là sự phối hợp của các nhóm cơ: cơ hoành, dây thanh và buồng cộng hưởng. Khi được hướng dẫn đúng phương pháp khoa học, bạn sẽ biết cách lấy hơi sâu, đặt vị trí âm thanh chuẩn và hát chuẩn cao độ tự tin.',
  },
  {
    question: 'Học online qua website có hiệu quả bằng học trực tiếp tại lớp không?',
    answer: 'Các bài giảng được Thầy Đinh Trung Kiên thiết kế trực quan, quay đa góc độ (cơ bụng, khẩu hình miệng, vòm họng) cùng bài tập mô phỏng chi tiết. Bạn có thể tua lại xem nhiều lần bất cứ khi nào rảnh. Đặc biệt, bạn có kênh tương tác gửi bài tập ghi âm để Thầy trực tiếp nhận xét và sửa lỗi.',
  },
  {
    question: 'Luyện tập bao lâu thì bắt đầu thấy sự cải thiện rõ rệt?',
    answer: 'Chỉ sau 7 đến 10 ngày đầu tiên rèn luyện cột hơi và mở khẩu hình, bạn sẽ cảm nhận hơi thở bền bỉ hơn rõ rệt và hoàn toàn không còn tình trạng khản rát cổ họng. Sau 30 ngày, âm vực của bạn sẽ được mở rộng và hát trọn vẹn những ca khúc trước đây từng e ngại.',
  },
  {
    question: 'Sau khi thanh toán tôi có thể xem khóa học trong bao lâu?',
    answer: 'Khóa học thuộc quyền sở hữu trọn đời của bạn. Không giới hạn số lần truy cập hay thiết bị học tập. Mọi cập nhật nội dung bổ sung trong tương lai đều được miễn phí.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-b border-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SlideIn direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Giải đáp thắc mắc</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Những Câu Hỏi Thường Gặp
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Tất cả những điều bạn cần biết trước khi bắt đầu hành trình khai phóng giọng hát cùng KienVocal.
            </p>
          </div>
        </SlideIn>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <SlideIn key={index} direction="up" delay={index * 80}>
                <div 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-secondary-light/70 border-primary/40 shadow-[0_10px_30px_rgba(255,215,0,0.08)]' 
                      : 'bg-[#141414] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-white pr-2">
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'bg-primary text-secondary rotate-180' : 'bg-white/5 text-gray-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </SlideIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
