import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CountdownSection } from "@/components/countdown-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnnouncementBanner />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CountdownSection />
      <Footer />
    </main>
  )
}
