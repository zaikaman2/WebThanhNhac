import { NextResponse } from 'next/server'
import PayOS from '@payos/node'

const payOS = new PayOS(
  process.env.PAYOS_CLIENT_ID!,
  process.env.PAYOS_API_KEY!,
  process.env.PAYOS_CHECKSUM_KEY!
)

const COURSE_PRICES = {
  basic: 399000,
  intermediate: 599000
}

export async function POST(request: Request) {
  try {
    const { courseType, email } = await request.json()
    const orderCode = Number(String(Date.now()).slice(-6))
    const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://kienvocal.site'
    
    const amount = COURSE_PRICES[courseType as keyof typeof COURSE_PRICES]
    if (!amount) {
      throw new Error('Invalid course type')
    }

    const emailPrefix = email.split('@')[0]

    const body = {
      orderCode,
      amount,
      description: emailPrefix,
      items: [
        {
          name: `Khóa học ${courseType}`,
          quantity: 1,
          price: amount,
        },
      ],
      returnUrl: `${domain}/payment/success?orderCode=${orderCode}&courseType=${courseType}`,
      cancelUrl: `${domain}/payment/cancel?orderCode=${orderCode}&courseType=${courseType}`,
    }

    const paymentLinkResponse = await payOS.createPaymentLink(body)

    return NextResponse.json({ 
      checkoutUrl: paymentLinkResponse.checkoutUrl,
      orderCode
    })

  } catch (error) {
    console.error('Payment error:', error)
    return NextResponse.json(
      { message: 'Có lỗi xảy ra khi tạo link thanh toán' },
      { status: 500 }
    )
  }
} 
