import { Home, ShieldCheck, IndianRupee, Users, Clock, MessageCircle } from "lucide-react"

const features = [
  {
    icon: IndianRupee,
    title: "Zero Brokerage",
    description: "Say goodbye to hefty broker fees. Connect directly with property owners and save lakhs.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description: "Every listing is verified by our team to ensure authenticity and accuracy.",
  },
  {
    icon: Users,
    title: "Direct Owner Contact",
    description: "Chat directly with property owners. No middlemen, no communication gaps.",
  },
  {
    icon: Clock,
    title: "Quick Listings",
    description: "List your property in under 5 minutes. Reach thousands of potential tenants.",
  },
  {
    icon: Home,
    title: "Pan-India Coverage",
    description: "Find rentals across major Indian cities - Mumbai, Delhi, Bangalore, and more.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Our dedicated support team is always ready to help you find your perfect home.",
  },
]

export function FeaturesSection() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose <span className="text-primary">Vanik</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We{"'"}re building a better way to rent homes in India. Here{"'"}s what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
