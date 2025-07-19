import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        // is this redirect permanent?
        // yes - will always exist
        // no - page is temporarily unavailable
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
