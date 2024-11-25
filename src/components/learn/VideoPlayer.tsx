'use client'

import { useRef, useEffect } from 'react'
import LessonComments from './LessonComments'

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
    const handleGlobalContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    document.addEventListener('contextmenu', handleGlobalContextMenu)

    return () => {
      document.removeEventListener('contextmenu', handleGlobalContextMenu)
    }
  }, [])

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  if (!src && !videoId) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
        <p className="text-gray-400">Không có video cho bài học này</p>
      </div>
    )
  }

  return (
    <div onContextMenu={handleContextMenu}>
      <div 
        className="relative w-full aspect-video bg-black rounded-lg overflow-hidden select-none"
        onContextMenu={handleContextMenu}
        onDragStart={(e) => e.preventDefault()}
      >
        {videoId ? (
          <div className="relative w-full h-full" onContextMenu={handleContextMenu}>
            <div 
              className="absolute inset-0 bottom-[70%] z-10"
              onContextMenu={handleContextMenu}
            ></div>
            <div 
              className="absolute right-[40px] bottom-0 w-24 h-12 z-10"
              onContextMenu={handleContextMenu}
            ></div>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?version=3&vq=hd1080&autoplay=1`}
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
            className="w-full h-full pointer-events-none"
            controls
            autoPlay
            controlsList="nodownload noplaybackrate"
            playsInline
            onContextMenu={handleContextMenu}
            onDragStart={(e) => e.preventDefault()}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <LessonComments courseType={courseType} lessonId={lessonId} />
    </div>
  )
} 