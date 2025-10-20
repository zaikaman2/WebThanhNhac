import { Metadata } from 'next'

const defaultMetadata: Metadata = {
  metadataBase: new URL('https://kienvocal.site'),
  title: {
    default: 'KienVocal - Học Thanh Nhạc Online Cùng Chuyên Gia',
    template: '%s - KienVocal'
  },
  description: 'Khóa học thanh nhạc online chất lượng cao với giảng viên Đinh Trung Kiên - 30 năm kinh nghiệm. Học hát từ cơ bản đến nâng cao, phù hợp mọi trình độ.',
  keywords: [
    'học thanh nhạc online',
    'học hát online',
    'khóa học thanh nhạc',
    'luyện giọng hát',
    'kỹ thuật thanh nhạc',
    'học hát cơ bản',
    'học hát nâng cao',
    'Đinh Trung Kiên',
    'KienVocal'
  ],
  authors: [
    {
      name: 'Đinh Trung Kiên',
      url: 'https://kienvocal.site/about',
    }
  ],
  creator: 'Đinh Trung Kiên',
  publisher: 'KienVocal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://kienvocal.site',
    siteName: 'KienVocal',
    title: 'KienVocal - Học Thanh Nhạc Online Cùng Chuyên Gia',
    description: 'Khóa học thanh nhạc online chất lượng cao với giảng viên Đinh Trung Kiên - 30 năm kinh nghiệm. Học hát từ cơ bản đến nâng cao, phù hợp mọi trình độ.',
    images: [
      {
        url: 'https://i.ibb.co/YhSY2QK/logo.png',
        width: 800,
        height: 600,
        alt: 'KienVocal - Học Thanh Nhạc Online',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KienVocal - Học Thanh Nhạc Online Cùng Chuyên Gia',
    description: 'Khóa học thanh nhạc online chất lượng cao với giảng viên Đinh Trung Kiên - 30 năm kinh nghiệm. Học hát từ cơ bản đến nâng cao, phù hợp mọi trình độ.',
    images: ['https://i.ibb.co/YhSY2QK/logo.png'],
    creator: '@kienvocal',
    site: '@kienvocal',
  },
  alternates: {
    canonical: 'https://kienvocal.site',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google28c0039f61be903c.html',
  },
  category: 'education'
}

export default defaultMetadata 