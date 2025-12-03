import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "TORS took my bedroom demo and turned it into something I hear on the radio. Absolutely incredible work.",
      author: "Maya Johnson",
      role: "Singer-Songwriter",
      rating: 5,
      highlight: "2M+ Spotify streams",
    },
    {
      quote: "Professional, responsive, and the quality is unmatched. They understood my vision from the first conversation.",
      author: "David Park",
      role: "Indie Artist",
      rating: 5,
      highlight: "Featured on Netflix",
    },
    {
      quote: "I've worked with many studios, but TORS delivers something special. They truly care about the artist's voice.",
      author: "Luna Rivera",
      role: "Pop Artist",
      rating: 5,
      highlight: "#1 in 3 countries",
    },
  ];

  return (
    <section className="py-section-lg relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-primary mb-4">
            Artist Stories
          </span>
          <h2 className="text-display-sm md:text-display-md font-serif mb-4">
            Trusted by <span className="text-gradient-gold italic">Artists</span> Worldwide
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-8 hover-lift"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-serif text-lg">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                  {testimonial.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos/Badges */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-8">Our work has been featured on</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            {["Netflix", "Hulu", "Amazon Prime", "Spotify", "Apple Music"].map((brand) => (
              <span key={brand} className="text-lg md:text-xl font-serif text-muted-foreground">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
