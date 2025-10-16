"use client";

import {
  FaUsers,
  FaStar,
  FaClock,
  FaUserTie,
  FaMicrochip,
  FaCheckCircle,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import { AboutUsCard } from "./AboutUsCard";
import { StatsBanner } from "./StatsBanner";
import { Cta } from "./CtaCard";

export const AboutSection = () => {
  const t = useTranslations("homePage.aboutSection");

  const cards = [
    {
      icon: <FaStar className="text-[#10BCBC] text-4xl" />,
      title: t("cards.excellence.title"),
      description: t("cards.excellence.desc"),
    },
    {
      icon: <FaUserTie className="text-[#10BCBC] text-4xl" />,
      title: t("cards.client.title"),
      description: t("cards.client.desc"),
    },
    {
      icon: <FaCheckCircle className="text-[#10BCBC] text-4xl" />,
      title: t("cards.quality.title"),
      description: t("cards.quality.desc"),
    },
    {
      icon: <FaMicrochip className="text-[#10BCBC] text-4xl" />,
      title: t("cards.tech.title"),
      description: t("cards.tech.desc"),
    },
    {
      icon: <FaUsers className="text-[#10BCBC] text-4xl" />,
      title: t("cards.team.title"),
      description: t("cards.team.desc"),
    },
    {
      icon: <FaClock className="text-[#10BCBC] text-4xl" />,
      title: t("cards.delivery.title"),
      description: t("cards.delivery.desc"),
    },
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#10BCBC] to-[#0A7C7C] bg-clip-text text-transparent tracking-wide">
          {t("title")}
        </h2>
        <div className="w-20 h-1 bg-[#10BCBC] mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      {/* Highlight */}
      <div className="bg-[#10BCBC]/10 rounded-2xl p-8 max-w-4xl mx-auto mb-20 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          {t("highlight")}
        </p>
      </div>

      {/* Stats banner */}
      <StatsBanner />
    </section>
  );
};
