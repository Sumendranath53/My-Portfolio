import dynamic from "next/dynamic";
import AntiGravityHero from "@/components/AntiGravityHero";

const ResearchSection = dynamic(() => import("@/components/ResearchSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const SoftwareSkillsSection = dynamic(() => import("@/components/SoftwareSkillsSection"));
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"));
const CounterSection = dynamic(() => import("@/components/CounterSection"));
const PortfolioSection = dynamic(() => import("@/components/PortfolioSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const HighlightsSection = dynamic(() => import("@/components/HighlightsSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main id="main-content">
      <AntiGravityHero />
      <ResearchSection />
      <AboutSection />
      <SoftwareSkillsSection />
      <ExperienceSection />
      <CounterSection />
      <PortfolioSection />
      <TestimonialsSection />
      <HighlightsSection />
      <Footer />
    </main>
  );
}
