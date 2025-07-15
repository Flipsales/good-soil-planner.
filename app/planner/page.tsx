import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PlannerPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-playfair">
                The Good Soil Planner: Your 90-Day Journey to Purposeful Living
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                More than just a planner - it's a comprehensive system designed to align your daily actions with your
                deepest values across Faith, Family, and Fortune.
              </p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                Get Your Planner Now
              </button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Planner Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
