import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Good Soil Planner - Individual",
      price: 39.99,
      originalPrice: 49.99,
      description: "The complete 90-day planning system for individual transformation",
      features: [
        "90 days of guided planning pages",
        "Faith, Family & Fortune sections",
        "Daily devotional prompts",
        "Goal tracking worksheets",
        "Premium hardcover binding",
      ],
    },
    {
      id: 2,
      name: "Good Soil Planner - Couple's Edition",
      price: 69.99,
      originalPrice: 89.99,
      description: "Two planners designed for couples to grow together in purpose",
      features: [
        "2 individual planners included",
        "Couple's goal-setting pages",
        "Shared vision worksheets",
        "Date night planning section",
        "Marriage devotional prompts",
      ],
    },
    {
      id: 3,
      name: "Good Soil Planner - Family Pack",
      price: 119.99,
      originalPrice: 159.99,
      description: "Complete family planning system with age-appropriate versions",
      features: [
        "2 adult planners included",
        "2 teen/youth planners",
        "Family vision board kit",
        "Chore & responsibility charts",
        "Family devotional guide",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Choose Your Planning Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Select the perfect Good Soil Planner package for your needs and start your 90-day transformation today
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="border-2 hover:border-blue-200 transition-colors relative overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-2">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
