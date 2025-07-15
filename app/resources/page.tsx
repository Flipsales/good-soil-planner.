import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Resources for Purposeful Living
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover practical tools, inspiring content, and community support to help you live with greater intention
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Downloads</h3>
              <p className="text-gray-600 mb-4">Get started with our free planning templates and guides.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Browse Downloads →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Video Library</h3>
              <p className="text-gray-600 mb-4">Watch tutorials and inspiration from our team and community.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Watch Videos →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600 mb-4">Connect with other believers on the same journey.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Join Community →</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
