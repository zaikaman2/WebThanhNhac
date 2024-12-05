import { NextResponse } from 'next/server'
import PayOS from '@payos/node'
import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

const payOS = new PayOS(
  '82071c6c-cd8a-4266-bf48-dbb5e241e5fa',
  '50859d56-e4c6-4e89-8987-c3116999cbf0', 
  'eb595d3d425dff516fb5fcd31264171ca1b0afe5918716822d350c61101f7e4d'
)

// Khởi tạo Supabase Admin Client để có thể thêm purchase mà không cần auth
const supabaseAdmin = createClient(
  'https://fgmmykvsbzfgpdloadvb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnbW15a3ZzYnpmZ3BkbG9hZHZiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjI2MTkwNCwiZXhwIjoyMDQ3ODM3OTA0fQ.CFvf9eksZ5dVEuARVhxIGbtDCazXKZSUxeCui5dWedc'
)

// Verify webhook signature
function verifySignature(body: string, signature: string): boolean {
  const webhookSecretKey = 'eb595d3d425dff516fb5fcd31264171ca1b0afe5918716822d350c61101f7e4d'
  const hmac = crypto.createHmac('sha256', webhookSecretKey)
  const computedSignature = hmac.update(body).digest('hex')
  return computedSignature === signature
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.text()
    const body = JSON.parse(rawBody)
    
    // Verify webhook signature
    const signature = request.headers.get('x-payment-signature')
    if (!signature || !verifySignature(rawBody, signature)) {
      return NextResponse.json(
        { message: 'Invalid signature' },
        { status: 401 }
      )
    }

    // Chỉ xử lý event payment_success
    if (body.event !== 'payment_success') {
      return NextResponse.json({ message: 'Ignored non-success event' })
    }

    const orderCode = body.data.orderCode
    const description = body.data.description // email prefix của user
    const amount = body.data.amount

    // Lấy user_id từ email prefix
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('id')
      .ilike('email', `${description}%`)
      .single()

    if (!profile?.id) {
      throw new Error('User not found')
    }

    // Xác định course type từ amount
    let courseType = 'basic'
    if (amount === 599000) {
      courseType = 'intermediate'
    }

    // Kiểm tra xem user đã mua khóa học này chưa
    const { data: existingPurchase } = await supabaseAdmin
      .from('purchases')
      .select()
      .eq('user_id', profile.id)
      .eq('course_type', courseType)
      .single()

    // Nếu đã có purchase rồi thì không tạo nữa
    if (existingPurchase) {
      return NextResponse.json({ message: 'Purchase already exists' })
    }

    // Tạo purchase record
    const { error: purchaseError } = await supabaseAdmin
      .from('purchases')
      .insert([
        {
          user_id: profile.id,
          course_type: courseType,
          order_code: orderCode,
          amount: amount,
          payment_status: 'completed',
          created_at: new Date().toISOString()
        }
      ])

    if (purchaseError) {
      throw new Error('Failed to create purchase')
    }

    return NextResponse.json({ message: 'Success' })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
