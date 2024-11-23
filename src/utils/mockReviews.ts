function generateRandomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString('vi-VN')
}

const comments = [
  "Khóa học rất hay và bổ ích",
  "Thầy dạy rất tận tâm và dễ hiểu",
  "Tôi đã tiến bộ rất nhiều sau khóa học này",
  "Nội dung được trình bày rất rõ ràng và chi tiết",
  "Rất hài lòng với chất lượng giảng dạy",
  "Học phí xứng đáng với những gì nhận được",
  "Khóa học giúp tôi tự tin hơn khi hát",
  "Cảm ơn thầy đã tận tình chỉ dạy",
  "Kiến thức được truyền đạt rất chuyên nghiệp",
  "Tôi sẽ giới thiệu khóa học cho bạn bè"
]

const names = [
  "Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Thị D", "Hoàng Văn E",
  "Đặng Thị F", "Bùi Văn G", "Đỗ Thị H", "Ngô Văn I", "Vũ Thị K"
]

export function generateMockReviews(count: number, averageRating: number) {
  const reviews = []
  const startDate = new Date(2023, 0, 1)
  const endDate = new Date()

  for (let i = 0; i < count; i++) {
    const randomRating = Math.max(3, Math.min(5, averageRating + (Math.random() * 1 - 0.5)))
    reviews.push({
      id: i + 1,
      name: names[Math.floor(Math.random() * names.length)],
      rating: Math.round(randomRating),
      comment: comments[Math.floor(Math.random() * comments.length)],
      date: generateRandomDate(startDate, endDate)
    })
  }

  return reviews
} 