'use client'

import { useState } from 'react'
import Image from 'next/image'
import LoadingSpinner from './LoadingSpinner'
import { getOptimizedImageUrl } from '@/lib/imageMap'

interface ImageWithLoadingProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
}

export default function ImageWithLoading({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
}: ImageWithLoadingProps) {
  const [loaded, setLoaded] = useState(false)
  const resolvedSrc = getOptimizedImageUrl(src)

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute -inset-4 bg-primary opacity-20 blur-lg rounded-lg"></div>
      <div className="relative">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary-light/80 z-10 transition-opacity duration-300">
            <LoadingSpinner />
          </div>
        )}
        <Image
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`rounded-lg shadow-2xl relative transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className || ''}`}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  )
}
