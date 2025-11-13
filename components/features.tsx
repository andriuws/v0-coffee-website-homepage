import { Leaf, Zap, Award, Globe } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Ethically Sourced",
    description: "We partner directly with coffee farmers to ensure fair trade and sustainable practices.",
  },
  {
    icon: Zap,
    title: "Freshly Roasted",
    description: "All coffee is roasted in-house within 48 hours of shipment for maximum freshness.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Our roasts have won over 20 international coffee competitions and accolades.",
  },
  {
    icon: Globe,
    title: "Global Origins",
    description: "Single-origin beans from the finest coffee regions across Africa, South America, and Asia.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
            Why Choose Brew Haven?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to quality, sustainability, and an exceptional coffee experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
