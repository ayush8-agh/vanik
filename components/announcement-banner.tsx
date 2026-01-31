"use client"

import { useState, useEffect } from "react"
import { Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AnnouncementBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

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

  return (
    <div className="bg-banner text-banner-foreground py-2.5 px-4">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span className="font-semibold">
            Big Launch in {timeLeft.days} Days!
          </span>
        </div>
        <span className="hidden sm:inline text-accent">•</span>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-emerald-400" />
          <span className="text-white/90">
            Early access for the first 500 direct rentals. No brokerage, forever.
          </span>
        </div>
        <Button 
          size="sm" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium ml-2"
        >
          Get Notified
        </Button>
      </div>
    </div>
  )
}
