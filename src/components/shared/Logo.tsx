"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "navbar" | "footer";
  className?: string;
}

export const Logo = ({ variant = "navbar", className = "" }: LogoProps) => {
  const isNavbar = variant === "navbar";

  return (
    <Link
      href="/"
      className={`flex items-center py-2 group cursor-pointer ${className}`}
    >
      <div
        className={`relative transition-all duration-300 group-hover:scale-105 rounded-2xl shadow-md border border-gray-100 bg-white overflow-hidden ${
          isNavbar ? "h-12 w-40 p-2" : "h-16 w-48 p-3 shadow-xl border-white/10"
        }`}
      >
        <Image
          src="/images/Branding/Logo.jpeg"
          alt="AppTek Logo"
          fill
          className="object-contain"
          priority={isNavbar}
        />
      </div>
    </Link>
  );
};
