import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    qualities: [70],
    formats: ["image/webp"],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
