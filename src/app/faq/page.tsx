export default function FAQPage() {
    const faqs = [
      {
        question: 'Làm thế nào để bắt đầu học?',
        answer: 'Bạn cần đăng ký tài khoản, sau đó chọn khóa học phù hợp và thanh toán để bắt đầu học.'
      },
      {
        question: 'Website hỗ trợ các hình thức thanh toán nào?',
        answer: 'Hiện tại website hỗ trợ thanh toán qua chuyển khoản ngân hàng và quét mã QR.'
      },
      {
        question: 'Khóa học có thời hạn không?',
        answer: 'Các khóa học cơ bản và nâng cao không có thời hạn và bạn có thể học bao lâu cũng được.'
      },
      {
        question: 'Tôi có thể học lại bài đã học không?',
        answer: 'Có, bạn có thể xem lại bài học không giới hạn trong thời gian khóa học còn hiệu lực.'
      },
      {
        question: 'Làm sao để liên hệ hỗ trợ kỹ thuật?',
        answer: 'Bạn có thể liên hệ qua email zaikaman123@gmail.com để được hỗ trợ.'
      },
      {
        question: 'Tôi có thể học cùng lúc nhiều khóa học không?',
        answer: 'Có, bạn có thể đăng ký và học nhiều khóa học cùng một lúc. Tuy nhiên chúng tôi khuyến nghị nên hoàn thành từng khóa một để đạt hiệu quả tốt nhất.'
      },
      {
        question: 'Tôi bị gặp lỗi bắt phải đăng nhập để xác minh không phải robot khi học bài, làm sao để khắc phục?',
        answer: 'Bạn vui lòng đăng nhập youtube trên trình duyệt bạn đang sử dụng và thử lại.'
      }
    ]
  
    return (
      <main className="min-h-screen bg-secondary pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Câu hỏi thường gặp
          </h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
              Hướng dẫn sử dụng website
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg border border-primary/10">
              <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                <iframe 
                  src="https://player.vimeo.com/video/1034889536?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                  style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Hướng dẫn sử dụng website KienVocal"
                />
              </div>
              <script src="https://player.vimeo.com/api/player.js" async></script>
            </div>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-secondary-light p-6 rounded-xl border border-primary/10"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }