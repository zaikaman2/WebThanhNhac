'use client'

import { useRef, useEffect } from 'react'

interface VideoPlayerProps {
  src?: string
  videoId?: string
  title: string
  courseType: 'basic' | 'intermediate'
  lessonId: number
}

export default function VideoPlayer({ src, videoId, title, courseType, lessonId }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [src])

  useEffect(() => {
    // Chặn inspect element
    const disableInspect = (e: KeyboardEvent) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault()
      }
    }

    // Chặn right click
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Chặn copy/paste
    const disableCopyPaste = (e: ClipboardEvent) => {
      e.preventDefault()
      return false
    }

    document.addEventListener('keydown', disableInspect)
    document.addEventListener('contextmenu', disableContextMenu)
    document.addEventListener('copy', disableCopyPaste)
    document.addEventListener('paste', disableCopyPaste)

    return () => {
      document.removeEventListener('keydown', disableInspect)
      document.removeEventListener('contextmenu', disableContextMenu) 
      document.removeEventListener('copy', disableCopyPaste)
      document.removeEventListener('paste', disableCopyPaste)
    }
  }, [])

  if (!src && !videoId) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
        <p className="text-gray-400">Không có video cho bài học này</p>
      </div>
    )
  }

  return (
    <div className="select-none">
      <div 
        className="relative w-full aspect-video bg-black rounded-lg overflow-hidden"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      >
        {videoId ? (
          <div className="relative w-full h-full" style={{padding: '56.25% 0 0 0'}}>
            <iframe
              src={`https://player.vimeo.com/video/${videoId}?h=475fb8baf6&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1&controls=1&title=0&byline=0&portrait=0&sidedock=0&background=0&quality=1080p&transparent=0&pip=0`}
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={title}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full"
            controls
            autoPlay
            controlsList="nodownload noplaybackrate"
            playsInline
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  )
} 