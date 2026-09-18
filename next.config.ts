import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/events",
        destination: "/special-offers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
