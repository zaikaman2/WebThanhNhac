import { supabase } from './supabase'

export type Profile = {
  id: string
  name: string
  email: string
  avatar_url?: string | null
  phone?: string | null
  createdAt?: string
  updatedAt?: string
}

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (error) {
    console.error('Error fetching profile:', error)
    throw error
  }
  return data
}

export async function updateProfile(userId: string, updates: { name?: string }) {
  const { error } = await supabase
    .from('profiles')
    .update({
      ...updates,
      updatedAt: new Date().toISOString()
    })
    .eq('id', userId)
  
  if (error) {
    console.error('Error updating profile:', error)
    throw error
  }
} 