import { Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-5 h-5" />
              <span className="font-serif font-bold">Brew Haven</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Ethically sourced, expertly roasted, and carefully crafted for coffee lovers everywhere.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  All Coffee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Single Origin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Blends
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Gear
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 Brew Haven. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition">
              Privacy
            </a>
            <a href="#" className="hover:text-primary-foreground transition">
              Terms
            </a>
            <a href="#" className="hover:text-primary-foreground transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
