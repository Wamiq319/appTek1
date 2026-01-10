"use client";

import { useRouter as useIntlRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RegionOption {
  id: string;
  label: string;
  locale: string;
  path: string;
  flag: string;
}

const regions: RegionOption[] = [
  {
    id: "saudi-en",
    label: "Saudi & Gulf (EN)",
    locale: "en",
    path: "/saudi-gulf",
    flag: "🇸🇦",
  },
  {
    id: "saudi-ar",
    label: "السعودية والخليج (AR)",
    locale: "ar",
    path: "/saudi-gulf-arabic",
    flag: "🇸🇦",
  },
  {
    id: "na-en",
    label: "North America (EN)",
    locale: "en",
    path: "/north-america",
    flag: "🇺🇸",
  },
  {
    id: "global-en",
    label: "Global (EN)",
    locale: "en",
    path: "/global",
    flag: "🌐",
  },
];

export const LanguageSwitcher = () => {
  const router = useIntlRouter();
  const rawPathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine current selection based on URL
  const currentOption =
    regions.find(
      (r) =>
        rawPathname.includes(r.path) && rawPathname.includes(`/${r.locale}`)
    ) || regions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: RegionOption) => {
    router.push(option.path, { locale: option.locale });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        rounded="full"
        size="medium"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 font-semibold bg-white/80 backdrop-blur-sm border-gray-200 hover:border-[#10b3bc] transition-all duration-300 min-w-[160px] justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{currentOption.flag}</span>
          <span className="hidden sm:inline text-sm">
            {currentOption.label}
          </span>
          <span className="sm:hidden text-sm">
            {currentOption.locale === "ar" ? "Arabic" : "English"}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100]"
          >
            <div className="p-2 space-y-1">
              {regions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                    currentOption.id === option.id
                      ? "bg-blue-50 text-[#10b3bc] font-bold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{option.flag}</span>
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{option.label}</span>
                      <span className="text-[10px] uppercase opacity-60 tracking-wider">
                        {option.locale === "ar" ? "Arabic" : "English"}
                      </span>
                    </div>
                  </div>
                  {currentOption.id === option.id && (
                    <Check className="w-4 h-4 text-[#10b3bc]" />
                  )}
                </button>
              ))}
            </div>

            <div className="bg-gray-50 p-3 border-t border-gray-100">
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium uppercase tracking-[0.1em]">
                <Globe className="w-3 h-3" />
                Select Region & Language
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
