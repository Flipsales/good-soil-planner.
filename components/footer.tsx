import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🌱</span>
              </div>
              <div className="text-xl font-bold">
                <span className="text-amber-400">GOOD SOIL</span>
                <span className="text-blue-400 italic ml-1">planner</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Aligning faith, family, and fortune through intentional daily habits and purposeful living.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/planner" className="text-gray-400 hover:text-white transition-colors">
                  The Planner
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop
