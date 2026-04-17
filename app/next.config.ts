import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ktoolengineering.com" }],
        destination: "https://www.ktoolengineering.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
