import { getCourseByType } from '@/lib/getCourses'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const course = await getCourseByType('intermediate')
    
    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' }, 
        { status: 404 }
      )
    }

    return NextResponse.json(course)
  } catch (error) {
    console.error('Error fetching intermediate course:', error)
    return NextResponse.json(
      { error: 'Failed to fetch course' }, 
      { status: 500 }
    )
  }
} 