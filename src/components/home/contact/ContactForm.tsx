"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("homePage.contactSection.form");

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputWrapper = "relative w-full";
  const labelStyle =
    "absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#10BCBC]";
  const inputStyle =
    "peer w-full border border-gray-200 rounded-xl px-3 pt-6 pb-2 text-gray-700 focus:ring-2 focus:ring-[#10BCBC] outline-none bg-white";

  return (
    <motion.div
      id="contactForm"
      whileHover={{ scale: 1.01 }}
      className="bg-white p-6 sm:p-8 rounded-2xl shadow-md"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className={inputWrapper}>
          <input
            type="text"
            name="name"
            placeholder=" "
            required
            value={form.name}
            onChange={handleChange}
            className={inputStyle}
          />
          <label className={labelStyle}>{t("name")}</label>
        </div>

        <div className={inputWrapper}>
          <input
            type="email"
            name="email"
            placeholder=" "
            required
            value={form.email}
            onChange={handleChange}
            className={inputStyle}
          />
          <label className={labelStyle}>{t("email")}</label>
        </div>

        <div className={inputWrapper}>
          <textarea
            name="message"
            placeholder=" "
            rows={7}
            required
            value={form.message}
            onChange={handleChange}
            className={`${inputStyle} min-h-[120px]`}
          />
          <label className={labelStyle}>{t("message")}</label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition active:scale-95 ${
            loading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-gradient-to-r from-[#10BCBC] to-[#0A7C7C] text-white"
          }`}
        >
          {loading ? t("sending") : t("submit")}
        </button>

        {status === "success" && (
          <p className="text-center text-green-600 font-medium mt-3">
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-red-600 font-medium mt-3">
            {t("error")}
          </p>
        )}
      </form>
    </motion.div>
  );
}
