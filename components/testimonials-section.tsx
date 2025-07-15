export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of believers who have transformed their lives with intentional planning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-6 italic">
              "The Good Soil Planner has completely transformed how I approach my daily routine. 
              I finally feel like my faith, family time, and financial goals are all working together."
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
              <p className="text-sm text-gray-600">Mother of 3, Ministry Leader</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-6 italic">
              "As an entrepreneur, I was always focused on growing my business but neglecting my spiritual life. 
              This planner helped me find the balance I was missing."
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Michael Chen</h4>
              <p className="text-sm text-gray-600">Business Owner, Father</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-6 italic">
              "I've tried many planners before, but none addressed the whole person like this one does. 
              The daily devotionals have been game-changers for our household."
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Rebecca Martinez</h4>
              <p className="text-sm text-gray-600">Teacher, Small Group Leader</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
