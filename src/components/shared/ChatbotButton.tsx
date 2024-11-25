'use client'

import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyCHkrvy0H4IVLFaNHbayvdko-Atuzc6xok')

const formatResponse = (text: string) => {
  // Format các section chính
  const sections = text.split('***').map(section => section.trim())
  
  // Format các bullet points
  const formatted = sections.map(section => {
    if (section.includes('*')) {
      const [title, ...points] = section.split('*')
      return `<div class="mb-4">
        <div class="font-semibold text-primary mb-2">${title}</div>
        <div class="space-y-2">
          ${points.map(point => 
            `<div class="pl-4 text-gray-300">${point.trim()}</div>`
          ).join('')}
        </div>
      </div>`
    }
    return `<div class="mb-4 text-gray-300">${section}</div>`
  })

  return formatted.join('')
}

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const systemPrompt = `Bạn là trợ lý AI của KienVocal - Trung tâm đào tạo thanh nhạc.

Thông tin về giảng viên:
- Tên: Đinh Trung Kiên
- Số điện thoại: 0903100887
- Email: zaikaman123@gmail.com
- Địa chỉ: Hồ Chí Minh, Việt Nam

Thành tựu và kinh nghiệm:
 30+ năm kinh nghiệm giảng dạy thanh nhạc
 Giải nhất tiếng hát phát thanh năm 2004
 Đã từng là giảng viên của Đại học Văn hóa nghệ thuật Quân đội và Cao đẳng văn hóa nghệ thuật TPHCM
 Hơn 30 năm kinh nghiệm làm ca sĩ ở nhiều sự kiện nổi trội
 Influencer với hơn 600 nghìn followers trên nền tảng TikTok
 Đào tạo hơn 1000+ học viên thành công
 Chuyên gia tư vấn thanh nhạc cho nhiều ca sĩ chuyên nghiệp
 Sáng lập KienVocal Academy từ năm 2024

Các khóa học:

1. Khóa học thanh nhạc cơ bản (13 bài học):
- Giá: 399,000đ
- Học online qua video
- Phù hợp cho người mới bắt đầu
- Nội dung khóa học:
  * Phần 1: Lấy hơi và kiểm soát hơi thở
    - Bài 1: Nguyên tắc lấy hơi trong thanh nhạc
    - Bài 2: Kiểm soát hơi thở khi phát âm
  * Phần 2: Đặt âm thanh đúng
    - Bài 3: Đặt âm thanh đúng vị trí
    - Bài 4: Thực hành đặt vị trí âm thanh
  * Phần 3: Hát ở âm trung
    - Bài 5: Hát các nguyên âm ở âm trung
    - Bài 6: Kiểm soát âm lượng qua lực hơi
  * Phần 4: Tập rung và tạo cảm giác âm thanh
    - Bài 7: Luyện tập rung âm thanh
    - Bài 8: Phát âm trầm và cảm nhận rung ở ngực
  * Phần 5: Luyện các nốt cao
    - Bài 9: Kỹ thuật lấy hơi và giữ hơi cho nốt cao
    - Bài 10: Tập âm lượng nhỏ cho nốt cao
  * Phần 6: Xử lý bài hát
    - Bài 11: Cách xử lý cảm xúc trong bài hát
    - Bài 12: Tập luyện xử lý bài hát mẫu (1)
    - Bài 13: Tập luyện xử lý bài hát mẫu (2)

2. Khóa học thanh nhạc nâng cao (21 bài học):
- Giá: 599,000đ
- Học online qua video
- Dành cho học viên đã có kiến thức cơ bản
- Nội dung khóa học:
  * Phần 1: Kỹ thuật thanh nhạc nâng cao
    - Bài 1-4: Mix voice và chuyển giọng
  * Phần 2: Phát triển phong cách và màu sắc giọng hát
    - Bài 5: Phát triển vibrato
    - Bài 6: Kỹ thuật belting
    - Bài 7: Tạo màu sắc giọng hát cá nhân
    - Bài 8: Xử lý sắc thái nâng cao
  * Phần 3-5: Các kỹ thuật chuyên sâu và thực hành
    - Bài 9-19: Luyện tập các kỹ thuật chuyên sâu
  * Phần 6: Tối ưu hóa kỹ năng và hướng phát triển
    - Bài 20: Phòng tránh và khắc phục chấn thương giọng hát
    - Bài 21: Định hướng phát triển sự nghiệp ca hát

3. Khóa học 1 kèm 1:
- Giá: Liên hệ trực tiếp
- Học offline tại nhà thầy hoặc online qua Messenger
- Chương trình được cá nhân hóa theo nhu cầu
- Lịch học linh động
- Được điều chỉnh nội dung theo mục tiêu cụ thể của học viên

Hãy trả lời mọi câu hỏi một cách thân thiện và chuyên nghiệp. Nếu không chắc chắn về thông tin, hãy đề xuất liên hệ trực tiếp với giảng viên.`

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' })

      const fullPrompt = `${systemPrompt}\n\nLịch sử chat:\n${messages
        .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
        .join('\n')}\n\nUser: ${userMessage}`

      const result = await model.generateContent(fullPrompt)
      const response = await result.response
      const formattedText = formatResponse(response.text())

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: formattedText 
      }])
    } catch (error) {
      console.error('Chatbot error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-primary p-3 rounded-full shadow-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-110 z-50"
      >
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-8 w-full max-w-md z-50">
          <div className="bg-secondary-light rounded-xl shadow-xl">
            <div className="p-4 border-b border-primary/10 flex justify-between items-center">
              <h3 className="text-xl font-bold text-primary">Chatbot AI KienVocal</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-primary"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.role === 'user'
                        ? 'bg-primary text-secondary'
                        : 'bg-secondary text-white'
                    }`}
                    dangerouslySetInnerHTML={
                      msg.role === 'assistant' 
                        ? { __html: msg.content }
                        : { __html: msg.content }
                    }
                  />
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-white rounded-lg px-4 py-2">
                    Đang nhập...
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-primary/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Nhập câu hỏi của bạn..."
                  className="flex-1 bg-secondary border border-primary/10 rounded-lg px-4 py-2 text-white"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-light transition-all duration-300 disabled:opacity-50"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
} 