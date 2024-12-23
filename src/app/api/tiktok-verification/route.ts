import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(
    'tiktok-developers-site-verification=FLK9LOKpzt7HmKn4KgSHnP1G5z9ksmZK',
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
} 