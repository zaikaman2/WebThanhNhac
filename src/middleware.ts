import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Lấy IP của người dùng từ các headers khác nhau
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cloudflareIP = request.headers.get('cf-connecting-ip')
  
  // Ưu tiên lấy IP theo thứ tự: cloudflare > x-real-ip > x-forwarded-for
  const ip = cloudflareIP || realIP || (forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown')
  
  const path = request.nextUrl.pathname

  // Tạo message mô tả hành động
  let action = ''
  switch (path) {
    case '/api/payment/create-payment-link':
      action = 'đang thanh toán khóa học'
      break
    case '/api/courses/basic':
      action = 'đang xem thông tin khóa cơ bản'
      break
    case '/auth/callback':
      action = 'đã đăng nhập thành công'
      break
    case '/auth/forgot-password':
      action = 'đang yêu cầu đặt lại mật khẩu'
      break
    case '/auth/register':
      action = 'đang đăng ký tài khoản'
      break
    case '/auth/login':
      action = 'đang đăng nhập'
      break
    case '/courses/basic':
      action = 'đang xem khóa học cơ bản'
      break
    case '/courses/advanced':
      action = 'đang xem khóa học nâng cao'
      break
    default:
      action = `đang truy cập ${path}`
  }

  // Log thông tin
  console.log(`IP ${ip} ${action}`)

  return NextResponse.next()
}

// Chỉ áp dụng middleware cho các route cần thiết
export const config = {
  matcher: [
    '/api/:path*',
    '/auth/:path*',
    '/courses/:path*',
    '/payment/:path*'
  ]
} 