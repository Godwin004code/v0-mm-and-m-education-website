import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    university: "University of Toronto",
    image: "/student-portrait-1.png",
    text: "MM&M Education made my dream of studying in Canada a reality. Their guidance through the entire process was invaluable. I couldn't have done it without them!",
  },
  {
    name: "Arjun Patel",
    university: "University of Melbourne",
    image: "/diverse-students-studying.png",
    text: "The team at MM&M was incredibly supportive and professional. They answered all my questions and helped me navigate the visa process smoothly.",
  },
  {
    name: "Ananya Gupta",
    university: "University of Cambridge",
    image: "/diverse-students-studying.png",
    text: "I was nervous about applying to UK universities, but MM&M's expertise gave me confidence. I'm now studying at Cambridge thanks to their excellent support!",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear from students who achieved their study abroad dreams with MM&M Education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition border border-border scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
