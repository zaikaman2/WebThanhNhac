import { NextResponse } from 'next/server'
import PayOS from '@payos/node'
import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

interface PaymentData {
  orderCode: number
  amount: number
  description: string
  accountNumber?: string
  reference?: string
  transactionDateTime?: string
  currency?: string
  paymentLinkId?: string
  code?: string
  desc?: string
  counterAccountBankId?: string
  counterAccountBankName?: string
  counterAccountName?: string
  counterAccountNumber?: string
  virtualAccountName?: string
  virtualAccountNumber?: string
  [key: string]: string | number | undefined
}

interface WebhookBody {
  code: string
  desc: string
  success: boolean
  data: PaymentData
  signature: string
}

const CHECKSUM_KEY = 'eb595d3d425dff516fb5fcd31264171ca1b0afe5918716822d350c61101f7e4d'

const payOS = new PayOS(
  '82071c6c-cd8a-4266-bf48-dbb5e241e5fa',
  '50859d56-e4c6-4e89-8987-c3116999cbf0', 
  CHECKSUM_KEY
)

// Khởi tạo Supabase Admin Client để có thể thêm purchase mà không cần auth
const supabaseAdmin = createClient(
  'https://fgmmykvsbzfgpdloadvb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnbW15a3ZzYnpmZ3BkbG9hZHZiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjI2MTkwNCwiZXhwIjoyMDQ3ODM3OTA0fQ.CFvf9eksZ5dVEuARVhxIGbtDCazXKZSUxeCui5dWedc'
)

function sortObjDataByKey(object: Record<string, unknown>): Record<string, unknown> {
  return Object.keys(object)
    .sort()
    .reduce((obj, key) => {
      obj[key] = object[key]
      return obj
    }, { ...object })
}

function convertObjToQueryStr(object: Record<string, unknown>): string {
  return Object.keys(object)
    .filter((key) => object[key] !== undefined)
    .map((key) => {
      let value = object[key]
      // Sort nested object
      if (value && Array.isArray(value)) {
        value = JSON.stringify(value.map((val) => sortObjDataByKey(val as Record<string, unknown>)))
      }
      // Set empty string if null
      if ([null, undefined, 'undefined', 'null'].includes(value as string)) {
        value = ''
      }
      return `${key}=${value}`
    })
    .join('&')
}

function verifySignature(data: PaymentData, signature: string): boolean {
  const sortedDataByKey = sortObjDataByKey(data)
  const dataQueryStr = convertObjToQueryStr(sortedDataByKey)
  console.log('Data query string:', dataQueryStr)
  
  const computedSignature = crypto
    .createHmac('sha256', CHECKSUM_KEY)
    .update(dataQueryStr)
    .digest('hex')
  
  console.log('Computed signature:', computedSignature)
  console.log('Received signature:', signature)
  
  return computedSignature === signature
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.text()
    const body = JSON.parse(rawBody) as WebhookBody
    
    console.log('Received webhook data:', body)
    
    // Verify signature
    if (!body.signature || !verifySignature(body.data, body.signature)) {
      console.log('Signature verification failed')
      return NextResponse.json(
        { success: false },
        { status: 401 }
      )
    }

    // Chỉ xử lý khi code = 00 (thành công)
    if (body.code !== '00') {
      return NextResponse.json({ success: true })
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
      console.error('User not found:', description)
      return NextResponse.json({ success: true })
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
      return NextResponse.json({ success: true })
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
      console.error('Failed to create purchase:', purchaseError)
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ success: true })
  }
}
