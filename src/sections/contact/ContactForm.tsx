"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Input, TextArea } from "@/components";

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

  return (
    <motion.div
      id="contactForm"
      whileHover={{ scale: 1.01 }}
      className="bg-white p-6 sm:p-8 rounded-2xl shadow-md"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          name="name"
          label={t("name")}
          required
          value={form.name}
          onChange={handleChange}
        />

        <Input
          type="email"
          name="email"
          label={t("email")}
          required
          value={form.email}
          onChange={handleChange}
        />

        <TextArea
          name="message"
          label={t("message")}
          rows={7}
          required
          value={form.message}
          onChange={handleChange}
        />

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
