'use client'

import Image from 'next/image'

type Props = {
  id: string
  name: string
  content: string
  avatar: string
}

export default function TestimonialList({ name, content, avatar }: Props) {
  const avatarSrc = (!avatar || avatar.includes('ibb.co')) ? '/images/testimonials/default-avatar.png' : avatar

  return (
    <div className="bg-secondary-light p-8 rounded-2xl border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20 mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-light to-primary rounded-full blur opacity-70"></div>
          <Image
            src={avatarSrc}
            alt={name}
            fill
            sizes="80px"
            className="rounded-full object-cover border-4 border-secondary relative"
          />
        </div>
        <p className="text-gray-300 mb-4 text-center italic leading-relaxed">&ldquo;{content}&rdquo;</p>
        <h3 className="text-primary font-semibold text-lg">{name}</h3>
      </div>
    </div>
  )
} 