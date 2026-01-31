"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [email, setEmail] = useState("")

  useEffect(() => {
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 15)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <section className="py-20 bg-banner text-banner-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Launching Soon
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Be among the first 500 users and enjoy zero brokerage forever. 
            Your dream home awaits!
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-12">
            {timeUnits.map((unit) => (
              <div key={unit.label} className="text-center">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-6 min-w-[70px] sm:min-w-[90px]">
                  <span className="text-3xl sm:text-5xl font-bold">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-white/70 mt-2 block">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8"
              >
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
