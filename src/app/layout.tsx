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
import defaultMetadata from './metadata'
import { Metadata } from 'next'

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
  ...defaultMetadata,
  icons: {
    icon: 'https://i.ibb.co/YhSY2QK/logo.png',
    shortcut: 'https://i.ibb.co/YhSY2QK/logo.png',
    apple: 'https://i.ibb.co/YhSY2QK/logo.png',
  },
}

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
