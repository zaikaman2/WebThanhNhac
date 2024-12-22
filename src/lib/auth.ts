import { supabase } from './supabase'

export async function signUp(email: string, password: string, name: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name }
    }
  })
  
  if (error) throw error
  return data
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      // Nếu lỗi là email chưa xác nhận, vẫn cho phép đăng nhập
      if (error.message.includes('Email not confirmed')) {
        // Chuyển đổi thông báo lỗi sang tiếng Việt
        throw new Error('Email chưa được xác nhận, vui lòng xác nhận email trước khi đăng nhập')
      }

      // Chuyển đổi các thông báo lỗi khác sang tiếng Việt
      if (error.message.includes('Invalid login credentials')) {
        throw new Error('Email hoặc mật khẩu không chính xác')
      }
      throw error
    }

    return data
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Đăng nhập thất bại')
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`
    }
  })

  if (error) throw error
  return data
}

export async function handleGoogleSignUp(user: any) {
  try {
    // Kiểm tra xem user đã tồn tại trong bảng profiles chưa
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select()
      .eq('id', user.id)
      .single()

    if (!existingProfile) {
      // Nếu chưa có profile, tạo mới
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: user.id,
            name: user.user_metadata.full_name || user.user_metadata.name,
            email: user.email,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ])

      if (profileError) throw profileError
    }

    return true
  } catch (error) {
    console.error('Error handling Google sign up:', error)
    throw error
  }
} 