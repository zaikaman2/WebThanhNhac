'use client'

import Image from 'next/image'
import LoadingSpinner from './LoadingSpinner'

interface ImageWithLoadingProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function ImageWithLoading({ src, alt, width, height }: ImageWithLoadingProps) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-primary opacity-20 blur-lg rounded-lg"></div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center bg-secondary-light">
          <LoadingSpinner />
        </div>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg shadow-2xl relative"
          priority
          onLoadingComplete={(img) => {
            img.parentElement?.querySelector('.absolute')?.remove()
          }}
        />
      </div>
    </div>
  )
} 