import { supabase } from './supabase'

export type Profile = {
  id: string
  name: string
  email: string
  avatar_url?: string | null
  phone?: string | null
  createdAt: string
  updatedAt: string
}

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (error) {
    console.error('Error fetching profile:', error)
    return null
  }
  return data
}