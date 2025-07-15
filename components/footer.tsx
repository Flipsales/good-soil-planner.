import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="text-xl font-bold mb-4">
            <span className="text-amber-400">GOOD SOIL</span>
            <span className="text-blue-400 italic ml-1">planner</span>
          </div>
          <p className="text-gray-400 mb-6">
            Aligning faith, family, and fortune through intentional daily habits.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            <Link href="/shop" className="text-gray-400 hover:text-white">Shop</Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">© 2024 Good Soil Planner. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
