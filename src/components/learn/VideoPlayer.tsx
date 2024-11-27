'use client'

import { useRef, useEffect, useState } from 'react'
import Player from '@vimeo/player'
import VideoControls from './VideoControls'
import { VimeoQuality } from '@/types/video'
import type { VimeoPlayer } from '@/types/vimeo'

interface VideoPlayerProps {
  src?: string
  videoId?: string
  title: string
  courseType: 'basic' | 'intermediate'
  lessonId: number
}

export default function VideoPlayer({ videoId, title, courseType, lessonId }: VideoPlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null)
  const [player, setPlayer] = useState<VimeoPlayer | null>(null)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentQuality, setCurrentQuality] = useState<VimeoQuality>('1080p')
  const [availableQualities, setAvailableQualities] = useState<VimeoQuality[]>([])
  const [isControlsVisible, setIsControlsVisible] = useState(true)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (playerRef.current && videoId) {
      // Tạo iframe với các parameters để ẩn UI của Vimeo
      const iframe = document.createElement('iframe')
      iframe.src = `https://player.vimeo.com/video/${videoId}?background=1&controls=0&playsinline=0&transparent=0&app_id=58479&player_id=0&volume=1`
      iframe.style.position = 'absolute'
      iframe.style.top = '0'
      iframe.style.left = '0'
      iframe.style.width = '100%'
      iframe.style.height = '100%'
      iframe.style.pointerEvents = 'none' // Vô hiệu hóa tương tác với iframe
      iframe.setAttribute('frameborder', '0')
      iframe.setAttribute('allow', 'autoplay; picture-in-picture')
      iframe.setAttribute('title', title)
      
      // Xóa nội dung cũ và thêm iframe mới
      playerRef.current.innerHTML = ''
      playerRef.current.appendChild(iframe)

      // Cast through unknown first to avoid type mismatch error
      const vimeoPlayer = (new Player(iframe, {
        id: parseInt(videoId),
        background: true,
        controls: false,
        responsive: true,
        dnt: true,
        quality: currentQuality,
        transparent: false,
        playsinline: false,
        muted: false
      }) as unknown) as VimeoPlayer

      vimeoPlayer.setVolume(1)

      vimeoPlayer.getDuration().then(setDuration)
      setPlayer(vimeoPlayer)

      // Lấy danh sách chất lượng có sẵn
      vimeoPlayer.getQualities().then((qualities: { id: VimeoQuality }[]) => {
        const validQualities = qualities
          .map(q => q.id)
          .filter((q): q is VimeoQuality => 
            ['4K', '2K', '1080p', '720p', '540p', '360p', '240p'].includes(q)
          )
        setAvailableQualities(validQualities)
      })

      // Thêm style để ẩn UI của Vimeo khi hover
      const style = document.createElement('style')
      style.textContent = `
        .video-container .vimeo-ui * {
          display: none !important;
        }
        .video-container iframe {
          pointer-events: none;
        }
      `
      document.head.appendChild(style)

      // Thêm event listeners để chặn tương tác
      const disableContextMenu = (e: MouseEvent) => {
        e.preventDefault()
        return false
      }

      const disableCopyPaste = (e: ClipboardEvent) => {
        e.preventDefault()
        return false
      }

      const disableInspect = (e: KeyboardEvent) => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
          e.preventDefault()
        }
      }

      // Thêm các event listeners
      document.addEventListener('contextmenu', disableContextMenu)
      document.addEventListener('copy', disableCopyPaste)
      document.addEventListener('paste', disableCopyPaste)
      document.addEventListener('cut', disableCopyPaste)
      document.addEventListener('keydown', disableInspect)

      return () => {
        vimeoPlayer.destroy()
        style.remove()
        // Xóa các event listeners
        document.removeEventListener('contextmenu', disableContextMenu)
        document.removeEventListener('copy', disableCopyPaste)
        document.removeEventListener('paste', disableCopyPaste)
        document.removeEventListener('cut', disableCopyPaste)
        document.removeEventListener('keydown', disableInspect)
      }
    }
  }, [videoId, title, currentQuality])

  const handleFullscreenToggle = () => {
    const container = document.querySelector('.video-container')
    if (container) {
      if (!document.fullscreenElement) {
        container.requestFullscreen()
        setIsFullscreen(true)
      } else {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  const handleQualityChange = (quality: VimeoQuality) => {
    setCurrentQuality(quality)
    if (player) {
      player.setQuality(quality)
    }
  }

  const handleMouseMove = () => {
    setIsControlsVisible(true)
    
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }

    if (isFullscreen) {
      controlsTimeoutRef.current = setTimeout(() => {
        setIsControlsVisible(false)
      }, 2000)
    }
  }

  return (
    <div className="select-none">
      <div 
        className={`relative w-full aspect-video bg-black rounded-lg overflow-hidden video-container ${
          !isControlsVisible && isFullscreen ? 'cursor-none' : ''
        }`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsControlsVisible(true)}
        onMouseLeave={() => {
          if (!isFullscreen) {
            setIsControlsVisible(false)
          }
        }}
      >
        <div 
          ref={playerRef}
          className="relative w-full h-full" 
          style={{padding: '56.25% 0 0 0'}}
        />
        
        {player && (
          <div 
            className={`absolute inset-0 ${
              isControlsVisible ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          >
            <VideoControls 
              player={player}
              duration={duration}
              isFullscreen={isFullscreen}
              onFullscreenToggle={handleFullscreenToggle}
              currentQuality={currentQuality}
              availableQualities={availableQualities}
              onQualityChange={handleQualityChange}
            />
          </div>
        )}
      </div>
    </div>
  )
} 