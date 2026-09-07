'use client'

import { Wind, Volume2, Target, Flame, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react'
import SlideIn from '@/components/shared/SlideIn'

export default function VocalMethodology() {
  const painPoints = [
    {
      icon: <Wind className="w-6 h-6 text-red-400" />,
      problem: 'Hát nhanh hụt hơi, đuối sức',
      cause: 'Lấy hơi nông bằng ngực, thiếu điểm tựa cơ hoành khiến hơi thoát tự do.',
      solution: 'Kỹ thuật nén khí đáy phổi và phân bổ áp lực hơi đều đặn cho từng câu hát.',
      badge: 'Cột hơi'
    },
    {
      icon: <Flame className="w-6 h-6 text-amber-400" />,
      problem: 'Lên nốt cao bị nghẹn, rát họng',
      cause: 'Gồng thắt cơ cổ, thanh quản bị kéo giật lên cao làm căng nghẹt dây thanh.',
      solution: 'Mở khẩu hình chữ V ngược, hạ thanh quản tự nhiên và kích hoạt giọng pha (Mix Voice).',
      badge: 'Âm vực'
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      problem: 'Hát phô chênh, không đúng tông',
      cause: 'Chưa liên kết được thính giác cảm âm với khả năng điều khiển độ căng thanh đới.',
      solution: 'Bộ bài tập xướng âm Solfège định vị tần số chuẩn xác từng nửa cung.',
      badge: 'Cao độ'
    },
    {
      icon: <Volume2 className="w-6 h-6 text-primary" />,
      problem: 'Giọng hát mỏng, thiếu độ vang',
      cause: 'Chưa biết đánh thức buồng cộng hưởng khoang miệng, mũi và xoang mặt.',
      solution: 'Khai phóng buồng cộng minh (Resonance Chambers) giúp âm thanh dày dặn, vang xa.',
      badge: 'Âm sắc'
    },
  ]

  const pillars = [
    {
      step: '01',
      title: 'Thiết Lập Cột Hơi Đáy Phổi',
      description: 'Làm chủ hơi thở tự nhiên như vận động viên thể thao. Học cách hít sâu bằng cơ hoành, nén khí và giữ hơi vững vàng để hát những câu dài 15–20 giây không đuối sức.',
      features: ['Kỹ thuật thở 3 thì cơ hoành', 'Nén khí không gồng cơ ngực', 'Phát lực âm thanh từ trọng tâm'],
    },
    {
      step: '02',
      title: 'Giải Phóng Thanh Quản & Cộng Minh',
      description: 'Đập tan thói quen gồng cổ họng. Khám phá các buồng cộng hưởng xoang mặt, vòm họng và xương ức để âm thanh phát ra to, rõ, dày và sáng mà không tốn sức.',
      features: ['Mở khẩu hình chuẩn thính phòng', 'Hạ thanh quản tự nhiên', 'Kích hoạt hộp cộng hưởng xoang'],
    },
    {
      step: '03',
      title: 'Làm Chủ Giọng Pha (Mix Voice)',
      description: 'Cầu nối vàng xóa bỏ điểm gãy (Passaggio). Bạn sẽ dễ dàng chuyển tiếp từ giọng ngực trầm ấm sang giọng đầu sáng rực mà không bị vỡ tiếng hay nghẹt giọng.',
      features: ['Xóa bỏ điểm gãy giọng (Passaggio)', 'Chinh phục nốt cao vang rền', 'Mở rộng 1 đến 2 quãng tám'],
    },
    {
      step: '04',
      title: 'Xử Lý Ca Khúc & Rung Ngân',
      description: 'Biến kỹ thuật thành nghệ thuật chạm tới trái tim người nghe. Làm chủ các kỹ xảo luyến láy, rung ngân (Vibrato) tự nhiên, dynamic to nhỏ và truyền tải cảm xúc trọn vẹn.',
      features: ['Rung ngân tự nhiên (Vibrato)', 'Kỹ thuật nhả chữ & biểu cảm', 'Định hình phong cách cá nhân'],
    },
  ]

  return (
    <section id="vocal-method" className="py-24 bg-[#0D0D0D] relative overflow-hidden border-b border-primary/10">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header 1: Pain Points */}
        <SlideIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary/80 bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              Chuẩn đoán & Đột phá
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-5 tracking-tight">
              4 Nỗi ám ảnh lớn nhất của người hát & Cách giải quyết
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              90% người hát nghiệp dư đều vướng phải những rào cản dưới đây. Khi nắm đúng cơ chế giải phẫu thanh âm, bạn sẽ thấy tiến bộ vượt bậc chỉ sau vài buổi tập.
            </p>
          </div>
        </SlideIn>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-28">
          {painPoints.map((item, index) => (
            <SlideIn key={index} direction="up" delay={index * 100}>
              <div className="h-full bg-gradient-to-br from-[#161616] to-[#111111] p-7 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,215,0,0.1)] group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {item.problem}
                </h3>
                
                <div className="space-y-2.5 text-sm">
                  <p className="text-gray-400">
                    <span className="text-red-400/90 font-medium">Nguyên nhân:</span> {item.cause}
                  </p>
                  <p className="text-gray-300 bg-[#1E1E1E]/80 p-3 rounded-xl border border-primary/15">
                    <span className="text-primary font-semibold">Giải pháp KienVocal:</span> {item.solution}
                  </p>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Section Header 2: 4-Pillar Method */}
        <SlideIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Hệ thống sư phạm chuẩn mực</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
              Lộ trình thanh nhạc 4 tầng khoa học
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Giáo trình chắt lọc từ 30+ năm giảng dạy tại Nhạc viện và các trường Nghệ thuật danh tiếng, được tinh gọn để bất cứ ai cũng có thể tiếp thu và áp dụng ngay.
            </p>
          </div>
        </SlideIn>

        {/* 4 Pillars Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <SlideIn key={idx} direction="up" delay={idx * 120}>
              <div className="h-full bg-[#141414] p-7 rounded-2xl border border-primary/20 flex flex-col justify-between hover:border-primary transition-all duration-300 hover:shadow-[0_15px_35px_rgba(255,215,0,0.12)] relative group">
                
                {/* Step number watermark */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-extrabold font-mono text-primary/40 group-hover:text-primary transition-colors">
                    {pillar.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold">
                    Tầng {idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-light transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Checklist */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  {pillar.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>
            </SlideIn>
          ))}
        </div>

      </div>
    </section>
  )
}
