import ConsultHeader from "@/components/chen-hesed/header"
import ConsultHero from "@/components/chen-hesed/hero"
import ConsultAbout from "@/components/chen-hesed/about"
import ConsultServices from "@/components/chen-hesed/services"
import ConsultCTA from "@/components/chen-hesed/cta"
import ConsultFooter from "@/components/chen-hesed/footer"
import { ScrollObserver } from "@/components/scroll-observer"
import { Mail, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chen & Hesed Consult | Excellence in Global Consulting",
  description: "Bespoke international consulting services built on the foundations of grace and excellence.",
  icons: {
    icon: "/Gemini_Generated_Image_7alg537alg537alg.png",
  },
}

function ConsultContactBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-xs sm:text-sm font-semibold tracking-wide">
          <div className="hidden sm:block opacity-80 uppercase tracking-widest">
            Excellence & Grace in Consulting
          </div>
          <div className="flex gap-6 items-center w-full sm:w-auto justify-center">
            <a href="tel:+234803726308" className="flex items-center gap-2 hover:opacity-80 transition">
              <Phone size={14} />
              <span>+234 803 726 308</span>
            </a>
            <a href="mailto:hello@chenhesed.com" className="flex items-center gap-2 hover:opacity-80 transition">
              <Mail size={14} />
              <span>hello@chenhesed.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ChenHesedPage() {
  return (
    <main className="chen-hesed min-h-screen bg-background font-sans">
      <ScrollObserver />
      <ConsultContactBar />
      <ConsultHeader />
      <ConsultHero />
      <ConsultAbout />
      <ConsultServices />
      
      {/* Quick Testimonials placeholder to match layout */}
      <section id="testimonials" className="py-24 bg-card relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl font-bold mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="p-10 rounded-3xl bg-background border border-border shadow-xl scroll-animate">
              <p className="text-xl text-foreground/80 italic mb-8">
                "Chen & Hesed Consult transformed my application process. Their attention to detail and graceful support made the impossible feel achievable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">OO</div>
                <div>
                  <p className="font-bold">Oluwaseun O.</p>
                  <p className="text-sm text-foreground/60">London School of Economics</p>
                </div>
              </div>
            </div>
            <div className="p-10 rounded-3xl bg-background border border-border shadow-xl scroll-animate" style={{ animationDelay: "0.1s" }}>
              <p className="text-xl text-foreground/80 italic mb-8">
                "Professionalism at its peak. The team guided me through every hurdle of my visa application with kindness and expertise."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">CA</div>
                <div>
                  <p className="font-bold">Chinelo A.</p>
                  <p className="text-sm text-foreground/60">University of Toronto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultCTA />
      <ConsultFooter />
    </main>
  )
}
