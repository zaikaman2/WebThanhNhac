import { getCourseByType } from '@/lib/getCourses'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const course = await getCourseByType('basic')
    
    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' }, 
        { status: 404 }
      )
    }

    return NextResponse.json(course)
  } catch (error) {
    console.error('Error fetching basic course:', error)
    return NextResponse.json(
      { error: 'Failed to fetch course' }, 
      { status: 500 }
    )
  }
} 