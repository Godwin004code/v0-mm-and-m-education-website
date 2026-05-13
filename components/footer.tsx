"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="scroll-animate">
            <div className="mb-4">
              <Image src="/mmm-logo.jpg" alt="MM&M Education Logo" width={120} height={120} className="h-24 w-auto" />
            </div>
            <p className="text-white/70 text-sm">Your trusted partner in achieving global education success.</p>
          </div>

          {/* Quick Links */}
          <div className="scroll-animate" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#about" className="hover:text-primary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="scroll-animate" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Study Abroad Pathways
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Visa Assistance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Pre-Departure Briefing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="scroll-animate" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:hello@mmeducation.com" className="hover:text-primary transition">
                  hello@mmeducation.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+15551234567" className="hover:text-primary transition">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary" />
                <span>123 Education Street, Global City, GC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-4 md:mb-0">© 2025 MM&M Education. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/70 hover:text-primary transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-primary transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-primary transition">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
