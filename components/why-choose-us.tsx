import { Award, Users, Globe, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Decades of combined experience in international education consulting.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "Each student receives customized guidance based on their unique profile and aspirations.",
  },
  {
    icon: Globe,
    title: "Global Partnerships",
    description: "Strong relationships with universities and institutions across 50+ countries.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "95% admission success rate with placements at top-tier universities worldwide.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose MM&M Education?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We're committed to your success with reliability, expertise, and proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="text-center scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
