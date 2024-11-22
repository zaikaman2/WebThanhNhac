'use client'

import { useEffect, useRef } from 'react'

interface SlideInProps {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  className?: string
}

export default function SlideIn({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-visible')
        }
      },
      {
        threshold: 0.1
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const slideClasses = {
    left: 'translate-x-[-50px]',
    right: 'translate-x-[50px]',
    up: 'translate-y-[50px]',
    down: 'translate-y-[-50px]'
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        opacity-0 
        ${slideClasses[direction]}
        transition-all 
        duration-[1500ms]
        ease-out
        slide-in
        ${className}
      `}
    >
      {children}
    </div>
  )
} 