import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KienVocal - Học Thanh Nhạc Online',
    short_name: 'KienVocal',
    description: 'Khóa học thanh nhạc online chất lượng cao với giảng viên Đinh Trung Kiên',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: 'https://i.ibb.co/YhSY2QK/logo.png',
        sizes: '800x600',
        type: 'image/png',
      }
    ],
    orientation: 'portrait',
    categories: ['education', 'music'],
    prefer_related_applications: false,
    lang: 'vi',
    dir: 'ltr',
  }
} 