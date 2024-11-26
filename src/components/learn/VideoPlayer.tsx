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
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bottom-[70%] z-10"></div>
            <div className="absolute right-[40px] bottom-0 w-24 h-12 z-10"></div>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?version=3&vq=hd1080&autoplay=1&controls=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&enablejsapi=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-forms allow-presentation"
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