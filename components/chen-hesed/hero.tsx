"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    image: "/hero-1.webp",
    title: "Expert Consulting for Your Global Future",
    subtitle: "Chen & Hesed Consult provides bespoke guidance for students and professionals seeking international opportunities.",
  },
  {
    image: "/hero-2.jpg",
    title: "Excellence in Every Step",
    subtitle: "From strategy to execution, we ensure your journey is seamless, successful, and tailored to your unique goals.",
  },
]

export default function ConsultHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)
  }

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
          } transition-transform duration-[10000ms] ease-out`}
          style={{
            backgroundImage: `url(${s.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-bold tracking-wider uppercase mb-6 animate-fade-in-up">
            World-Class Consulting
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {slide.title}
          </h1>
          <p
            className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {slide.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => window.open("https://wa.me/234803726308", "_blank")}
              className="px-10 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold transition-all shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              Start Your Journey
            </button>
            <button className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-full font-bold transition-all border border-white/30">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4">
        <button
          onClick={prevSlide}
          className="bg-white/10 hover:bg-primary hover:text-primary-foreground text-white p-4 rounded-full transition-all border border-white/20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/10 hover:bg-primary hover:text-primary-foreground text-white p-4 rounded-full transition-all border border-white/20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-12 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === currentSlide ? "bg-primary w-12" : "bg-white/30 w-6 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
