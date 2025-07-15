export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Good Soil Planner?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          More than just a planner - it's your companion for intentional living and spiritual growth
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🙏</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Faith-Centered</h3>
            <p className="text-gray-600">Daily devotionals and scripture reflections to strengthen your spiritual foundation.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Family-Focused</h3>
            <p className="text-gray-600">Tools to prioritize quality time and build stronger family bonds.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fortune-Building</h3>
            <p className="text-gray-600">Strategic goal-setting and financial stewardship principles.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
