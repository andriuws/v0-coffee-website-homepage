"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail("")
  }

  return (
    <section id="newsletter" className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4 text-balance">
          Stay Updated on New Roasts
        </h2>
        <p className="text-primary-foreground/90 text-lg mb-8">
          Subscribe to our newsletter for exclusive blends, brewing tips, and special offers.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 transition"
              required
            />
          </div>
          <Button type="submit" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-3">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
