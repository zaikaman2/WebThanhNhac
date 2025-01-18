import { Metadata } from 'next'
import BlogList from '@/components/blog/BlogList'
import { getAllPosts } from '@/lib/blog'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Blog Thanh Nhạc | Kiến Thức Học Hát, Luyện Giọng - KienVocal',
  description: 'Tổng hợp kiến thức về thanh nhạc, kỹ thuật luyện giọng, phương pháp học hát hiệu quả từ giảng viên Đinh Trung Kiên. Cập nhật thường xuyên các bài viết chất lượng về học hát.',
  keywords: 'blog thanh nhạc, kiến thức thanh nhạc, học hát cơ bản, kỹ thuật luyện giọng, phương pháp học hát, đinh trung kiên, kienvocal',
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  const categories = Array.from(new Set(posts.map(post => post.category).filter(Boolean)))

  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary to-background pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog Thanh Nhạc
          </h1>
          <p className="text-lg text-gray-300">
            Khám phá kho tàng kiến thức về thanh nhạc, chia sẻ kinh nghiệm và bí quyết để phát triển giọng hát của bạn
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Chủ đề</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <BlogList posts={posts} />
      </div>
    </main>
  )
} 