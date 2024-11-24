import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Montserrat } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
import { Toaster } from 'react-hot-toast'
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  title: "KienVocal - Khóa học thanh nhạc online chất lượng cao",
  description: "KienVocal - Khóa học thanh nhạc online với giảng viên Đinh Trung Kiên. Học hát chuyên nghiệp, phương pháp khoa học, có lộ trình rõ ràng từ cơ bản đến nâng cao.",
  keywords: "kienvocal, học hát online, khóa học thanh nhạc, Đinh Trung Kiên, dạy hát online, học thanh nhạc",
  verification: {
    google: 'google28c0039f61be903c.html',
  },
  openGraph: {
    title: 'KienVocal - Khóa học thanh nhạc online chất lượng cao',
    description: 'Khám phá tiềm năng giọng hát của bạn cùng giảng viên Đinh Trung Kiên qua các khóa học thanh nhạc online chất lượng cao',
    url: 'https://kienvocal.com',
    siteName: 'KienVocal',
    images: [
      {
        url: 'https://i.ibb.co/YhSY2QK/logo.png',
        width: 800,
        height: 600,
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
      <body className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <AuthProvider>
          <Header />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
          <Toaster position="top-center" />
          <SpeedInsights />
        </AuthProvider>
      </body>
    </html>
  );
}
