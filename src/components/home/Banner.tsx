import Image from 'next/image'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

async function getInstructor() {
  const { data, error } = await supabase
    .from('Instructor')
    .select('*')
    .single()
  
  if (error) throw error
  return data
}

export default async function Banner() {
  const instructor = await getInstructor()

  return (
    <div className="relative bg-secondary text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-darker to-secondary-light opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-24 md:py-32 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary tracking-normal leading-[1.2] md:leading-[1.15]">
              Chắp cánh giọng hát của bạn cùng KienVocal
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Khám phá tiềm năng giọng hát của bạn với những khóa học chuyên nghiệp 
              từ giảng viên {instructor?.name}
            </p>
            <Link 
              href="/courses"
              className="inline-block bg-primary text-secondary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-light transition-colors duration-300 transform hover:scale-105"
            >
              Khám phá ngay
            </Link>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary opacity-20 blur-lg rounded-lg"></div>
              <Image
                src="https://i.ibb.co/8sB3D1B/img-t6-Bs-Gd3nm0i0-LYXai-D9z1.jpg"
                alt={instructor?.name || 'Giảng viên'}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
