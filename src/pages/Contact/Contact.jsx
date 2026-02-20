/**
 * Contact page — assembles all contact sections in order.
 * Matches ekomart-nextjs.vercel.app/contact layout and hierarchy.
 */
import {
  HeroSection,
  ContactInfoSection,
  ContactFormSection,
  MapSection,
  FooterSection,
} from "../../components/Contact";
import OfferStripSection from "../../components/OfferStripSection/OfferStripSection";

import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page min-h-max">
      <HeroSection />
      <ContactInfoSection />
      <MapSection />
      <ContactFormSection />
      <OfferStripSection />
    </main>
  );
}
