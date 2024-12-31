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
      action = 'is making a payment'
      break
    case '/api/courses/basic':
      action = 'is viewing basic course info'
      break
    case '/auth/callback':
      action = 'logged in successfully'
      break
    case '/auth/forgot-password':
      action = 'requested password reset'
      break
    case '/auth/register':
      action = 'is registering account'
      break
    case '/auth/login':
      action = 'is logging in'
      break
    case '/courses/basic':
      action = 'is viewing basic course'
      break
    case '/courses/advanced':
      action = 'is viewing advanced course'
      break
    default:
      action = `is accessing ${path}`
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
