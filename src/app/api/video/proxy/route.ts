import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// Map video IDs to their corresponding access tokens and hash
const VIDEO_CONFIG: Record<string, { token: string, hash: string }> = {
  '1033721174': {
    token: 'fea51252a522221be9625587981e2805',
    hash: '475fb8baf6'
  },
  '1033700924': {
    token: '885c7e461bdb5cd4f14a1e3258d5b8b3',
    hash: ''
  },
  '1033722684': {
    token: 'fea51252a522221be9625587981e2805',
    hash: '4963b48f73'
  },
  '1033700672': {
    token: '885c7e461bdb5cd4f14a1e3258d5b8b3',
    hash: ''
  },
  '1033729475': {
    token: 'c37f40bb9bd1e66b7ccfc3771216c0f6',
    hash: 'ba62a89614'
  }
}

export async function GET(request: Request) {
  try {
    // Check auth
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get video ID from URL
    const url = new URL(request.url)
    const videoId = url.pathname.split('/').pop()

    if (!videoId) {
      throw new Error('Video ID not provided')
    }

    const config = VIDEO_CONFIG[videoId]
    if (!config) {
      throw new Error('Video not found')
    }

    // Fetch video data from Vimeo API
    const response = await fetch(
      `https://api.vimeo.com/videos/${videoId}`, 
      {
        headers: {
          'Authorization': `bearer ${config.token}`
        }
      }
    )
    
    const data = await response.json()
    
    // Get highest quality progressive URL
    const progressiveFiles = data.files.filter((file: {
      quality: string;
      type: string;
      link?: string;
    }) => 
      file.quality === 'source' && 
      file.type === 'video/mp4'
    )

    if (!progressiveFiles[0]?.link) {
      throw new Error('Video URL not found')
    }

    // Redirect to actual video URL with short expiry
    return NextResponse.redirect(progressiveFiles[0].link, {
      headers: {
        'Cache-Control': 'private, max-age=300'
      }
    })
    
  } catch (error) {
    console.error('Error proxying video:', error)
    return NextResponse.json(
      { error: 'Error fetching video' },
      { status: 500 }
    )
  }
} 