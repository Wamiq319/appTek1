"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function InfoCard() {
  const t = useTranslations("homePage.contactSection");

  const handleWhatsAppClick = () => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_SUPPORT;
    const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE;

    if (!phone) return;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message || "")}`,
      "_blank"
    );
  };


  const infoList = [
    { icon: <FaPhone />, text: process.env.NEXT_PUBLIC_WHATSAPP_SUPPORT },
    { icon: <FaEnvelope />, text: process.env.NEXT_PUBLIC_EMAIL_SECONDARY },
    { icon: <FaMapMarkerAlt />, text: t("info.location") },
  ];

  return (
    <div className="flex flex-col-reverse gap-6">
      {/* Info list */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md space-y-2">
        {infoList.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-2 bg-gray-50 hover:bg-gray-100 rounded-xl transition"
          >
            <div className="p-3 bg-[#10BCBC]/10 rounded-full text-[#10BCBC] text-xl">
              {item.icon}
            </div>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>

      {/* CTA Blue Gradient Box */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-gradient-to-t md:bg-gradient-to-r from-blue-600 via-blue-600 to-[#10BCBC] p-8 sm:p-10 rounded-2xl shadow-lg text-center text-white"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          {t("cta.title")}
        </h3>
        <p className="mb-8 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          {t("cta.desc")}
        </p>

        {/* Buttons in one line */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* WhatsApp Button (Primary) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="px-7 py-3 rounded-xl bg-[#10BCBC] text-white font-semibold shadow-md hover:bg-[#0A8E8E] transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <FaWhatsapp size={20} />
            {t("cta.button")}
          </motion.button>

          {/* Call Now Button (Secondary Outline) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              (window.location.href = `tel:${process.env.NEXT_PUBLIC_WHATSAPP_SUPPORT}`)
            }
            className="px-7 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-600 shadow-sm transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <FaPhone size={18} />
            Call Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
