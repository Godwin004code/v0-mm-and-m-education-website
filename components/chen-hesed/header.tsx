"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ConsultHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Image 
              src="/Gemini_Generated_Image_7alg537alg537alg.png" 
              alt="Chen & Hesed Consult Logo" 
              width={60} 
              height={60} 
              className="h-14 w-auto rounded-full" 
            />
            <span className="font-bold text-xl tracking-tight text-foreground hidden sm:inline">Chen & Hesed Consult</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground/80 hover:text-primary font-medium transition">
              About
            </a>
            <a href="#services" className="text-foreground/80 hover:text-primary font-medium transition">
              Services
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary font-medium transition">
              Success Stories
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary font-medium transition">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition shadow-md">
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <a href="#about" className="text-foreground/80 hover:text-primary py-2 transition" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#services" className="text-foreground/80 hover:text-primary py-2 transition" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary py-2 transition" onClick={() => setIsOpen(false)}>
              Success Stories
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary py-2 transition" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition">
              Book Consultation
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
