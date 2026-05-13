import { GraduationCap, Plane, FileText, Home, BookOpen, CheckCircle } from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Pathways",
    description:
      "Explore curated pathways to top universities worldwide tailored to your academic profile and career goals.",
  },
  {
    icon: CheckCircle,
    title: "Secure Foreign Admissions",
    description:
      "Our expert team guides you through the entire application process to maximize your chances of acceptance.",
  },
  {
    icon: FileText,
    title: "Stress-Free Visa Application",
    description:
      "Navigate visa requirements with confidence. We handle documentation and preparation for a smooth process.",
  },
  {
    icon: Home,
    title: "Student Accommodations",
    description: "Find safe, comfortable, and affordable housing options near your chosen university.",
  },
  {
    icon: BookOpen,
    title: "Pre-Departure Briefing",
    description: "Get comprehensive orientation about your destination country, culture, and university life.",
  },
  {
    icon: Plane,
    title: "Complete Support",
    description:
      "From visa approval to your first day on campus, we provide continuous support throughout your journey.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions designed to make your study abroad journey seamless and successful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition border border-border scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
