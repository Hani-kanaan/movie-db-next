import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ['image.tmdb.org'],
  },
};


export default nextConfig;
