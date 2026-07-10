import AntiGravityHero from "@/components/AntiGravityHero";
import ResearchSection from "@/components/ResearchSection";
import AboutSection from "@/components/AboutSection";
import SoftwareSkillsSection from "@/components/SoftwareSkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CounterSection from "@/components/CounterSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HighlightsSection from "@/components/HighlightsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
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
