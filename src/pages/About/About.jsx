/**
 * About page: hero, stats, content, team, features, testimonials, offer strip.
 */
import HeroSection from "../../components/HeroSection/HeroSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import AboutContentSection from "../../components/AboutContentSection/AboutContentSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import OfferStripSection from "../../components/OfferStripSection/OfferStripSection";

import "./About.css";

export default function About() {
  return (
    <main className="about-page min-h-max">
      <HeroSection />
      <StatsSection />
      <AboutContentSection />
      <TeamSection />
      <FeaturesSection />
      <TestimonialsSection />
      <OfferStripSection />
    </main>
  );
}
