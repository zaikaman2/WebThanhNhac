'use client'

import { useRef, useEffect } from 'react'

interface VideoPlayerProps {
  src?: string
  videoId?: string
  title: string
  courseType: 'basic' | 'intermediate'
  lessonId: number
}

interface VimeoFile {
  quality: string;
  type: string;
  link: string;
}

interface Document extends HTMLDocument {
  webkitFullscreenElement?: Element;
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
}

export default function VideoPlayer({ src, videoId, title, courseType, lessonId }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const VIDEO_CONFIG: Record<string, { token: string, hash: string }> = {
    '1033721174': {
      token: 'fea51252a522221be9625587981e2805',
      hash: '475fb8baf6'
    },
    '1033700924': {
      token: '885c7e461bdb5cd4f14a1e3258d5b8b3',
      hash: '4963b48f73'
    },
    '1033722684': {
      token: 'fea51252a522221be9625587981e2805',
      hash: '4963b48f73'
    },
    '1033700672': {
      token: '885c7e461bdb5cd4f14a1e3258d5b8b3',
      hash: '4963b48f73'
    },
    '1033729475': {
      token: 'c37f40bb9bd1e66b7ccfc3771216c0f6',
      hash: 'ba62a89614'
    },
    '1033806012': {
      token: 'c37f40bb9bd1e66b7ccfc3771216c0f6',
      hash: '860eb8abea'
    }
  }

  // Lấy config cho video hiện tại
  const config = videoId ? VIDEO_CONFIG[videoId.split('?')[0]] || { hash: '' } : { hash: '' }

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

    // Add fullscreen change event listener
    const handleFullscreenChange = () => {
      console.log('Fullscreen change detected')
      
      const fullscreenElement = document.fullscreenElement || 
        (document as Document).webkitFullscreenElement ||
        (document as Document).mozFullScreenElement
      
      console.log('Fullscreen element:', fullscreenElement)

      if (fullscreenElement) {
        // Create blocking divs in fullscreen
        const blockingContainer = document.createElement('div')
        blockingContainer.id = 'blocking-container'
        blockingContainer.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          pointer-events: none;
        `

        // Share button blocker
        const shareBlocker = document.createElement('div')
        shareBlocker.style.cssText = `
          position: absolute;
          top: 16px;
          right: 0;
          width: 48px;
          height: 48px;
          background-color: rgba(0,0,0,1);
          cursor: default;
          pointer-events: auto;
        `

        // Vimeo button blocker
        const vimeoBlocker = document.createElement('div')
        vimeoBlocker.style.cssText = `
          position: absolute;
          bottom: 0;
          right: 0;
          width: 48px;
          height: 48px;
          background-color: rgba(0,0,0,1);
          cursor: default;
          pointer-events: auto;
        `

        blockingContainer.appendChild(shareBlocker)
        blockingContainer.appendChild(vimeoBlocker)
        
        // Thử thêm vào document.body thay vì fullscreenElement
        document.body.appendChild(blockingContainer)
        console.log('Blocking container added to body')
      } else {
        // Remove blocking divs when exiting fullscreen
        const container = document.getElementById('blocking-container')
        if (container) {
          container.remove()
          console.log('Blocking container removed')
        }
      }
    }

    document.addEventListener('keydown', disableInspect)
    document.addEventListener('contextmenu', disableContextMenu)
    document.addEventListener('copy', disableCopyPaste)
    document.addEventListener('paste', disableCopyPaste)
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('keydown', disableInspect)
      document.removeEventListener('contextmenu', disableContextMenu) 
      document.removeEventListener('copy', disableCopyPaste)
      document.removeEventListener('paste', disableCopyPaste)
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
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
        className="relative w-full aspect-video bg-black rounded-lg overflow-hidden video-container group"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      >
        {videoId ? (
          <div className="relative w-full h-full" style={{padding: '56.25% 0 0 0'}}>
            <iframe
              src={`https://player.vimeo.com/video/${videoId}${config.hash ? `?h=${config.hash}` : ''}&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1&controls=1&title=0&byline=0&portrait=0&sidedock=0&background=0&quality=1080p&transparent=0&pip=0&sharing=0&fullscreen=0`}
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
              frameBorder="0"
              allow="autoplay; picture-in-picture"
              title={title}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Block nút share */}
            <div 
              className="absolute top-12 right-0 w-12 h-24 bg-transparent cursor-default z-50"
              onClick={(e) => e.preventDefault()}
            />
            {/* Block logo Vimeo */}
            <div 
              className="absolute bottom-0 right-0 w-20 h-12 bg-transparent cursor-default z-50"
              onClick={(e) => e.preventDefault()}
            />
            {/* Nút fullscreen tự xử lý */}
            <button 
              className="absolute bottom-1 p-1.5 bg-black/50 text-white hover:bg-black/75 transition-colors rounded opacity-0 group-hover:opacity-100"
              style={{ right: '4.4rem' }}
              onClick={() => {
                const container = document.querySelector('.video-container')
                if (container && document.fullscreenElement === null) {
                  container.requestFullscreen()
                } else if (document.fullscreenElement) {
                  document.exitFullscreen()
                }
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" 
                />
              </svg>
            </button>
          </div>
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full [&::-webkit-media-controls-share-button]:hidden [&::-webkit-media-controls-share-button]:opacity-0"
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