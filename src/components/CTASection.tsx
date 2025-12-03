import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-section-lg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30"
        style={{ background: "var(--gradient-radial-gold)" }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-8">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Free 15-min Consultation</span>
          </div>

          {/* Heading */}
          <h2 className="text-display-sm md:text-display-md font-serif mb-6">
            Ready to Make Your Music{" "}
            <span className="text-gradient-gold italic">Sound Professional?</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Let's discuss your project. Book a free call with our team and get a custom quote within 24 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" className="group">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline">
              Send Us Your Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Usually responds within 2 hours
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              No commitment required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
