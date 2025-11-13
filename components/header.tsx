"use client"

import { Coffee, ShoppingCart, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-primary" />
            <span className="text-xl font-serif font-bold text-foreground">Andriuws Cafeteria</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-foreground hover:text-primary transition">
              Our Coffee
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition">
              Why Us
            </a>
            <a href="#newsletter" className="text-foreground hover:text-primary transition">
              Contact
            </a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-foreground hover:text-primary transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
            </button>
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <a href="#products" className="block py-2 text-foreground hover:text-primary">
              Our Coffee
            </a>
            <a href="#features" className="block py-2 text-foreground hover:text-primary">
              Why Us
            </a>
            <a href="#newsletter" className="block py-2 text-foreground hover:text-primary">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
