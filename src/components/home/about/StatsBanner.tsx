"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";

export const StatsBanner = () => {
  const t = useTranslations("homePage.aboutSection.stats");

  const stats = [
    { title: t("trusted.title"), desc: t("trusted.desc"), icon: ShieldCheck },
    { title: t("available.title"), desc: t("available.desc"), icon: Clock },
    {
      title: t("professional.title"),
      desc: t("professional.desc"),
      icon: Briefcase,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-[#10BCBC] py-10 px-6 rounded-2xl shadow-xl flex flex-col sm:flex-row justify-around items-center text-center gap-8 sm:gap-12 mb-12">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <stat.icon className="w-9 h-9 text-white mb-3 drop-shadow-md" />
          <h3 className="text-xl font-semibold text-white tracking-wide">
            {stat.title}
          </h3>
          <p className="text-sm text-white/80 mt-1">{stat.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};
