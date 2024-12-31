import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Lấy thông tin user từ cookie session nếu có
  const session = request.cookies.get('session')?.value
  const userEmail = session ? JSON.parse(session).email : 'anonymous'
  
  // Lấy thông tin request
  const method = request.method
  const path = request.nextUrl.pathname
  const timestamp = new Date().toISOString()

  // Tạo message mô tả hành động
  let message = `User ${userEmail} `
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
  console.log(`[${timestamp}] ${method} ${path} - ${message}`)

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