"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AboutUsCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const AboutUsCard = ({ title, description, icon }: AboutUsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#10BCBC]/40"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#10BCBC]/10 text-[#10BCBC] shadow-inner mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-700 group-hover:text-[#10BCBC] transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Subtle bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </motion.div>
  );
};
