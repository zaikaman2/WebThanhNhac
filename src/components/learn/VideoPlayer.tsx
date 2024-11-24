'use client'

import { useRef, useEffect } from 'react'
import LessonComments from './LessonComments'

interface VideoPlayerProps {
  src: string
  title: string
  courseType: 'basic' | 'intermediate'
  lessonId: number
}

export default function VideoPlayer({ src, title, courseType, lessonId }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [src])

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  if (!src) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
        <p className="text-gray-400">Không có video cho bài học này</p>
      </div>
    )
  }

  return (
    <div>
      <div 
        className="relative w-full aspect-video bg-black rounded-lg overflow-hidden"
        onContextMenu={handleContextMenu}
      >
        <video
          ref={videoRef}
          className="w-full h-full"
          controls
          controlsList="nodownload"
          playsInline
          onContextMenu={handleContextMenu}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <LessonComments courseType={courseType} lessonId={lessonId} />
    </div>
  )
} 