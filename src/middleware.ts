import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Lấy IP của người dùng từ các headers khác nhau
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cloudflareIP = request.headers.get('cf-connecting-ip')
  
  // Ưu tiên lấy IP theo thứ tự: cloudflare > x-real-ip > x-forwarded-for
  const ip = cloudflareIP || realIP || (forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown')
  
  // Lấy thông tin request
  const method = request.method
  const path = request.nextUrl.pathname

  // Tạo message mô tả hành động
  let message = `IP ${ip} `
  switch (path) {
    case '/api/payment/create-payment-link':
      message += 'initiated payment'
      break
    case '/api/courses/basic':
      message += 'accessed basic course'
      break
    case '/auth/callback':
      message += 'completed authentication'
      break
    case '/auth/forgot-password':
      message += 'requested password reset'
      break
    case '/auth/register':
      message += 'attempted registration'
      break
    case '/auth/login':
      message += 'attempted login'
      break
    case '/courses/basic':
      message += 'viewed basic course'
      break
    case '/courses/advanced':
      message += 'viewed advanced course'
      break
    default:
      message += `accessed ${path}`
  }

  // Log thông tin
  console.log(`${method} ${path} - ${message}`)

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