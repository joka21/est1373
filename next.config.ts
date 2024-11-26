import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    WC_CONSUMER_KEY: process.env.WC_CONSUMER_KEY || "",
    WC_CONSUMER_SECRET: process.env.WC_CONSUMER_SECRET || "",
  },
  reactStrictMode: true, // Empfohlen für besseres Debugging
  
};

export default nextConfig;


