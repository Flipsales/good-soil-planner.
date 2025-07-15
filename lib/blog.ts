export interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: {
    name: string
  }
  publishedAt: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Ways to Start Your Day with Purpose",
    excerpt: "Transform your morning routine with these faith-based planning strategies.",
    author: { name: "Sarah Johnson" },
    publishedAt: "2024-01-15T08:00:00Z",
    readTime: 5,
  },
  {
    id: "2",
    title: "Building Stronger Family Traditions",
    excerpt: "Discover how to create meaningful family traditions that strengthen bonds.",
    author: { name: "Michael Chen" },
    publishedAt: "2024-01-12T10:00:00Z",
    readTime: 7,
  },
  {
    id: "3",
    title: "Biblical Principles for Financial Planning",
    excerpt: "Learn how to apply scriptural wisdom to your financial goals.",
    author: { name: "David Martinez" },
    publishedAt: "2024-01-10T09:00:00Z",
    readTime: 6,
  },
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts
}
