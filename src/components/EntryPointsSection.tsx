import { Headphones, Lightbulb, DollarSign, ArrowRight } from "lucide-react";

const EntryPointsSection = () => {
  const entryPoints = [
    {
      icon: Headphones,
      title: "Listen to Our Work",
      description: "Explore our portfolio of professionally produced tracks across all genres.",
      href: "#music",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Lightbulb,
      title: "How It Works",
      description: "A simple, transparent process from your demo to radio-ready master.",
      href: "#how-it-works",
      gradient: "from-primary/15 to-primary/5",
    },
    {
      icon: DollarSign,
      title: "View Pricing",
      description: "Flexible, instrument-based pricing. Only pay for what you need.",
      href: "#pricing",
      gradient: "from-primary/10 to-primary/5",
    },
  ];

  return (
    <section className="py-section relative">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {entryPoints.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover-lift"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-primary font-medium">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntryPointsSection;
