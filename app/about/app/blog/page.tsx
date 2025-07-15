import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getBlogPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-playfair">Purposeful Living Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical insights and inspiration for aligning your Faith, Family, and Fortune
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{post.readTime} min read</span>
                    <span>{post.author.name}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
