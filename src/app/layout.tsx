import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Montserrat } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
import { Toaster } from 'react-hot-toast'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
  preload: true,
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({ 
  subsets: ['vietnamese'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "KienVocal - Học Thanh Nhạc Online | Khóa Học Thanh Nhạc Chất Lượng Cao",
  description: "Khóa học thanh nhạc online uy tín với giảng viên Đinh Trung Kiên. Phương pháp học hát chuyên nghiệp, khoa học từ cơ bản đến nâng cao. Học thanh nhạc online mọi lúc mọi nơi với giáo trình chuẩn và hỗ trợ 1-1.",
  keywords: "học thanh nhạc, khóa học thanh nhạc, học thanh nhạc online, khóa học thanh nhạc online, kienvocal, đinh trung kiên, thanh nhạc, cách hát hay, dạy hát, học hát online, luyện giọng hát, kỹ thuật thanh nhạc, học hát cơ bản, học thanh nhạc cơ bản, học hát chuyên nghiệp",
  verification: {
    google: 'google28c0039f61be903c.html',
  },
  openGraph: {
    title: 'KienVocal - Học Thanh Nhạc Online | Khóa Học Thanh Nhạc Chất Lượng Cao',
    description: 'Khám phá và phát triển giọng hát của bạn cùng giảng viên Đinh Trung Kiên qua các khóa học thanh nhạc online chất lượng cao. Phương pháp học hát chuyên nghiệp, khoa học từ cơ bản đến nâng cao.',
    url: 'https://kienvocal.com',
    siteName: 'KienVocal - Học Thanh Nhạc Online',
    images: [
      {
        url: 'https://i.ibb.co/YhSY2QK/logo.png',
        width: 800,
        height: 600,
        alt: 'KienVocal - Khóa học thanh nhạc online cùng Đinh Trung Kiên'
      }
    ],
    locale: 'vi_VN',
    type: 'website',
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
  icons: {
    icon: 'https://i.ibb.co/YhSY2QK/logo.png',
    shortcut: 'https://i.ibb.co/YhSY2QK/logo.png',
    apple: 'https://i.ibb.co/YhSY2QK/logo.png',
  },
  metadataBase: new URL('https://kienvocal.com'),
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KienVocal - Khóa học thanh nhạc online chất lượng cao',
    description: 'Học hát chuyên nghiệp với giảng viên Đinh Trung Kiên',
    images: ['https://i.ibb.co/YhSY2QK/logo.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <Script 
          src="https://player.vimeo.com/api/player.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <AuthProvider>
          <Header />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
          <Toaster position="top-center" />
          <SpeedInsights />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
