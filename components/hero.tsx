"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    image: "/hero-1.webp",
    title: "Jan 2026 Admission Now Open!",
    subtitle: "From Applications To Acceptance, MM&M Education Has You Covered, Start Your Journey Today!",
  },
  {
    image: "/hero-2.jpg",
    title: "Unlock Your Global Education Dreams",
    subtitle: "Join thousands of successful students who have transformed their futures with MM&M Education.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 8000)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)
  }

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative w-full h-screen md:h-[600px] flex items-center justify-center overflow-hidden">
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${s.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance animate-fade-in-up">
          {slide.title}
        </h1>
        <p
          className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed text-balance max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {slide.subtitle}
        </p>
        <button
          onClick={() => window.open("https://wa.me/234803726308", "_blank")}
          className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition shadow-lg animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Book Free Consultation
        </button>
      </div>

      {/* Previous button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Chat widget placeholder */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:shadow-xl transition">
          <span className="text-2xl">💬</span>
        </div>
      </div>
    </section>
  )
}
