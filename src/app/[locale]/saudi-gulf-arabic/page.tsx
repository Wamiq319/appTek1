import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  IndustriesSection,
  ServicesSection,
} from "@/components";

export default function SaudiGulfArabicPage() {
  return (
    <div className="min-h-screen">
      <HeroSection region="saudi-gulf-arabic" />
      <ServicesSection region="saudi-gulf-arabic" />
      <IndustriesSection region="saudi-gulf-arabic" />
      <AboutSection region="saudi-gulf-arabic" />
      <ContactSection region="saudi-gulf-arabic" />
      <Footer />
    </div>
  );
}
