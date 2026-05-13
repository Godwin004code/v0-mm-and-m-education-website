export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <img
              src="/education-consulting-office-team.jpg"
              alt="MM&M Education Team"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6 scroll-animate" style={{ animationDelay: "0.1s" }}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About MM&M Education</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                MM&M Education is a leading international education consulting agency dedicated to transforming the
                study abroad dreams of students into reality. With years of expertise and a proven track record, we've
                helped thousands of students secure admissions to top universities worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expert Guidance</h3>
                  <p className="text-foreground/70">
                    Our team of experienced consultants provides personalized guidance tailored to your goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Global Network</h3>
                  <p className="text-foreground/70">
                    We have partnerships with universities across the globe to ensure the best opportunities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Proven Success</h3>
                  <p className="text-foreground/70">
                    95% of our students successfully secure admissions to their dream universities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
