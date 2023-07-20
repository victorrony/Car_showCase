/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  
  typescript: {
    ignoreBuildErrors: true, // TODO remove this once fixed in NextJS v12+
  }
};

module.exports = nextConfig
