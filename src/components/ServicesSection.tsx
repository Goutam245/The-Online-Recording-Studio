import { Mic2, Music2, Headphones, Radio, Disc3, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Mic2,
      title: "Vocal Production",
      description: "Professional vocal tuning, comping, and creative effects.",
    },
    {
      icon: Music2,
      title: "Full Production",
      description: "Complete instrumental arrangement and production from scratch.",
    },
    {
      icon: Headphones,
      title: "Mixing",
      description: "Industry-standard mixing to make your track sound polished and powerful.",
    },
    {
      icon: Radio,
      title: "Mastering",
      description: "Final polish for streaming platforms, vinyl, or broadcast.",
    },
    {
      icon: Disc3,
      title: "Session Musicians",
      description: "Real instruments recorded by professional session players worldwide.",
    },
    {
      icon: Sparkles,
      title: "Creative Direction",
      description: "Artistic guidance to help shape your unique sound and vision.",
    },
  ];

  return (
    <section className="py-section relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.05),transparent_50%)]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-primary mb-4">
            What We Do
          </span>
          <h2 className="text-display-sm md:text-display-md font-serif mb-4">
            Full-Service <span className="text-gradient-gold italic">Production</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take your music from idea to release.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
