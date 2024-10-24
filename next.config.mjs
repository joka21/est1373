// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      formats: ['image/webp'],
      minimumCacheTTL: 60,
    },
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
  }
  
  export default nextConfig