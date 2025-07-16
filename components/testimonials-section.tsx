import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother of 3, Ministry Leader",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The Good Soil Planner has completely transformed how I approach my daily routine. I finally feel like my faith, family time, and financial goals are all working together instead of competing for my attention.",
    },
    {
      name: "Michael Chen",
      role: "Business Owner, Father",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As an entrepreneur, I was always focused on growing my business but neglecting my spiritual life. This planner helped me find the balance I was missing and actually improved my business results too.",
    },
    {
      name: "Rebecca Martinez",
      role: "Teacher, Small Group Leader",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I've tried many planners before, but none addressed the whole person like this one does. The daily devotionals and family planning sections have been game-changers for our household.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-playfair">What Our Community Says</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of believers who have transformed their lives with intentional planning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-blue-200 mb-4" />

                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">90</div>
            <div className="text-gray-600">Day Journey</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  )
}
