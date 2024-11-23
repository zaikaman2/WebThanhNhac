import { useEffect, useState } from 'react'

interface MusicWavesProps {
  isPlaying?: boolean
  color?: string
  className?: string
}

export default function MusicWaves({ 
  isPlaying = true, 
  color = '#FFD700',
  className = ''
}: MusicWavesProps) {
  const [bars] = useState(Array(20).fill(0))

  return (
    <div className={`flex items-center gap-0.5 h-12 ${className}`}>
      {bars.map((_, index) => (
        <div
          key={index}
          className={`w-0.5 rounded-full transition-all duration-200 ${isPlaying ? 'animate-musicWave' : 'h-1'}`}
          style={{
            backgroundColor: color,
            animationDelay: `${index * 0.05}s`
          }}
        />
      ))}
    </div>
  )
} 