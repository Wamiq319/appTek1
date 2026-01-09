import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  IndustriesSection,
  ServicesSection,
} from "@/components";

export default function NorthAmericaPage() {
  return (
    <div className="min-h-screen">
      <HeroSection region="northAmerica" />
      <ServicesSection region="northAmerica" />
      <IndustriesSection region="northAmerica" />
      <AboutSection region="northAmerica" />
      <ContactSection region="northAmerica" />
      <Footer />
    </div>
  );
}
