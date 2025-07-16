import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, TrendingUp, BookOpen, Calendar, Target } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Heart,
      title: "Faith-Centered",
      description:
        "Daily devotionals and scripture reflections to strengthen your spiritual foundation and deepen your relationship with God.",
      color: "blue",
    },
    {
      icon: Users,
      title: "Family-Focused",
      description:
        "Intentional planning tools to prioritize quality time, create meaningful traditions, and build stronger family bonds.",
      color: "amber",
    },
    {
      icon: TrendingUp,
      title: "Fortune-Building",
      description:
        "Strategic goal-setting and financial stewardship principles to build lasting wealth while honoring biblical values.",
      color: "emerald",
    },
    {
      icon: BookOpen,
      title: "90-Day Journey",
      description:
        "Structured daily pages that guide you through a transformative 90-day experience of intentional living.",
      color: "purple",
    },
    {
      icon: Calendar,
      title: "Daily Planning",
      description: "Comprehensive daily layouts that help you align your schedule with your values and priorities.",
      color: "rose",
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Proven frameworks for setting, tracking, and achieving meaningful goals in all areas of life.",
      color: "indigo",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      amber: "bg-amber-100 text-amber-600",
      emerald: "bg-emerald-100 text-emerald-600",
      purple: "bg-purple-100 text-purple-600",
      rose: "bg-rose-100 text-rose-600",
      indigo: "bg-indigo-100 text-indigo-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Why Choose Good Soil Planner?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just a planner - it's your companion for intentional living and spiritual growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
