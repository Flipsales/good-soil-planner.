import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, CheckCircle, Play, Star, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200">
              ✨ Transform Your Spiritual Journey
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Plant Good Habits,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600">
                {" "}
                Grow Lasting Fruit
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              A 90-day journey equipping everyday believers with the tools to live a life of purpose on purpose
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/get-started">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg"
                >
                  Start My Journey Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/watch-intro">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Introduction
                </Button>
              </Link>
            </div>

            {/* Video Section */}
            <Link href="/watch-intro">
              <div className="relative max-w-4xl mx-auto cursor-pointer group">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-500 via-pink-500 to-purple-600">
                  <Image
                    src="/hero-video-thumbnail.png"
                    alt="Good Soil Discipleship Planner Introduction Video"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button size="lg" className="bg-white/90 hover:bg-white text-slate-900 rounded-full p-6">
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  Watch First! 👆
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Immediate Post-Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/get-started">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-4 text-xl font-semibold mb-12"
              >
                Start My Journey Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tool for Discipleship Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-12">
                <div className="text-center">
                  <div className="bg-green-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.66 13.66 12 12 12S9 10.66 9 12V7.5L3 7V9C3 11.76 5.24 14 8 14V16H7V21H9V16H15V21H17V16H16V14C18.76 14 21 11.76 21 9Z" />
                    </svg>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    A Tool for Discipleship.
                    <br />
                    Growth That Lasts.
                  </h2>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    A 90-day discipleship planner designed to help you cultivate spiritual growth, strengthen
                    relationships, and live intentionally.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                    <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <Calendar className="h-4 w-4 text-green-600" />
                    </div>
                    90-Day Structured Journey
                  </h3>
                  <p className="text-slate-600 ml-11">
                    Transform your spiritual life through daily practices designed to build lasting habits and deepen
                    your relationship with God.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                    </div>
                    Biblical Foundation
                  </h3>
                  <p className="text-slate-600 ml-11">
                    Every lesson is rooted in Scripture, helping you develop a deeper understanding of God's Word and
                    its practical application.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                    <div className="bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-4 w-4 text-amber-600" />
                    </div>
                    Community & Accountability
                  </h3>
                  <p className="text-slate-600 ml-11">
                    Connect with fellow believers and strengthen relationships through guided exercises and meaningful
                    discussions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                    <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                    </div>
                    Practical Application
                  </h3>
                  <p className="text-slate-600 ml-11">
                    Move beyond theory with actionable exercises that help you live out your faith in everyday
                    situations.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Link href="/get-started">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3"
                  >
                    Get Your Planner Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need for Spiritual Growth
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              The Good Soil Planner provides a complete framework for developing the spiritual habits that lead to
              lasting transformation and fruitful living.
            </p>
            <Link href="/features">
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
                View All Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">90-Day Journey</h3>
                <p className="text-slate-600">
                  Structured daily practices and reflections designed to build lasting spiritual habits.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Biblical Foundation</h3>
                <p className="text-slate-600">
                  Every lesson rooted in Scripture for deeper understanding and application.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Community Focus</h3>
                <p className="text-slate-600">Build meaningful connections through guided exercises and discussions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Stories of Transformation</h2>
            <p className="text-xl text-slate-600 mb-8">
              See how the Good Soil Planner has impacted lives across the globe
            </p>
            <Link href="/testimonials">
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
                Read All Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "This planner completely transformed my daily walk with God. The 90-day structure gave me the
                  accountability I needed."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Maria S.</p>
                    <p className="text-sm text-slate-600">Small Group Leader</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "The biblical foundation and practical exercises helped me develop habits that have lasted well beyond
                  the 90 days."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">J</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">James R.</p>
                    <p className="text-sm text-slate-600">Pastor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "Our entire family went through this together. It strengthened our relationships and our faith in
                  incredible ways."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-600 font-semibold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Sarah L.</p>
                    <p className="text-sm text-slate-600">Mother of 3</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join thousands of believers who have transformed their spiritual lives through the Good Soil Discipleship
            Planner.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-4xl font-bold mb-2">90 Days</div>
            <div className="text-green-100 mb-4">Complete Transformation Journey</div>
            <ul className="text-left space-y-2 text-green-100">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                Daily guided reflections
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                Biblical study materials
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                Community support access
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                Lifetime access to resources
              </li>
            </ul>
          </div>

          <Link href="/get-started">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-12 py-4 text-lg font-semibold">
              Start My Journey Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <p className="text-sm text-green-100 mt-4">
            30-day money-back guarantee • Instant access •
            <Link href="/pricing" className="underline hover:no-underline ml-1">
              View pricing details
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

  )
}
