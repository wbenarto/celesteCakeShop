/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  optimizeFonts: false,
  swcMinify: false,
  webpack(config) {
    config.infrastructureLogging = {debug: /PackFileCache/}
    return config;
  }
}

module.exports = nextConfig
