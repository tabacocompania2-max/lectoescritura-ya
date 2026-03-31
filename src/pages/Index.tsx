import { lazy, Suspense } from "react";
import TopBar from "@/components/landing/TopBar";
import HeroSection from "@/components/landing/HeroSection";

const ProductVideoSection = lazy(() => import("@/components/landing/ProductVideoSection"));
const ProblemSection = lazy(() => import("@/components/landing/ProblemSection"));
const TransitionSection = lazy(() => import("@/components/landing/TransitionSection"));
const HowItWorks = lazy(() => import("@/components/landing/HowItWorks"));
const VideoSection = lazy(() => import("@/components/landing/VideoSection"));
const ContentSection = lazy(() => import("@/components/landing/ContentSection"));
const BonusSection = lazy(() => import("@/components/landing/BonusSection"));
const TestimonialsSection = lazy(() => import("@/components/landing/TestimonialsSection"));
const LevelsSection = lazy(() => import("@/components/landing/LevelsSection"));
const GuaranteeSection = lazy(() => import("@/components/landing/GuaranteeSection"));
const PricingSection = lazy(() => import("@/components/landing/PricingSection"));
const FAQSection = lazy(() => import("@/components/landing/FAQSection"));
const FinalCTA = lazy(() => import("@/components/landing/FinalCTA"));

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <HeroSection />
    <Suspense fallback={<div className="min-h-[200px]" />}>
      <ProductVideoSection />
      <ProblemSection />
      <TransitionSection />
      <HowItWorks />
      <VideoSection />
      <ContentSection />
      <BonusSection />
      <TestimonialsSection />
      <LevelsSection />
      <GuaranteeSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </Suspense>
  </div>
);

export default Index;
