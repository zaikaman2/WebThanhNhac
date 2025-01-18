import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/blog'

interface BlogListProps {
  posts: Post[]
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article 
          key={post.slug} 
          className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="relative h-48">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
              {post.category && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                  {post.category}
                </span>
              )}
            </div>
            <div className="p-6">
              <time className="text-sm text-gray-400 mb-2 block">
                {post.date}
              </time>
              <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2 hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-300 line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <span className="text-primary font-medium hover:text-primary-light transition-colors">
                Đọc tiếp →
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
} 