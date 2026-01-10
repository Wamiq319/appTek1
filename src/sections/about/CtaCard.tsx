"use client";
import { motion } from "motion/react";

export const Cta = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 p-10 text-center"
    >
      {/* Title */}
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-3">
        Ready to Take the Next Step?
      </h3>

      {/* Description */}
      <p className="mb-8 text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
        Let’s discuss your project and bring your ideas to life.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Primary button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const section = document.getElementById("contact");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-7 py-3 rounded-xl bg-[#10BCBC] text-white font-semibold shadow-md hover:bg-[#0A8E8E] transition-all duration-300"
        >
          Send Us a Message
        </motion.button>

        {/* Secondary button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            (window.location.href = `tel:${process.env.NEXT_PUBLIC_WHATSAPP}`)
          }
          className="px-7 py-3 rounded-xl border-2 border-[#10BCBC] text-[#10BCBC] font-semibold hover:bg-[#10BCBC] hover:text-white shadow-sm transition-all duration-300"
        >
          Call Now
        </motion.button>
      </div>
    </motion.div>
  );
};
