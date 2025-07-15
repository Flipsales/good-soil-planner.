export interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: { name: string }
  publishedAt: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Ways to Start Your Day with Purpose",
    excerpt: "Transform your morning routine with faith-based planning.",
    author: { name: "Sarah Johnson" },
    publishedAt: "2024-01-15T08:00:00Z",
    readTime: 5,
  }
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts
}
