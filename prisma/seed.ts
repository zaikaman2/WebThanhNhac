import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Seed courses
  await prisma.course.createMany({
    data: [
      {
        type: 'basic',
        title: 'Khóa học thanh nhạc cơ bản',
        description: 'Khám phá những kiến thức cơ bản về thanh nhạc, kỹ thuật hát và phát triển giọng hát.',
        price: 2500000,
        image: '/images/course-1.jpg'
      },
      {
        type: 'intermediate',
        title: 'Khóa học nâng cao',
        description: 'Phát triển kỹ năng thanh nhạc chuyên nghiệp với các bài học chuyên sâu.',
        price: 3500000,
        image: '/images/course-2.jpg'
      },
      {
        type: 'advanced',
        title: 'Khóa học 1-1 online',
        description: 'Học trực tiếp với giảng viên Đinh Trung Kiên, tập trung vào phát triển cá nhân.',
        price: 5000000,
        image: '/images/course-3.jpg'
      }
    ]
  })

  // Seed testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Nguyễn Văn A',
        content: 'Khóa học rất chất lượng, giảng viên Kiên nhiệt tình và tâm huyết. Tôi đã cải thiện được rất nhiều về kỹ thuật thanh nhạc.',
        avatar: '/images/avatar-1.jpg'
      },
      {
        name: 'Trần Thị B',
        content: 'Môi trường học tập chuyên nghiệp, được học hỏi nhiều kinh nghiệm quý báu từ thầy Kiên.',
        avatar: '/images/avatar-2.jpg'
      },
      {
        name: 'Lê Văn C',
        content: 'Sau 3 tháng học tập, giọng hát của tôi đã tiến bộ rõ rệt. Cảm ơn thầy Kiên rất nhiều!',
        avatar: '/images/avatar-3.jpg'
      }
    ]
  })

  // Seed instructor
  await prisma.instructor.create({
    data: {
      name: 'Đinh Trung Kiên',
      bio: 'Giảng viên thanh nhạc với hơn 10 năm kinh nghiệm đào tạo',
      image: '/images/instructor.jpg',
      achievements: [
        'Giải nhất cuộc thi thanh nhạc quốc gia 2020',
        'Chứng chỉ đào tạo thanh nhạc quốc tế',
        'Huấn luyện viên The Voice Vietnam 2022'
      ]
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })