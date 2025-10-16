"use client";

import { ServiceCard } from "@/components/ui";
import { useTranslations } from "next-intl";
import { IconType } from "react-icons";
import {
  FaHospital,
  FaMoneyBillWave,
  FaBook,
  FaShoppingBag,
  FaBuilding,
  FaTruck,
} from "react-icons/fa";

interface IndustryItem {
  title: string;
  description: string;
  imgUrl: string;
  icon: IconType;
}

export const IndustriesSection: React.FC = () => {
  const t = useTranslations("homePage.industriesSection");

  const data: IndustryItem[] = [
    {
      title: t("core.healthcare.title"),
      description: t("core.healthcare.desc"),
      imgUrl: "/images/industries/healthcare.jpg",
      icon: FaHospital,
    },
    {
      title: t("core.finance.title"),
      description: t("core.finance.desc"),
      imgUrl: "/images/industries/finance.jpg",
      icon: FaMoneyBillWave,
    },
    {
      title: t("core.education.title"),
      description: t("core.education.desc"),
      imgUrl: "/images/industries/education.jpg",
      icon: FaBook,
    },
    {
      title: t("core.oilgas.title"),
      description: t("core.oilgas.desc"),
      imgUrl: "/images/industries/Oil.jpg",
      icon: FaShoppingBag,
    },
    {
      title: t("core.realestate.title"),
      description: t("core.realestate.desc"),
      imgUrl: "/images/industries/realestate.jpg",
      icon: FaBuilding,
    },
    {
      title: t("core.logistics.title"),
      description: t("core.logistics.desc"),
      imgUrl: "/images/industries/logistics.jpg",
      icon: FaTruck,
    },
  ];

  return (
    <div className="w-full h-fit relative">
      <section className="py-16 pb-20 px-6 max-w-6xl mx-auto">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#10BCBC] to-[#0A7C7C] bg-clip-text text-transparent tracking-wide">
            {t("title")}
          </h2>
          <div className="w-40 h-1 bg-[#10BCBC] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Grid of Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              backgroundImage={item.imgUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
