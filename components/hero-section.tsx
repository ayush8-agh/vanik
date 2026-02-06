"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, MapPin } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            <span className="text-foreground">Rent Your Dream Home,</span>
            <br />
            <span className="text-primary">Without the Middleman.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Vanik connects you directly with homeowners. No brokers, no hidden fees, 
            just transparent rentals across India.
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              Zero Brokerage
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              Verified Listings
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              Direct Owner Contact
            </div>
          </div>

          {/* Email Signup */}
          <div className="mt-10">
            <p className="text-sm font-medium text-foreground mb-3">
              Be the first to know when we launch
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-card border-border"
              />
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6"
              >
                Notify Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Join 2,000+ others waiting for launch. No spam, we promise.
            </p>
          </div>

          {/* Location Tags */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Launching soon in</p>
            <div className="flex flex-wrap gap-2">
              {["Punjab", "Delhi NCR", "Uttar Pradesh"].map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  <MapPin className="h-3 w-3" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
