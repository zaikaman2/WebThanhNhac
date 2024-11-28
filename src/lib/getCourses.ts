import { cache } from 'react'
import { supabase } from './supabase'
import { Course } from '@/components/shared/types'

export const revalidate = 3600 // revalidate every hour

export const getCourses = cache(async (): Promise<Course[]> => {
  try {
    const { data, error } = await supabase
      .from('Course')
      .select('*')
      .neq('type', 'intermediate')
    
    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching courses:', error)
    throw error
  }
})

export const getCourseByType = cache(async (type: Course['type']): Promise<Course | null> => {
  try {
    const { data, error } = await supabase
      .from('Course')
      .select('*')
      .eq('type', type)
      .single()
    
    if (error) throw error
    return data
  } catch (error) {
    console.error(`Error fetching course type ${type}:`, error)
    throw error
  }
}) 