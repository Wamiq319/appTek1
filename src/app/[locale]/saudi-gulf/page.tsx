import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  IndustriesSection,
  ServicesSection,
} from "@/components";

export default function SaudiGulfPage() {
  return (
    <div className="min-h-screen">
      <HeroSection region="saudi" />
      <ServicesSection region="saudi" />
      <IndustriesSection region="saudi" />
      <AboutSection region="saudi" />
      <ContactSection region="saudi" />
      <Footer />
    </div>
  );
}
