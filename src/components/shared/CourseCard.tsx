import Image from 'next/image'
import Link from 'next/link'
import { Course } from './types'

type CourseCardProps = Course

export default function CourseCard({ id, title, description, price, image }: CourseCardProps) {
  return (
    <Link 
      href={`/courses/${id}`}
      className="block bg-secondary-light rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-primary/10"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-darker to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-lg">
            {price.toLocaleString('vi-VN')}
          </span>
          <span className="bg-primary text-secondary px-6 py-2 rounded-full font-semibold hover:bg-primary-light transition-all duration-300">
            Chi tiết
          </span>
        </div>
      </div>
    </Link>
  )
}
