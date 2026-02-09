import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Best product person I've worked with. Period.",
    author: "Sarah Chen",
    role: "Founder, TechFlow",
    rating: 5,
  },
  {
    quote: "Turned our messy ideas into a product users actually want.",
    author: "Marcus Reid",
    role: "CEO, StartupXYZ",
    rating: 5,
  },
  {
    quote: "Smart, creative, and gets sh*t done. What more do you want?",
    author: "Alex Kumar",
    role: "VP Product, ScaleUp Inc",
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4">
            Don&apos;t Just Take{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Word
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Here&apos;s what people are saying
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-card border-2 border-border hover:border-primary/30 transition-smooth shadow-soft hover:shadow-elevated group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-elevated group-hover:scale-110 transition-bounce">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="space-y-4 pt-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg font-medium leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}