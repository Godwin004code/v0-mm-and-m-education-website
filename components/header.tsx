"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Image src="/mmm-logo.jpg" alt="MM&M Education Logo" width={48} height={48} className="h-12 w-auto" />
            <span className="font-bold text-lg text-foreground hidden sm:inline">MM&M Education</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition">
              Services
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3">
            <button className="px-6 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition">
              Sign In
            </button>
            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition">
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#about" className="text-foreground hover:text-primary transition">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition">
              Services
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </a>
            <button className="w-full px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition">
              Book Consultation
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
