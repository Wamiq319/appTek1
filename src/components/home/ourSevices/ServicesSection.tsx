"use client";

import React, { useState } from "react";
import { Button, ServiceCard } from "@/components";
import { useTranslations } from "next-intl";
import {
  FaMobileAlt,
  FaGlobe,
  FaCogs,
  FaApple,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaCube,
  FaTools,
  FaNetworkWired,
  FaChartLine,
  FaPencilRuler,
} from "react-icons/fa";

export const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const t = useTranslations("homePage.serviceSection");

  const coreServices = [
    {
      icon: FaCogs,
      title: t("core.enterprise.title"),
      description: t("core.enterprise.desc"),
      backgroundImage: "/images/services/application.webp",
    },
    {
      icon: FaGlobe,
      title: t("core.website.title"),
      description: t("core.website.desc"),
      backgroundImage: "/images/services/website.jpg",
    },
    {
      icon: FaMobileAlt,
      title: t("core.mobile.title"),
      description: t("core.mobile.desc"),
      backgroundImage: "/images/services/mobile.jpg",
    },
    {
      icon: FaApple,
      title: t("core.ios.title"),
      description: t("core.ios.desc"),
      backgroundImage: "/images/services/ios.avif",
    },
    {
      icon: FaCloud,
      title: t("core.saas.title"),
      description: t("core.saas.desc"),
      backgroundImage: "/images/services/saas.webp",
    },
    {
      icon: FaRobot,
      title: t("core.ai.title"),
      description: t("core.ai.desc"),
      backgroundImage: "/images/services/ai.webp",
    },
  ];

  const extraServices = [
    {
      icon: FaChartLine,
      title: t("extra.dashboard.title"),
      description: t("extra.dashboard.desc"),
      backgroundImage: "/images/services/dashboard.jpg",
    },
    {
      icon: FaPencilRuler,
      title: t("extra.custom.title"),
      description: t("extra.custom.desc"),
      backgroundImage: "/images/services/custom-software.jpg",
    },
    {
      icon: FaShieldAlt,
      title: t("extra.security.title"),
      description: t("extra.security.desc"),
      backgroundImage: "/images/services/Cybersecurity.jpg",
    },
    {
      icon: FaCube,
      title: t("extra.blockchain.title"),
      description: t("extra.blockchain.desc"),
      backgroundImage: "/images/services/Blockchain.jpg",
    },
    {
      icon: FaNetworkWired,
      title: t("extra.infrastructure.title"),
      description: t("extra.infrastructure.desc"),
      backgroundImage: "/images/services/Infrastructure.jpg",
    },
    {
      icon: FaTools,
      title: t("extra.support.title"),
      description: t("extra.support.desc"),
      backgroundImage: "/images/services/Maintenance.png",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#10BCBC] to-[#0A7C7C] bg-clip-text text-transparent tracking-wide">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-[#10BCBC] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
           {t("subtitle")}
          </p>
        </div>
        {/* Core Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {coreServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Extra Services */}
        {showAll && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {extraServices.map((service, index) => (
              <ServiceCard key={`extra-${index}`} {...service} />
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <Button rounded="full" onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? t("showLess") : t("seeMore")}
        </Button>
      </div>
    </section>
  );
};
