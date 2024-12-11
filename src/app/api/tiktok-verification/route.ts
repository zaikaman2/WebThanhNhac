import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(
    'tiktok-developers-site-verification=FLK9LOKpzt7HmKn4KgSHnP1',
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
} 