"use client"

export default function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Study Abroad Journey Today</h2>
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          Take the first step towards your global education dreams. Book a free consultation with our experts and
          discover your perfect pathway.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.open("https://wa.me/234803726308", "_blank")}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Book Free Consultation
          </button>
          <button className="px-8 py-3 bg-white text-secondary rounded-lg font-semibold hover:bg-opacity-90 transition">
            Apply Now
          </button>
        </div>

        <p className="text-white/70 mt-8">
          Questions? Contact us at <span className="font-semibold">hello@mmeducation.com</span> or call{" "}
          <span className="font-semibold">+1 (555) 123-4567</span>
        </p>
      </div>
    </section>
  )
}
