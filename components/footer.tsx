import Link from "next/link"
import { Home, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer id="about" className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Vanik</span>
            </Link>
            <p className="text-background/70 max-w-sm leading-relaxed">
              Vanik is revolutionizing the rental market in India by connecting 
              tenants directly with homeowners. No brokers, no hidden fees.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-background/70 hover:text-background transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/70 hover:text-background transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/70 hover:text-background transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#how-it-works" className="text-background/70 hover:text-background transition-colors text-sm">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="#list-property" className="text-background/70 hover:text-background transition-colors text-sm">
                  List Property
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-background/70 hover:text-background transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-semibold mb-4">Coming to</h4>
            <ul className="space-y-2">
              {["Mumbai", "Delhi NCR", "Bangalore", "Pune", "Hyderabad", "Chennai"].map((city) => (
                <li key={city}>
                  <span className="text-background/70 text-sm">{city}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2026 Vanik. All rights reserved. Made with love in India.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
