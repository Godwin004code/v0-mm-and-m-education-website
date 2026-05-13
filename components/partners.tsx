"use client"

import { useEffect, useState } from "react"

const partners = [
  { name: "University of Hertfordshire", logo: "/partners/university-of-hertfordshire.jpg" },
  { name: "Aston University", logo: "/partners/aston-university.jpg" },
  { name: "University of Hull", logo: "/partners/university-of-hull.jpg" },
  { name: "London South Bank University", logo: "/partners/london-south-bank-university.jpg" },
  { name: "University of Loughborough", logo: "/partners/university-of-loughborough.jpg" },
  { name: "University of Reading", logo: "/partners/university-of-reading.jpg" },
  { name: "University of Southampton", logo: "/partners/university-of-southampton.jpg" },
  { name: "University of Sunderland", logo: "/partners/university-of-sunderland.jpg" },
  { name: "University of Central Lancashire", logo: "/partners/university-of-central-lancashire.jpg" },
  { name: "Berlin School of Business and Innovation", logo: "/partners/berlin-school-of-business.jpg" },
  { name: "Canterbury Christ Church University", logo: "/partners/canterbury-christ-church.jpg" },
  { name: "George Brown College", logo: "/partners/george-brown-college.jpg" },
]

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("partners-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="partners-section" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-20 scroll-animate ${isVisible ? "animate-in" : ""}`}>
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#943634] font-poppins tracking-widest uppercase">
              Our Network
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-[#28404b]">
            Partner <span className="text-[#943634]">Universities</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-poppins leading-relaxed">
            We collaborate with leading educational institutions worldwide to provide our students with exceptional
            opportunities and pathways to success across the globe.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`scroll-animate group flex flex-col ${isVisible ? "animate-in" : ""}`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Card Container - Logo and overlay for desktop */}
              <div className="relative h-64 md:h-72 bg-white md:border-2 md:border-slate-200 rounded-2xl overflow-hidden flex flex-col items-center justify-center hover:border-[#943634]/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 md:hover:shadow-2xl md:hover:-translate-y-2">
                {/* Logo - Base layer */}
                <div className="absolute inset-0 h-full w-full flex items-center justify-center px-6 z-10">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105 md:group-hover:scale-105"
                  />
                </div>

                <div className="hidden md:flex absolute inset-0 bg-gradient-to-br from-[#943634]/40 via-[#7a2a28]/40 to-[#28404b]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col items-center justify-center rounded-2xl z-20 backdrop-blur-sm">
                  <h3 className="text-center font-poppins font-bold text-lg md:text-xl text-white px-4 leading-snug drop-shadow-lg">
                    {partner.name}
                  </h3>
                  <div className="mt-4 h-1 w-12 bg-white rounded-full" />
                </div>
              </div>

              <div className="md:hidden mt-4 text-center">
                <h3 className="text-center font-poppins font-bold text-base text-[#28404b]">{partner.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 md:mt-20 scroll-animate ${isVisible ? "animate-in" : ""}`}>
          <p className="text-lg text-slate-600 font-poppins mb-8">
            Ready to start your journey with one of our partner institutions?
          </p>
          <a
            href="https://wa.me/234803726308"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#943634] to-[#7a2a28] text-white rounded-lg font-poppins font-semibold hover:shadow-lg hover:shadow-[#943634]/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get Started Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
