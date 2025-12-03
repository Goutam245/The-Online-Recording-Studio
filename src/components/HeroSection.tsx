import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--gold)/0.08),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-primary/40 animate-float" />
      <div className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-primary/30 animate-float delay-300" />
      <div className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-primary/50 animate-float delay-500" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-gold" />
            <span className="text-sm font-medium text-primary">300M+ Streams Worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-serif mb-6 animate-fade-up delay-100">
            Your Music,{" "}
            <span className="text-gradient-gold italic">Professionally</span>
            <br />
            Produced
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Work with world-class producers, engineers, and session musicians.
            From demo to master—all online.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <Button variant="hero" className="group">
              <Play className="w-5 h-5 mr-1" />
              Listen to Our Work
            </Button>
            <Button variant="hero-outline" className="group">
              How It Works
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social Proof Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up delay-400">
            {[
              { value: "300M+", label: "Streams" },
              { value: "#1", label: "Chart Positions" },
              { value: "50+", label: "Countries" },
              { value: "Netflix", label: "& Major Syncs" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-serif text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
