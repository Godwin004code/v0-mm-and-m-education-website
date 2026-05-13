import ContactBar from "@/components/contact-bar"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { ScrollObserver } from "@/components/scroll-observer"
import Partners from "@/components/partners"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollObserver />
      <ContactBar />
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </main>
  )
}
