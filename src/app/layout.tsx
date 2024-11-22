import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Montserrat } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
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
  title: "KienVocal - Khóa học thanh nhạc online",
  description: "Khám phá tiềm năng giọng hát của bạn cùng giảng viên Đinh Trung Kiên",
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
        </AuthProvider>
      </body>
    </html>
  );
}
