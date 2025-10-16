import { useTranslations } from "next-intl";
import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  IndustriesSection,
  ServicesSection,
} from "@/components";
export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection /> 
      <IndustriesSection/>
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
