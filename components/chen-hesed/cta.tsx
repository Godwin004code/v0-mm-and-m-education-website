"use client"

export default function ConsultCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-8 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border-8 border-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-animate">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary-foreground leading-tight">
          Elevate Your Global <br /> Prospects Today
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
          Experience the Chen & Hesed difference. Join a legacy of successful global transitions with our bespoke consulting services.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => window.open("https://wa.me/234803726308", "_blank")}
            className="px-12 py-5 bg-background text-foreground rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            Free Strategic Session
          </button>
          <button className="px-12 py-5 bg-transparent text-primary-foreground border-2 border-primary-foreground/30 rounded-full font-bold text-lg hover:bg-primary-foreground hover:text-primary transition-all">
            Inquire Now
          </button>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-primary-foreground/60 text-sm font-medium tracking-wide">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-foreground rounded-full" /> 
            PREMIUM CONSULTING
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-foreground rounded-full" /> 
            GLOBAL NETWORK
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-foreground rounded-full" /> 
            BESPOKE STRATEGIES
          </span>
        </div>
      </div>
    </section>
  )
}
