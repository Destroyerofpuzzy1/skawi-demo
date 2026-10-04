import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Polish lives at "/", other languages at /en and /ua.
  async rewrites() {
    return [
      { source: "/", destination: "/pl" },
      { source: "/polityka-prywatnosci", destination: "/pl/polityka-prywatnosci" },
    ];
  },
  async redirects() {
    return [{ source: "/pl", destination: "/", permanent: true }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
