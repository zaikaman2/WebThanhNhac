export const logError = (error: Error) => {
  // Thêm logic ghi log ở đây
  console.error('Application error:', error)
  
  // Gửi lỗi đến service monitoring (trong tương lai)
  // await sentryClient.captureException(error)
} 