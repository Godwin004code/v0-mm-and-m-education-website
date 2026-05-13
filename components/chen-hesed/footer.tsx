"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export default function ConsultFooter() {
  return (
    <footer className="bg-background text-foreground py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="scroll-animate col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Image 
                src="/Gemini_Generated_Image_7alg537alg537alg.png" 
                alt="Chen & Hesed Consult Logo" 
                width={80} 
                height={80} 
                className="h-16 w-auto rounded-full" 
              />
              <span className="font-bold text-xl tracking-tight">Chen & Hesed</span>
            </div>
            <p className="text-foreground/60 leading-relaxed mb-8">
              Bespoke international consulting services built on the foundations of grace and excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="scroll-animate" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-bold text-lg mb-8 text-primary">Company</h3>
            <ul className="space-y-4 text-foreground/60">
              <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition">Our Services</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          <div className="scroll-animate" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-bold text-lg mb-8 text-primary">Legal</h3>
            <ul className="space-y-4 text-foreground/60">
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="scroll-animate" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-bold text-lg mb-8 text-primary">Contact</h3>
            <ul className="space-y-6 text-foreground/60">
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-primary mt-1" />
                <a href="mailto:hello@chenhesed.com" className="hover:text-primary transition">
                  hello@chenhesed.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-primary mt-1" />
                <a href="tel:+234803726308" className="hover:text-primary transition">
                  +234 803 726 308
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-primary mt-1" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/40 text-sm">
            © 2026 Chen & Hesed Consult. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-foreground/40 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" /> 
              Nigeria
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" /> 
              United Kingdom
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" /> 
              Canada
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
