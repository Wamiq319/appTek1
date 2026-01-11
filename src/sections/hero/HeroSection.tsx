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
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export type Region = "saudi" | "northAmerica" | "global" | "saudi-gulf-arabic";

interface HeroSectionProps {
  region?: Region;
}

export const HeroSection = ({ region = "saudi" }: HeroSectionProps) => {
  const translationKey = region === "saudi-gulf-arabic" ? "saudi" : region;
  const t = useTranslations(`homePage.hero.${translationKey}`);

  // Region-based background images
  const backgroundImages = {
    saudi: "/images/hero/saudi_gulf.jpg",
    northAmerica: "/images/hero/northamerica.jpg",
    global: "/images/hero/global.jpg",
    "saudi-gulf-arabic": "/images/hero/saudi_gulf.jpg",
  };

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
    { icon: Shield, text: t("badge1") },
    { icon: Flag, text: t("badge2") },
    { icon: Smartphone, text: t("badge3") },
    { icon: Monitor, text: t("badge4") },
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

  const handleEmailClick = () => {
    const email = process.env.NEXT_PUBLIC_EMAIL_SUPPORT;
    if (!email) return;
    window.location.href = `mailto:${email}`;
  };

  const isSaudi = region === "saudi" || region === "saudi-gulf-arabic";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImages[region]}
          alt="Hero background"
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Improved Overlay for better contrast and premium feel - Lowered opacity as requested */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-black/40 lg:to-black/10" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div
          className={`grid ${
            isSaudi ? "lg:grid-cols-2" : "grid-cols-1"
          } gap-4 sm:gap-6 lg:gap-8 items-center`}
        >
          {/* Left Content */}
          <div
            className={`${
              isSaudi
                ? "text-center lg:text-left"
                : "text-center max-w-4xl mx-auto"
            } animate-fade-in order-2 lg:order-1`}
          >
            {/* Heading - Forced to 2 lines via <br /> in translation */}
            <h1
              className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
           font-bold text-white 
           mb-4 sm:mb-6 
           leading-snug sm:leading-tight lg:leading-[1.1]"
            >
              <span
                className="text-white"
                dangerouslySetInnerHTML={{ __html: t.raw("title") }}
              />
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg lg:text-xl 
           text-white 
           mb-8 sm:mb-10 
           leading-relaxed lg:leading-[1.5] px-1"
            >
              {(() => {
                const subtitle = t("subtitle");
                const highlightTerms = (text: string) => {
                  return text
                    .replace(
                      /(consulting|petroleum|supply chain|الاستشارات|البترول|سلاسل الإمداد)/gi,
                      '<span class="text-[#10b3bc] font-bold">$1</span>'
                    )
                    .replace(
                      /(website|websites|مواقع)/gi,
                      '<span class="text-[#10b3bc] font-bold">$1</span>'
                    );
                };

                return (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightTerms(subtitle),
                    }}
                  />
                );
              })()}
            </p>

            {/* Key Features - Redesigned Badges with Neon Glow */}
            <div
              className={`flex flex-wrap gap-3 mb-10 ${
                !isSaudi
                  ? "justify-center max-w-2xl mx-auto"
                  : "justify-center lg:justify-start"
              }`}
            >
              {items.map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 
             bg-black/20 backdrop-blur-md 
             px-5 py-2.5 rounded-full 
             border border-[#10b3bc]/30 
             shadow-[0_0_15px_rgba(16,179,188,0.2)]
             hover:shadow-[0_0_20px_rgba(16,179,188,0.4)]
             hover:border-[#10b3bc]/60 transition-all duration-300 group cursor-default"
                >
                  <Icon className="w-4 h-4 text-[#10b3bc] group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(16,179,188,0.8)]" />
                  <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA - WhatsApp for Saudi, Email for Others */}
            <div
              className={`flex ${
                isSaudi ? "justify-center lg:justify-start" : "justify-center"
              } mb-2`}
            >
              {isSaudi ? (
                <Button
                  variant="whatsapp"
                  size="xl"
                  onClick={handleWhatsAppClick}
                  className="gap-3"
                >
                  <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:rotate-12 transition-transform" />
                  <span className="tracking-wide uppercase">{t("cta")}</span>
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="xl"
                  onClick={handleEmailClick}
                  className="gap-3"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform" />
                  <span className="tracking-wide uppercase">{t("cta")}</span>
                </Button>
              )}
            </div>
          </div>

          {/* Right Content - Frames (Saudi Only) - Centered as requested */}
          {isSaudi && (
            <div className="flex justify-center lg:justify-center animate-scale-in relative order-1 lg:order-2">
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
                        className={`${position} ${size} bg-white/95 rounded-2xl shadow-xl
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
                  <div className="w-full max-w-xs sm:max-w-sm h-56 sm:h-64 lg:h-72 bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-2 sm:p-3 border border-white/20">
                    <div className="w-full h-full bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden relative border border-gray-200 flex flex-col">
                      {/* Browser Header */}
                      <div className="bg-gray-100 h-8 sm:h-10 flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 border-b border-gray-200">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                        <div className="ml-2 sm:ml-4 flex-1 h-5 sm:h-6 bg-white rounded-lg text-[10px] text-gray-400 flex items-center px-2 sm:px-3 border border-gray-200">
                          {t("domain")}
                        </div>
                      </div>

                      {/* Desktop Content */}
                      <div className="flex-1 bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center text-center px-3 sm:px-4">
                        <h3 className="text-gray-800 text-base sm:text-lg font-bold mb-2 sm:mb-3">
                          {t("desktop_view")}
                        </h3>
                        <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed">
                          {t("desktop_text")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Frame */}
                  <div className="w-24 sm:w-28 lg:w-32 h-40 sm:h-48 lg:h-56 bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-1 border border-white/20 relative">
                    <div className="w-full h-full bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden relative">
                      {/* Mobile Header */}
                      <div className="bg-gray-100 h-5 sm:h-6 flex items-center justify-center border-b border-gray-200">
                        <div className="w-6 sm:w-8 h-1 bg-gray-400 rounded-full"></div>
                      </div>

                      {/* Mobile Content */}
                      <div className="flex-1 bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center relative p-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#10b3bc] rounded-full flex items-center justify-center mb-2 shadow-lg shadow-[#10b3bc]/20"></div>
                        <div className="flex items-center space-x-1 mb-2">
                          <Smartphone className="w-2 h-2 sm:w-3 sm:h-3 text-gray-600" />
                          <span className="text-gray-600 text-[8px] sm:text-[10px] font-bold">
                            {t("mobile_view")}
                          </span>
                        </div>
                        <div className="w-full space-y-1">
                          <div className="h-1 bg-[#10b3bc]/30 rounded w-full"></div>
                          <div className="h-1 bg-gray-300 rounded w-3/4 mx-auto"></div>
                          <div className="h-6 sm:h-8 bg-gray-200 rounded-lg border border-gray-300 flex items-center justify-center">
                            <span className="text-[8px] text-gray-400">
                              App
                            </span>
                          </div>
                          <div className="flex space-x-1">
                            <div className="flex-1 h-2 sm:h-3 bg-[#10b3bc]/30 rounded"></div>
                            <div className="flex-1 h-2 sm:h-3 bg-gray-300 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
