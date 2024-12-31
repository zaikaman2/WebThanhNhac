import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const userEmail = token?.email || 'anonymous'
  
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