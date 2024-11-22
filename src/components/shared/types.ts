export type Course = {
  id: string
  type: string
  title: string
  description: string
  price: number
  image: string
  curriculum: {
    title: string
    description: string
  }[]
  benefits: {
    title: string
    description: string
  }[]
  testimonials: {
    name: string
    content: string
    avatar: string
  }[]
}

export interface Testimonial {
  id: string
  name: string
  content: string
  avatar: string
  createdAt?: Date
  updatedAt?: Date
}

export interface Instructor {
  id: string
  name: string
  bio: string
  image: string
  achievements: string[]
  createdAt?: Date
  updatedAt?: Date
} 