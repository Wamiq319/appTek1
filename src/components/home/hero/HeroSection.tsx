"use client";

import { useTranslations } from "next-intl";
import {
  Lock,
  Smartphone,
  Monitor,
  Globe,
  Code,
  Brain,
  CreditCard,
  Shield,
  Zap,
  Database,
  Wifi,
  Settings,
  BarChart3,
  Flag,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export const HeroSection = () => {
  const t = useTranslations("homePage.hero");

  const floatingIcons = [
    {
      icon: Wifi,
      size: "w-8 h-8 sm:w-10 sm:h-10",
      innerSize: "w-5 h-5 sm:w-6 sm:h-6",
      position: "absolute top-1/3 right-12",
      gradient: "from-cyan-400 to-cyan-600",
      delay: "1.4s",
    },
    {
      icon: Settings,
      size: "w-9 h-9 sm:w-12 sm:h-12",
      innerSize: "w-5 h-5 sm:w-7 sm:h-7",
      position: "absolute bottom-8 left-1/4",
      gradient: "from-gray-400 to-gray-600",
      delay: "0s",
    },
    {
      icon: BarChart3,
      size: "w-9 h-9 sm:w-11 sm:h-11",
      innerSize: "w-5 h-5 sm:w-6 sm:h-6",
      position: "absolute bottom-12 right-1/4",
      gradient: "from-emerald-400 to-emerald-600",
      delay: "1s",
    },
    {
      icon: Globe,
      size: "w-10 h-10 sm:w-14 sm:h-14",
      innerSize: "w-6 h-6 sm:w-8 sm:h-8",
      position: "absolute -top-4 left-4",
      gradient: "from-blue-400 to-blue-600",
      animation: "animate-float",
      delay: "0s",
    },
    {
      icon: Brain,
      size: "w-8 h-8 sm:w-12 sm:h-12",
      innerSize: "w-5 h-5 sm:w-7 sm:h-7",
      position: "absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2",
      gradient: "from-purple-400 to-purple-600",
      animation: "animate-float",
      delay: "0s",
    },
    {
      icon: Code,
      size: "w-8 h-8 sm:w-12 sm:h-12",
      innerSize: "w-5 h-5 sm:w-7 sm:h-7",
      position: "absolute -bottom-4 left-6",
      gradient: "from-orange-400 to-orange-600",
      animation: "animate-float",
      delay: "1.5s",
    },
    {
      icon: Monitor,
      size: "w-8 h-8 sm:w-10 sm:h-10",
      innerSize: "w-5 h-5 sm:w-6 sm:h-6",
      position: "absolute -bottom-2 right-6 sm:right-8",
      gradient: "from-indigo-400 to-indigo-600",
      animation: "animate-float",
      delay: "2s",
    },
    {
      icon: CreditCard,
      size: "w-8 h-8 sm:w-11 sm:h-11",
      innerSize: "w-5 h-5 sm:w-6 sm:h-6",
      position:
        " hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-8",
      gradient: "from-pink-400 to-pink-600",
      animation: "animate-float",
      delay: "1s",
    },
    {
      icon: Shield,
      size: "w-8 h-8 sm:w-11 sm:h-11",
      innerSize: "w-5 h-5 sm:w-6 sm:h-6",
      position:
        "hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-6 sm:-right-8",
      gradient: "from-teal-400 to-teal-600",
      animation: "animate-float",
      delay: "1.5s",
    },
    {
      icon: Zap,
      size: "w-7 h-7 sm:w-10 sm:h-10",
      innerSize: "w-4 h-4 sm:w-5 sm:h-5",
      position: "absolute top-1/4 left-2",
      gradient: "from-yellow-400 to-yellow-600",
      delay: "0.8s",
    },
    {
      icon: Database,
      size: "w-7 h-7 sm:w-10 sm:h-10",
      innerSize: "w-4 h-4 sm:w-5 sm:h-5",
      position: "absolute bottom-1/4 right-2",
      gradient: "from-red-400 to-red-600",
      animation: "animate-float",
      delay: "1.2s",
    },
  ];

  const items = [
    { icon: Shield, text: t("trusted") },
    { icon: Flag, text: t("vision") },
    { icon: Smartphone, text: t("software") },
    { icon: Monitor, text: t("professional") },
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero_bg.webp"
          alt="Hero background"
          fill
          priority
          quality={70}
          sizes="(max-width: 768px) 100vw, 1920px"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-bl from-black/70 via-black/90 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            {/* Heading */}
            <h1
              className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
           font-bold text-[#10b3bc] 
           mb-4 sm:mb-6 
           leading-snug sm:leading-tight lg:leading-[1.2] "
            >
              <span className="text-secondary-blue">{t("title")}</span>
            </h1>

            {/* Description */}
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl 
           text-white 
           mb-6 sm:mb-8 lg:mb-9 
           leading-relaxed sm:leading-loose lg:leading-[1.75] px-1"
            >
              {(() => {
                const subtitle = t("subtitle");
                const parts = subtitle.split(" — ");
                const firstPart = parts[0];
                const secondPart = parts[1] || "";

                const highlightTerms = (text: string) => {
                  return text
                    .replace(
                      /(application)/gi,
                      '<span class="text-secondary-blue font-bold">$1</span>'
                    )
                    .replace(
                      /(website)/gi,
                      '<span class="text-secondary-blue font-bold">$1</span>'
                    );
                };

                return (
                  <>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightTerms(firstPart),
                      }}
                    />
                    {parts.length > 1 && " — "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightTerms(secondPart),
                      }}
                    />
                  </>
                );
              })()}
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 ">
              {items.map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 
             bg-white/5 backdrop-blur-sm 
             p-3 rounded-lg 
             border border-white/20 
             hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-gradient-to-tr from-[#10b3bc]/40 to-[#10b3bc]/20 border border-white/20">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-100" />
                  </div>
                  <span className="text-blue-50 text-xs sm:text-sm font-medium leading-snug break-words text-start">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start mb-2">
              <button
                onClick={handleWhatsAppClick}
                className="relative flex items-center gap-3 rounded-full 
                       bg-green-600/90 px-8 py-3 text-white font-semibold 
                       shadow-[0_0_10px_rgba(16,185,129,0.6)] 
                       transition-all duration-300 
                       hover:scale-105"
              >
                <FaWhatsapp className="h-6 w-6 text-white" />
                <span className="text-sm md:text-base tracking-wide">
                  {t("cta")}
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Frames */}
          <div className="flex justify-center lg:justify-end animate-scale-in relative order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Floating Graphics */}
              <div className="absolute inset-0 pointer-events-none">
                {floatingIcons.map(
                  (
                    {
                      icon: Icon,
                      size,
                      innerSize,
                      position,
                      gradient,
                      animation,
                      delay,
                    },
                    i
                  ) => (
                    <div
                      key={i}
                      className={`${position} ${size} bg-white/90 rounded-2xl shadow-sm
                      
                      flex items-center justify-center z-30 ${animation}`}
                      style={{ animationDelay: delay }}
                    >
                      <div
                        className={`${innerSize} bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Frames */}
              <div className="relative z-20 flex items-end gap-2 sm:gap-3 justify-center">
                {/* Desktop Frame */}
                <div className="w-full max-w-xs sm:max-w-sm h-56 sm:h-64 lg:h-72 bg-white rounded-2xl sm:rounded-3xl sm:shadow-md p-2 sm:p-3">
                  <div className="w-full h-full bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden relative border border-gray-200 flex flex-col">
                    {/* Browser Header */}
                    <div className="bg-gray-100 h-8 sm:h-10 flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 border-b border-gray-200">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                      <div className="ml-2 sm:ml-4 flex-1 h-5 sm:h-6 bg-white rounded-lg text-xs text-gray-600 flex items-center px-2 sm:px-3 border border-gray-200">
                        www.yourbusiness.sa
                      </div>
                    </div>

                    {/* Desktop Content */}
                    <div className="flex-1 bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center text-center px-3 sm:px-4">
                      <h3 className="text-gray-700 text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                        {t("desktop_view")}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {t("desktop_text")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Frame */}
                <div className="w-24 sm:w-28 lg:w-32 h-40 sm:h-48 lg:h-56 bg-white rounded-2xl sm:rounded-3xl sm:shadow-xl p-1 border border-gray-200 relative">
                  <div className="w-full h-full bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden relative">
                    {/* Mobile Header */}
                    <div className="bg-gray-100 h-5 sm:h-6 flex items-center justify-center border-b border-gray-200">
                      <div className="w-6 sm:w-8 h-1 bg-gray-400 rounded-full"></div>
                    </div>

                    {/* Mobile Content */}
                    <div className="flex-1 bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center relative p-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary-blue rounded-full flex items-center justify-center mb-2"></div>
                      <div className="flex items-center space-x-1 mb-2">
                        <Smartphone className="w-2 h-2 sm:w-3 sm:h-3 text-gray-600" />
                        <span className="text-gray-600 text-xs">Mobile</span>
                      </div>
                      <div className="w-full space-y-1">
                        <div className="h-1 bg-secondary-blue/30 rounded w-full"></div>
                        <div className="h-1 bg-gray-300 rounded w-3/4 mx-auto"></div>
                        <div className="h-6 sm:h-8 bg-gray-200 rounded-lg border border-gray-300"></div>
                        <div className="flex space-x-1">
                          <div className="flex-1 h-2 sm:h-3 bg-secondary-blue/30 rounded"></div>
                          <div className="flex-1 h-2 sm:h-3 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
