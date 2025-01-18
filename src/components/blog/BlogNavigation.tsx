'use client'

import Link from 'next/link'

export default function BlogNavigation() {
  return (
    <div className="mt-12 flex justify-between items-center pt-8 border-t border-white/10">
      <Link 
        href="/blog"
        className="text-primary hover:text-primary-light transition-colors"
      >
        ← Quay lại Blog
      </Link>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-primary hover:text-primary-light transition-colors"
      >
        Lên đầu trang ↑
      </button>
    </div>
  )
} 