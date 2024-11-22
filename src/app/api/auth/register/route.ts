import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Vui lòng điền đầy đủ thông tin' },
        { status: 400 }
      )
    }

    const supabaseAdmin = createClient(
      'https://fgmmykvsbzfgpdloadvb.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnbW15a3ZzYnpmZ3BkbG9hZHZiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjI2MTkwNCwiZXhwIjoyMDQ3ODM3OTA0fQ.CFvf9eksZ5dVEuARVhxIGbtDCazXKZSUxeCui5dWedc'
    )

    const { data: existingProfile } = await supabaseAdmin
      .from('profiles')
      .select()
      .eq('email', email)
      .single()

    if (existingProfile) {
      return NextResponse.json(
        { message: 'Email này đã được đăng ký. Vui lòng sử dụng email khác.' },
        { status: 400 }
      )
    }

    const { data: authData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }
      }
    })

    if (signUpError) {
      console.error('Auth error:', signUpError)
      
      if (signUpError.message.includes('User already registered')) {
        return NextResponse.json(
          { message: 'Email này đã được đăng ký. Vui lòng sử dụng email khác.' },
          { status: 400 }
        )
      }

      if (signUpError.message.includes('Invalid email')) {
        return NextResponse.json(
          { message: 'Email không hợp lệ. Vui lòng kiểm tra lại.' },
          { status: 400 }
        )
      }

      if (signUpError.message.includes('Password')) {
        return NextResponse.json(
          { message: 'Mật khẩu phải có ít nhất 6 ký tự.' },
          { status: 400 }
        )
      }

      return NextResponse.json(
        { message: 'Lỗi khi đăng ký tài khoản' },
        { status: 400 }
      )
    }

    if (!authData.user?.id) {
      return NextResponse.json(
        { message: 'Không thể tạo tài khoản' },
        { status: 400 }
      )
    }

    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert([
        {
          id: authData.user.id,
          name,
          email,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ])

    if (profileError) {
      console.error('Profile creation error:', profileError)
      return NextResponse.json(
        { message: 'Lỗi khi tạo thông tin người dùng' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        message: 'Đăng ký thành công! Vui lòng xác nhận email để tiếp tục.',
        success: true
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Đã có lỗi xảy ra' },
      { status: 500 }
    )
  }
} 