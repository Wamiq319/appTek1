import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  IndustriesSection,
  ServicesSection,
} from "@/components";

export default function GlobalPage() {
  return (
    <div className="min-h-screen">
      <HeroSection region="global" />
      <ServicesSection region="global" />
      <IndustriesSection region="global" />
      <AboutSection region="global" />
      <ContactSection region="global" />
      <Footer />
    </div>
  );
}
