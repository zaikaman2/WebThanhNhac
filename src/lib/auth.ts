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
        // Thử đăng nhập lại một lần nữa
        const { data: retryData, error: retryError } = await supabase.auth.signInWithPassword({
          email,
          password
        })
        
        if (retryError) {
          // Chuyển đổi thông báo lỗi sang tiếng Việt
          if (retryError.message.includes('Invalid login credentials')) {
            throw new Error('Email hoặc mật khẩu không chính xác')
          }
          throw retryError
        }
        return retryData
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