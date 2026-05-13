"use client"

import { Mail, Phone } from "lucide-react"

export default function ContactBar() {
  return (
    <div className="bg-secondary text-white py-3 border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 sm:gap-8 text-sm">
          {/* Phone */}
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition">
            <Phone size={16} />
            <span className="hidden sm:inline font-semibold">Phone:</span>
            <span>+1 (234) 567-890</span>
          </a>

          {/* Email */}
          <a href="mailto:info@mmeducation.com" className="flex items-center gap-2 hover:text-primary transition">
            <Mail size={16} />
            <span className="hidden sm:inline font-semibold">Email:</span>
            <span>info@mmeducation.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}
