import { NextResponse } from 'next/server'
import PayOS from '@payos/node'

const payOS = new PayOS(
  '2965f855-365d-4e12-861f-ed1fd2827e8d',
  'eb21ce46-6c4c-4c5b-b141-1ad5cdd111a5', 
  '5afef51ed0743e8aaa2bcc44ccea171b8eda05d3400c3e7f1ec9819215d18427'
)

const COURSE_PRICES = {
  basic: 10000,
  intermediate: 599000
}

export async function POST(request: Request) {
  try {
    const { courseType } = await request.json()
    const orderCode = Number(String(Date.now()).slice(-6))
    const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://kienvocal.com'
    
    const amount = COURSE_PRICES[courseType as keyof typeof COURSE_PRICES]
    if (!amount) {
      throw new Error('Invalid course type')
    }

    const body = {
      orderCode,
      amount,
      description: `Thanh toán ${courseType}`,
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