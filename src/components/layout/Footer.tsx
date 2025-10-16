"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export const Footer = () => {
  const t = useTranslations("homePage.footer");
  const locale = useLocale();
  return (
    <footer className="bg-[#0A7C7C] text-white pt-16 pb-8 px-6 lg:px-20 rounded-t-2xl">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{t("brand.title")}</h2>
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            {t("brand.desc")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {t("quickLinks.title")}
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="#" className="hover:text-white">
                {t("quickLinks.home")}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                {t("quickLinks.services")}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                {t("quickLinks.about")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                {t("quickLinks.contact")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("contact.title")}</h3>
          <ul className="space-y-2 text-gray-200 text-sm sm:text-base">
            <li>{process.env.NEXT_PUBLIC_WHATSAPP_SUPPORT}</li>
            <li>{process.env.NEXT_PUBLIC_EMAIL_SUPPORT}</li>
            <li>{t("contact.location")}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">
            {t("contact.businessAdministrator")}
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm sm:text-base">
            <li>{process.env.NEXT_PUBLIC__WHATSAPP_ADMIN}</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("social.title")}</h3>
          <div
            className={`flex gap-4 ${
              locale === "ar"
                ? "justify-center md:justify-end"
                : "justify-center md:justify-start"
            }`}
          >
            <a
              href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-[#0A7C7C] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-[#0A7C7C] transition"
            >
              <FaTwitter />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-[#0A7C7C] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-200 text-sm sm:text-base">
        <p>
          © {new Date().getFullYear()} {t("brand.title")}. {t("bottom.rights")}
        </p>
      </div>
    </footer>
  );
};
