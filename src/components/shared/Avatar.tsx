import Image from 'next/image'
import { getOptimizedImageUrl } from '@/lib/imageMap'

interface AvatarProps {
  url?: string
  size?: number
}

export default function Avatar({ url, size = 40 }: AvatarProps) {
  const imageSrc = getOptimizedImageUrl(url)

  return (
    <div 
      className="rounded-full bg-secondary-light overflow-hidden relative"
      style={{ width: size, height: size }}
    >
      {url ? (
        <Image 
          src={imageSrc} 
          alt="Avatar"
          width={size}
          height={size}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary">
          <span className="text-lg">?</span>
        </div>
      )}
    </div>
  )
}