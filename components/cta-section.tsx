import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Truck, RefreshCw } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-playfair">
          Ready to Start Your 90-Day Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of believers who are already living with greater purpose and intention. Transform your daily
          routine into a meaningful journey of growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold">
            Get Your Good Soil Planner Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
          >
            Learn More First
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-blue-100">
            <Shield className="h-6 w-6" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-blue-100">
            <Truck className="h-6 w-6" />
            <span>Free Shipping Worldwide</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-blue-100">
            <RefreshCw className="h-6 w-6" />
            <span>Lifetime Customer Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
