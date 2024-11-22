import Image from 'next/image'
import { supabase } from '@/lib/supabase'

type Instructor = {
  name: string
  bio: string
  image: string
  achievements: string[]
}

async function getInstructor(): Promise<Instructor | null> {
  const { data, error } = await supabase
    .from('Instructor')
    .select('*')
    .single()
  
  if (error) throw error
  return data
}

export default async function AboutPage() {
  const instructor = await getInstructor()

  if (!instructor) return null

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-darker to-secondary-light opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary opacity-20 blur-lg rounded-lg"></div>
                <Image
                  src="https://i.ibb.co/3c9RJm2/1732274222865.jpg"
                  alt={instructor.name}
                  width={600}
                  height={800}
                  className="rounded-lg shadow-2xl relative object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">
                {instructor.name}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                {instructor.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Thành tựu nổi bật
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructor.achievements.map((achievement: string, index: number) => (
              <div 
                key={index}
                className="bg-secondary-light p-8 rounded-xl border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-primary text-4xl font-bold mb-4">0{index + 1}</div>
                <p className="text-gray-300 text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Phương pháp giảng dạy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-secondary-light p-8 rounded-xl border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-4">Khoa học và Thực tiễn</h3>
              <p className="text-gray-300 leading-relaxed">
                Áp dụng phương pháp giảng dạy dựa trên nền tảng khoa học về âm nhạc, 
                kết hợp với kinh nghiệm thực tiễn để mang lại hiệu quả tối ưu cho học viên.
              </p>
            </div>
            <div className="bg-secondary-light p-8 rounded-xl border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-4">Cá nhân hóa</h3>
              <p className="text-gray-300 leading-relaxed">
                Mỗi học viên sẽ được đánh giá và có lộ trình học tập riêng, 
                phù hợp với khả năng và mục tiêu cá nhân.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
