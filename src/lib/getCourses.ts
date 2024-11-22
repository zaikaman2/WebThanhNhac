import { cache } from 'react'
import { supabase } from './supabase'
import { Course } from '@/components/shared/types'

export const revalidate = 3600 // revalidate every hour

const fallbackCourses: Record<string, Course> = {
  basic: {
    id: '1',
    type: 'basic',
    title: 'Khóa học thanh nhạc cơ bản',
    description: 'Khám phá những kiến thức cơ bản về thanh nhạc, kỹ thuật hát và phát triển giọng hát.',
    price: 2500000,
    image: '/images/course-basic.jpg'
  },
  intermediate: {
    id: '2',
    type: 'intermediate',
    title: 'Khóa học thanh nhạc trung cấp',
    description: 'Nâng cao kỹ năng thanh nhạc với các bài học chuyên sâu hơn.',
    price: 3500000,
    image: '/images/course-intermediate.jpg'
  },
  advanced: {
    id: '3',
    type: 'advanced',
    title: 'Khóa học thanh nhạc nâng cao',
    description: 'Phát triển kỹ năng thanh nhạc chuyên nghiệp với các kỹ thuật nâng cao.',
    price: 4500000,
    image: '/images/course-advanced.jpg'
  }
}

export const getCourses = cache(async (): Promise<Course[]> => {
  const { data, error } = await supabase
    .from('Course')
    .select('*')
  
  if (error) throw error
  return data || []
})

export const getCourseByType = cache(async (type: Course['type']): Promise<Course | null> => {
  const { data, error } = await supabase
    .from('Course')
    .select('*')
    .eq('type', type)
    .single()
  
  if (error) {
    return fallbackCourses[type] || null
  }
  
  return data
}) 