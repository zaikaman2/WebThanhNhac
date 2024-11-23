import { useEffect, useState } from 'react'

interface GlowingEffectProps {
  children: React.ReactNode
  color?: string
  intensity?: number
  duration?: number
}

export default function GlowingEffect({
  children,
  color = '#FFD700',
  intensity = 0.3,
  duration = 3
}: GlowingEffectProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const animate = () => {
      const t = (Date.now() / 1000) % duration
      const x = 50 + 30 * Math.sin(2 * Math.PI * t / duration)
      const y = 50 + 30 * Math.cos(2 * Math.PI * t / duration)
      setPosition({ x, y })
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [duration])

  return (
    <div className="relative">
      <div
        className="absolute -inset-4 blur-3xl rounded-lg transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, ${color}, transparent 70%)`,
          opacity: intensity
        }}
      />
      {children}
    </div>
  )
} 