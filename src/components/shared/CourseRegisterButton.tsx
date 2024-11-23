'use client'

import Link from 'next/link'

interface CourseRegisterButtonProps {
  courseType: string
}

export default function CourseRegisterButton({ courseType }: CourseRegisterButtonProps) {
  return (
    <Link
      href={`/checkout/basic`}
      className="block w-full bg-primary text-secondary text-center py-4 rounded-full font-bold hover:bg-primary-light transition-all duration-300"
    >
      Đăng ký ngay
    </Link>
  )
} 