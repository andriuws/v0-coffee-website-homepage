import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide">Premium Coffee Experience</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance leading-tight">
                Archurrito
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover ethically sourced, single-origin coffee beans roasted to perfection. From smooth morning blends
              to bold espresso, we have something for every coffee lover.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
                Shop Now
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-base border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="/coffee-beans-artisan-roasted.jpg"
              alt="Premium coffee beans"
              className="w-full h-auto rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
