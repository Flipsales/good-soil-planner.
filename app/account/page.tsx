import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AccountPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
            <p className="text-gray-600">Manage your orders and account settings</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                <div className="space-y-3">
                  <p><strong>Name:</strong> John Doe</p>
                  <p><strong>Email:</strong> john@example.com</p>
                  <p><strong>Member Since:</strong> January 2024</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <p className="font-medium">Good Soil Planner - Individual</p>
                    <p className="text-sm text-gray-600">Order #001 - $39.99</p>
                    <p className="text-sm text-green-600">Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
