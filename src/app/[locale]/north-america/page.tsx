import {
  AboutSection,
  ContactSection,
  HeroSection,
  IndustriesSection,
  ServicesSection,
} from "@/sections";
import { Footer } from "@/components";

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
