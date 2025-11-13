"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Starter Blend",
    price: "$12.99",
    description: "Smooth and approachable. Perfect for daily drinking.",
    image: "/light-roast-coffee.jpg",
    tag: "Popular",
    color: "bg-yellow-50 dark:bg-yellow-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
  },
  {
    id: 2,
    name: "Signature Reserve",
    price: "$18.99",
    description: "Our most loved blend with complex flavor notes.",
    image: "/medium-roast-coffee.jpg",
    tag: "Best Seller",
    color: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    featured: true,
  },
  {
    id: 3,
    name: "Single Origin Ethiopia",
    price: "$16.99",
    description: "Bright acidity with fruity and floral notes.",
    image: "/single-origin-ethiopian-coffee.jpg",
    tag: "Limited",
    color: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800",
  },
  {
    id: 4,
    name: "Dark Espresso",
    price: "$14.99",
    description: "Bold, intense, and full-bodied. For true coffee enthusiasts.",
    image: "/dark-roast-espresso-coffee.jpg",
    tag: "Bold",
    color: "bg-amber-900/10 dark:bg-amber-950/30",
    borderColor: "border-amber-700 dark:border-amber-900",
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Our Selection</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
            Coffees for Every Taste
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our curated collection of premium coffee beans at different price points.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative rounded-lg border overflow-hidden transition-all hover:shadow-lg ${
                product.featured ? "lg:col-span-1 md:col-span-2 md:row-span-2" : ""
              } ${product.borderColor} ${product.featured ? "md:row-span-2" : ""}`}
            >
              {/* Product Card */}
              <div className={`h-full flex flex-col ${product.color} p-6 transition-colors`}>
                {/* Tag */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                    {product.tag}
                  </span>
                  {product.featured && <span className="text-xl">⭐</span>}
                </div>

                {/* Image */}
                <div className="mb-4 flex-1 flex items-center justify-center overflow-hidden rounded bg-background/50">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-end justify-between gap-3">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
