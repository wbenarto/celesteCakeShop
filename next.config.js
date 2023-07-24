/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  swcMinify: false,
  webpack(config) {
    config.infrastructureLogging = {debug: /PackFileCache/}
    return config;
  }
}

module.exports = nextConfig
