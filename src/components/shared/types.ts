export interface Course {
  id: string
  type: 'basic' | 'intermediate' | 'advanced'
  title: string
  description: string
  price: number
  image: string
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