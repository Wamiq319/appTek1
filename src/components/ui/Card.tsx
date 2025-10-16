"use client";

import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  backgroundImage: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  backgroundImage,
}) => {
  return (
    <div className="group relative h-72 overflow-hidden rounded-2xl shadow-md sm:shadow-lg transition-all duration-300 sm:hover:-translate-y-1 sm:hover:shadow-xl">
      {/* Background Image (optimized) */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 sm:group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 400px"
        priority={false}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-5 text-white">
        {/* Icon */}
        <div className="flex justify-start">
          <div className="w-12 h-12 bg-white/20 sm:backdrop-blur-sm rounded-full flex items-center justify-center sm:group-hover:bg-[#10b3bc]/30">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="mt-auto">
          <h3 className="text-2xl font-bold text-[#10b3bc] mb-2 drop-shadow-md">
            {title}
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
