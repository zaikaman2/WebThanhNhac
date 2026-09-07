import { PhoneCall, MessageCircle } from 'lucide-react'

export default function GrandFinaleCta() {
  return (
    <section id="tu-van" className="py-20 lg:py-24 bg-[#141414] text-white text-center border-b border-primary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading (VietVocal Style) */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
          Tham Gia Ngay
        </h2>
        
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>

        {/* Subheading */}
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Hãy cho chúng tôi biết vấn đề bạn đang quan tâm hay thắc mắc của bạn. 
          Đội ngũ KienVocal luôn sẵn sàng hỗ trợ và tư vấn lộ trình học phù hợp nhất cho bạn.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:0903100887"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-secondary px-9 py-4 rounded-full font-bold text-base transition-all duration-200 shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 uppercase tracking-wider"
          >
            <PhoneCall className="w-5 h-5 text-secondary" />
            <span>Hotline: 0903 100 887</span>
          </a>

          <a
            href="https://zalo.me/0903100887"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-base border-2 border-primary/40 hover:border-primary transition-all duration-200 uppercase tracking-wider"
          >
            <MessageCircle className="w-5 h-5 text-primary" />
            <span>Tư Vấn Trực Tiếp Qua Zalo</span>
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Thời gian hỗ trợ: 8:00 - 21:00 hàng ngày · Phản hồi nhanh chóng qua Zalo: 0903 100 887
        </p>

      </div>
    </section>
  )
}
