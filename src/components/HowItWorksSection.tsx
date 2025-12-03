import { Upload, MessageSquare, Headphones, Download } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload Your Demo",
      description: "Send us your rough recording, voice memo, or MIDI file. Any format works.",
    },
    {
      icon: MessageSquare,
      number: "02",
      title: "Discuss Your Vision",
      description: "We'll chat about your style, references, and goals for the track.",
    },
    {
      icon: Headphones,
      number: "03",
      title: "We Produce",
      description: "Our team brings your song to life with professional production, mixing, and mastering.",
    },
    {
      icon: Download,
      number: "04",
      title: "Download & Release",
      description: "Receive your finished track, ready for streaming platforms worldwide.",
    },
  ];

  return (
    <section id="how-it-works" className="py-section-lg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-primary mb-4">
            Simple Process
          </span>
          <h2 className="text-display-sm md:text-display-md font-serif mb-4">
            How It <span className="text-gradient-gold italic">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From rough idea to radio-ready in four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="text-center">
                {/* Number */}
                <div className="text-6xl font-serif text-gradient-gold opacity-20 mb-4 group-hover:opacity-40 transition-opacity duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-6 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
