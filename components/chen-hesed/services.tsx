import { GraduationCap, Plane, FileText, Home, BookOpen, CheckCircle, Briefcase, Globe } from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "Academic Strategy",
    description: "Customized roadmaps for students aiming for elite global institutions.",
  },
  {
    icon: Briefcase,
    title: "Career Consultancy",
    description: "Expert advice on international career pathways and professional development.",
  },
  {
    icon: FileText,
    title: "Immigration Support",
    description: "Navigating complex visa and documentation requirements with precision.",
  },
  {
    icon: Globe,
    title: "Global Relocation",
    description: "Seamless support for settling into your new destination country.",
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    description: "Intensive coaching for IELTS, GRE, GMAT, and other essential certifications.",
  },
  {
    icon: CheckCircle,
    title: "Concierge Services",
    description: "End-to-end premium support for every aspect of your international transition.",
  },
]

export default function ConsultServices() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 scroll-animate">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive consulting solutions designed for the discerning global citizen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-card p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/20 scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-lg">{service.description}</p>
                <div className="mt-8 pt-8 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="text-primary font-bold flex items-center gap-2">
                    Learn More <span>→</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
