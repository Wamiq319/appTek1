"use client";

import ContactForm from "./ContactForm";
import InfoCard from "./InfoCard";
import { useTranslations } from "next-intl";

export const ContactSection = () => {
  const t = useTranslations("homePage.contactSection");

  return (
    <section id="contact" className="py-16 px-4 pb-30 sm:px-6 lg:px-20 bg-gray-50">
      {/* Heading */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-[#10BCBC] to-[#0A7C7C] bg-clip-text text-transparent">
          {t("title")}
        </h2>
        <div className="w-16 h-1 bg-[#10BCBC] mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <InfoCard />
        <ContactForm />
      </div>
    </section>
  );
};
