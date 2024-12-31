import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Lấy thông tin user từ next-auth session token
  const authToken = request.cookies.get('next-auth.session-token')?.value
  let userEmail = 'anonymous'
  
  if (authToken) {
    try {
      // Decode JWT token để lấy email
      const base64Payload = authToken.split('.')[1]
      const payload = Buffer.from(base64Payload, 'base64').toString('ascii')
      const session = JSON.parse(payload)
      userEmail = session.email || 'anonymous'
    } catch (error) {
      console.error('Error decoding session token:', error)
    }
  }
  
  // Lấy thông tin request
  const method = request.method
  const path = request.nextUrl.pathname

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