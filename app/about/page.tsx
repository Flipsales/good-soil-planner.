import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-playfair">About Good Soil Planner</h1>
          <p className="text-xl text-gray-600 mb-8">
            Our mission is to help believers live with greater purpose and intention.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Good Soil Planner was born from a simple belief: that when we align our daily actions with our deepest values, 
              extraordinary transformation happens. We created this planning system to help believers integrate their faith 
              into every aspect of their lives.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To equip everyday believers with practical tools that help them live a life of purpose on purpose, 
              aligning their Faith, Family, and Fortune in a way that honors God and builds lasting impact.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
