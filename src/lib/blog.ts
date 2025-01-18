import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface Post {
  slug: string
  title: string
  date: string
  category?: string
  coverImage: string
  excerpt: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export async function getAllPosts(): Promise<Post[]> {
  // Đảm bảo thư mục tồn tại
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const post = await getPostBySlug(slug)
      return post
    })
  )

  // Sắp xếp bài viết theo ngày, mới nhất lên đầu
  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    coverImage: data.coverImage,
    excerpt: data.excerpt,
    content: contentHtml,
  }
} 