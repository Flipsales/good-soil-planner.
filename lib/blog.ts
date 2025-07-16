export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  category: "Faith" | "Family" | "Fortune"
  tags: string[]
  featuredImage: string
  publishedAt: string
  readTime: number
  status: "draft" | "published"
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  color: string
  postCount: number
}

// Mock blog data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Ways to Start Your Day with Purpose",
    slug: "5-ways-start-day-with-purpose",
    excerpt:
      "Transform your morning routine with these faith-based planning strategies that set the tone for intentional living.",
    content: `# 5 Ways to Start Your Day with Purpose

Starting your day with intention can transform not just your morning, but your entire life. Here are five powerful ways to begin each day with purpose...

## 1. Begin with Gratitude

Before your feet hit the floor, take a moment to acknowledge three things you're grateful for. This simple practice shifts your mindset from scarcity to abundance.

## 2. Set Your Daily Intentions

Rather than diving into your to-do list, first establish your intentions. What kind of person do you want to be today? How do you want to show up for your family, your work, and your faith?

## 3. Connect with Scripture

Spend 10-15 minutes reading and reflecting on God's word. This grounds you in truth and provides wisdom for the day ahead.

## 4. Plan with Purpose

Use your Good Soil Planner to align your daily tasks with your bigger goals across Faith, Family, and Fortune. Every task should serve a greater purpose.

## 5. Prepare Your Heart

Take a few minutes to pray, meditate, or simply sit in silence. Prepare your heart for whatever the day may bring.

Remember, purposeful living isn't about perfection—it's about intention. Start small and build these habits gradually.`,
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Sarah is a mother of three and ministry leader who has been using the Good Soil Planner for over two years.",
    },
    category: "Faith",
    tags: ["morning routine", "purpose", "faith", "planning"],
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishedAt: "2024-01-15T08:00:00Z",
    readTime: 5,
    status: "published",
    seo: {
      metaTitle: "5 Ways to Start Your Day with Purpose - Good Soil Planner",
      metaDescription:
        "Transform your morning routine with these faith-based planning strategies that set the tone for intentional living.",
      keywords: ["morning routine", "purposeful living", "faith-based planning", "intentional living"],
    },
  },
  {
    id: "2",
    title: "Building Stronger Family Traditions",
    slug: "building-stronger-family-traditions",
    excerpt: "Discover how to create meaningful family traditions that strengthen bonds and create lasting memories.",
    content: `# Building Stronger Family Traditions

Family traditions are the threads that weave the fabric of our family identity. They create belonging, build memories, and pass down values from generation to generation...`,
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Michael is a business owner and father who believes strong families are built through intentional traditions.",
    },
    category: "Family",
    tags: ["family", "traditions", "relationships", "parenting"],
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishedAt: "2024-01-12T10:00:00Z",
    readTime: 7,
    status: "published",
    seo: {
      metaTitle: "Building Stronger Family Traditions - Good Soil Planner",
      metaDescription:
        "Discover how to create meaningful family traditions that strengthen bonds and create lasting memories.",
      keywords: ["family traditions", "family bonding", "parenting tips", "family activities"],
    },
  },
  {
    id: "3",
    title: "Biblical Principles for Financial Planning",
    slug: "biblical-principles-financial-planning",
    excerpt: "Learn how to apply scriptural wisdom to your financial goals and stewardship practices.",
    content: `# Biblical Principles for Financial Planning

Money management isn't just about numbers—it's about stewardship, wisdom, and aligning our financial decisions with God's principles...`,
    author: {
      name: "David Martinez",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "David is a financial advisor and biblical stewardship teacher with over 15 years of experience.",
    },
    category: "Fortune",
    tags: ["finances", "stewardship", "biblical principles", "money management"],
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishedAt: "2024-01-10T09:00:00Z",
    readTime: 6,
    status: "published",
    seo: {
      metaTitle: "Biblical Principles for Financial Planning - Good Soil Planner",
      metaDescription: "Learn how to apply scriptural wisdom to your financial goals and stewardship practices.",
      keywords: ["biblical finance", "christian money management", "stewardship", "financial planning"],
    },
  },
]

export const blogCategories: BlogCategory[] = [
  {
    id: "faith",
    name: "Faith",
    slug: "faith",
    description: "Spiritual growth, devotional insights, and faith-based living",
    color: "blue",
    postCount: 12,
  },
  {
    id: "family",
    name: "Family",
    slug: "family",
    description: "Relationships, parenting, and building stronger families",
    color: "amber",
    postCount: 8,
  },
  {
    id: "fortune",
    name: "Fortune",
    slug: "fortune",
    description: "Financial stewardship, career growth, and biblical money management",
    color: "emerald",
    postCount: 6,
  },
]

export function getBlogPosts(category?: string, limit?: number): BlogPost[] {
  let posts = blogPosts.filter((post) => post.status === "published")

  if (category) {
    posts = posts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
  }

  if (limit) {
    posts = posts.slice(0, limit)
  }

  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.status === "published")
}

export function searchBlogPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return blogPosts.filter(
    (post) =>
      post.status === "published" &&
      (post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))),
  )
}
