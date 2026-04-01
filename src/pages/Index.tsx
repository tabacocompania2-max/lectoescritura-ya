import TopBar from "@/components/landing/TopBar";
import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorks from "@/components/landing/HowItWorks";
import ContentSection from "@/components/landing/ContentSection";
import BonusSection from "@/components/landing/BonusSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FinalCTA from "@/components/landing/FinalCTA";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <HeroSection />
    <PainSection />
    <SolutionSection />
    <HowItWorks />
    <ContentSection />
    <BonusSection />
    <TestimonialsSection />
    <GuaranteeSection />
    <FinalCTA />
  </div>
);

export default Index;
