import { Check, Music, Mic2, Piano, Drum, Guitar, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const instruments = [
    { icon: Drum, name: "Drums", price: 150, description: "Full drum production" },
    { icon: Guitar, name: "Bass", price: 100, description: "Bass guitar or synth bass" },
    { icon: Piano, name: "Keys", price: 120, description: "Piano, synths, pads" },
    { icon: Guitar, name: "Guitar", price: 130, description: "Electric or acoustic" },
    { icon: Mic2, name: "Vocals", price: 200, description: "Tuning, comping, effects" },
    { icon: Waves, name: "Mix & Master", price: 250, description: "Professional finish" },
  ];

  const exampleBuild = {
    name: "Typical Pop Track",
    items: ["Drums", "Bass", "Keys", "Vocals", "Mix & Master"],
    total: 820,
  };

  return (
    <section id="pricing" className="py-section-lg relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-primary mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-display-sm md:text-display-md font-serif mb-4">
            Pay Per <span className="text-gradient-gold italic">Instrument</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Only pay for what you need. Build your perfect production, one element at a time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Instrument Grid */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {instruments.map((item, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">from</span>
                  </div>
                  <h4 className="font-serif text-lg mb-1">{item.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="text-2xl font-serif text-gradient-gold">
                    ${item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example Build Card */}
          <div className="lg:col-span-1">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 sticky top-24 glass-gold">
              <div className="flex items-center gap-2 mb-6">
                <Music className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Recommended Build</span>
              </div>

              <h3 className="text-xl font-serif mb-2">{exampleBuild.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Everything you need for a professional pop release.
              </p>

              <div className="space-y-3 mb-6">
                {exampleBuild.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex items-end justify-between">
                  <span className="text-sm text-muted-foreground">Starting from</span>
                  <div className="text-right">
                    <span className="text-3xl font-serif text-gradient-gold">${exampleBuild.total}</span>
                  </div>
                </div>
              </div>

              <Button variant="gold" className="w-full" size="lg">
                Get a Custom Quote
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Final price depends on song complexity
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need something different? We offer custom packages for albums, EPs, and ongoing projects.
          </p>
          <a href="#" className="text-primary font-medium hover:underline underline-offset-4">
            Contact us for custom pricing →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
