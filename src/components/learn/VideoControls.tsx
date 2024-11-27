import { useState, useEffect, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, Settings } from 'lucide-react'
import { VimeoQuality } from '@/types/video'

interface VideoControlsProps {
  player: any
  duration: number
  isFullscreen: boolean
  onFullscreenToggle: () => void
  currentQuality: VimeoQuality
  availableQualities: VimeoQuality[]
  onQualityChange: (quality: VimeoQuality) => void
}

export default function VideoControls({ player, duration, isFullscreen, onFullscreenToggle, currentQuality, availableQualities, onQualityChange }: VideoControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)
  const [showQualityMenu, setShowQualityMenu] = useState(false)

  useEffect(() => {
    const timeUpdate = (data: { seconds: number }) => {
      setCurrentTime(data.seconds)
    }

    player.on('timeupdate', timeUpdate)
    player.on('play', () => setIsPlaying(true))
    player.on('pause', () => setIsPlaying(false))

    return () => {
      player.off('timeupdate', timeUpdate)
    }
  }, [player])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return
    
    const rect = progressRef.current.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    const newTime = pos * duration
    
    player.setCurrentTime(newTime)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    player.setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const togglePlay = () => {
    if (isPlaying) {
      player.pause()
    } else {
      player.play()
    }
  }

  const toggleMute = () => {
    if (isMuted) {
      player.setVolume(volume || 1)
      setIsMuted(false)
    } else {
      player.setVolume(0)
      setIsMuted(true)
    }
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
      {/* Progress bar */}
      <div 
        ref={progressRef}
        className="h-1 bg-gray-600 rounded-full mb-4 cursor-pointer group/progress"
        onClick={handleProgressClick}
      >
        <div 
          className="h-full bg-primary rounded-full relative"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity" />
        </div>
      </div>

      <div className="flex items-center justify-between opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-4">
          {/* Play/Pause button */}
          <button 
            onClick={togglePlay}
            className="text-white hover:text-primary transition-colors"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>

          {/* Volume control */}
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleMute}
              className="text-white hover:text-primary transition-colors"
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 accent-primary"
            />
          </div>

          {/* Time display */}
          <div className="text-white text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          {/* Quality selector */}
          <div className="relative">
            <button
              onClick={() => setShowQualityMenu(!showQualityMenu)}
              className="text-white hover:text-primary transition-colors flex items-center gap-1"
            >
              <Settings size={20} />
              <span className="text-sm">{currentQuality}</span>
            </button>

            {showQualityMenu && (
              <div className="absolute bottom-full mb-2 left-0 bg-secondary-darker rounded-lg shadow-lg overflow-hidden">
                {availableQualities.map((quality) => (
                  <button
                    key={quality}
                    onClick={() => {
                      onQualityChange(quality)
                      setShowQualityMenu(false)
                    }}
                    className={`block w-full px-4 py-2 text-sm text-left hover:bg-secondary transition-colors ${
                      quality === currentQuality ? 'text-primary' : 'text-white'
                    }`}
                  >
                    {quality}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Fullscreen button */}
        <button
          onClick={onFullscreenToggle}
          className="text-white hover:text-primary transition-colors"
        >
          {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
        </button>
      </div>
    </div>
  )
} 