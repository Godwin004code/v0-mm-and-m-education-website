export default function ConsultAbout() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="scroll-animate relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <img
              src="/education-consulting-office-team.jpg"
              alt="Chen & Hesed Consult Team"
              className="rounded-2xl shadow-2xl relative z-10 border border-border"
            />
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-xl border border-border hidden sm:block">
              <p className="text-4xl font-bold text-primary mb-1">10+</p>
              <p className="text-sm font-medium text-muted-foreground">Years of Expertise</p>
            </div>
          </div>

          <div className="space-y-8 scroll-animate" style={{ animationDelay: "0.1s" }}>
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                About Chen & Hesed Consult
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Chen & Hesed Consult is a premier international consulting firm dedicated to bridge the gap between ambition and achievement. Based on the principles of grace (Chen) and loving-kindness (Hesed), we provide holistic support for students and professionals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">01</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Graceful Guidance</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  We approach every client's journey with the empathy and care it deserves.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">02</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Strategic Insight</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Data-driven strategies to ensure your applications stand out globally.
                </p>
              </div>
            </div>
            
            <p className="text-foreground/70 italic border-l-4 border-primary pl-6 py-2">
              "Our mission is to empower individuals to reach their highest potential through world-class consulting services."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
