import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EntryPointsSection from "@/components/EntryPointsSection";
import MusicPreviewSection from "@/components/MusicPreviewSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EntryPointsSection />
        <MusicPreviewSection />
        <HowItWorksSection />
        <PricingSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
