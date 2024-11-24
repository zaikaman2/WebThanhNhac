interface AvatarProps {
  url?: string
  size?: number
}

export default function Avatar({ url, size = 40 }: AvatarProps) {
  return (
    <div 
      className="rounded-full bg-secondary-light overflow-hidden"
      style={{ width: size, height: size }}
    >
      {url ? (
        <img 
          src={url} 
          alt="Avatar"
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