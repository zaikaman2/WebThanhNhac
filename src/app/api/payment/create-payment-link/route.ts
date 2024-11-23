import { NextResponse } from 'next/server'
import PayOS from '@payos/node'

const payOS = new PayOS(
  '2965f855-365d-4e12-861f-ed1fd2827e8d',
  'eb21ce46-6c4c-4c5b-b141-1ad5cdd111a5', 
  '5afef51ed0743e8aaa2bcc44ccea171b8eda05d3400c3e7f1ec9819215d18427'
)

export async function POST(request: Request) {
  try {
    const { courseType } = await request.json()
    const orderCode = Number(String(Date.now()).slice(-6))
    const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://kienvocal.vercel.app'
    
    const body = {
      orderCode,
      amount: 299000,
      description: `Thanh toán khóa học ${courseType}`,
      items: [
        {
          name: "Khóa học Basic",
          quantity: 1,
          price: 299000,
        },
      ],
      returnUrl: `${domain}/payment/success?orderCode=${orderCode}`,
      cancelUrl: `${domain}/payment/cancel?orderCode=${orderCode}`,
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