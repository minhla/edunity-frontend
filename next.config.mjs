// import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ protocol: "https", hostname: "utfs.io" }],
  },
};

export default nextConfig;
