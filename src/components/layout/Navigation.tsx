"use client";

import { useState, useEffect } from "react";
import { Button, LanguageSwitcher } from "@/components";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Menu, X, Home } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled2, setIsScrolled2] = useState(false);

  const pathname = usePathname();
  const currentLocale = (pathname.split("/")[1] || "en") as "en" | "ar";
  const t = useTranslations("homePage.navbar");

  useEffect(() => {
    const handleScroll2 = () => setIsScrolled2(window.scrollY > 650);
    window.addEventListener("scroll", handleScroll2);
    return () => window.removeEventListener("scroll", handleScroll2);
  }, []);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = [
    { label: t("home"), section: "home" },
    { label: t("services"), section: "services" },
    { label: t("about"), section: "about" },
    { label: t("contact"), section: "contact" },
  ];

const handleWhatsAppClick = () => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_SUPPORT;
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE;

  if (!phone) return;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message || "")}`,
    "_blank"
  );
};
  return (
    <div>
      <nav
        dir={currentLocale === "ar" ? "rtl" : "ltr"}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 shadow-lg backdrop-blur-md border-b border-gray-200"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 relative">
          {/* Mobile Row */}
          <div className="flex items-center justify-between md:hidden h-full">
            {/* Mobile Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2 group">
                <div className="p-2 border border-[#10b3bc] bg-gradient-to-t from-[#10b3bc] via-transparent to-transparent rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-6 h-6 text-[#10b3bc]" />
                </div>
                <span className="text-lg font-extrabold bg-gradient-to-r from-blue-400 via-[#10b3bc] to-[#10b3bc] bg-clip-text text-transparent tracking-wide">
                  {t("brand")}
                </span>
              </div>
            </div>

            {/* Mobile: Language Switcher + Menu Button */}
            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <Button
                variant="outline"
                size="medium"
                rounded="full"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Desktop Row */}
          <div className="hidden md:flex items-center justify-between h-full">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
              <div className="p-2 border border-[#10b3bc] bg-gradient-to-t from-[#10b3bc] via-transparent to-transparent rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <Home className="w-6 h-6 text-[#10b3bc]" />
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-blue-500 via-[#10b3bc] to-[#10b3bc] bg-clip-text text-transparent tracking-wide">
                {t("brand")}
              </span>
            </div>

            {/* Center: Menu */}
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.section)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right: CTA + Language */}
            <div className="flex items-center space-x-3">
              <Button
                variant="primary"
                rounded="full"
                onClick={handleWhatsAppClick}
              >
                <span className="flex items-center gap-2">
                  <FaWhatsapp size={18} />
                  {t("contact_cta")}
                </span>
              </Button>

              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="px-2 pt-2 pb-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.section)}
                  className="px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md w-full text-left"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="medium"
                  rounded="full"
                  onClick={handleWhatsAppClick}
                  className="w-full flex justify-center"
                >
                  <span className="flex items-center gap-2">
                    <FaWhatsapp size={18} />
                    {t("contact_cta")}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* WhatsApp Floating Btn (Mobile Only) */}
      <AnimatePresence>
        {isScrolled2 && (
          <motion.button
            key="whatsapp-btn"
            onClick={handleWhatsAppClick}
            className="fixed bottom-4 z-20 right-4 bg-green-500 p-4 rounded-full shadow-lg text-white md:hidden"
            initial={{ y: -500, opacity: 0, rotate: -15 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 12,
              bounce: 0.6,
            }}
            whileHover={{ scale: 1.1 }}
          >
            <FaWhatsapp size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
