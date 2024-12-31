import Image from 'next/image'
import Link from 'next/link'
import { Course } from './types'

type CourseCardProps = Course

export default function CourseCard({ id, type, title, description, price, image }: CourseCardProps) {
  const routePath = {
    'basic': '/courses/basic',
    'intermediate': '/courses/intermediate',
    'advanced': '/courses/advanced'
  }[type] || '/courses'

  const originalPrice = type === 'basic' ? 499000 : type === 'intermediate' ? 699000 : price
  const discount = type === 'basic' ? 20 : type === 'intermediate' ? 14.4 : 0
  const showSale = discount > 0
  const savings = originalPrice - price

  return (
    <Link 
      href={routePath}
      className="flex flex-col h-full bg-secondary-light rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-primary/10 relative"
    >
      {showSale && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 animate-bounce">
          -{discount}%
        </div>
      )}
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-darker to-transparent opacity-60"></div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2 flex-1">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            {showSale && (
              <span className="text-gray-400 line-through text-sm">
                {originalPrice.toLocaleString('vi-VN')}đ
              </span>
            )}
            <span className="text-primary font-bold text-lg">
              {price.toLocaleString('vi-VN')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {showSale && (
              <span className="bg-red-500/10 text-red-500 text-xs px-2 py-1 rounded-full">
                Tiết kiệm 100,000đ
              </span>
            )}
            <span className="bg-primary text-secondary px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary-light transition-all duration-300">
              Chi tiết
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
