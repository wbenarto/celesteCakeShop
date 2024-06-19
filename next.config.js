/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  swcMinify: false,
  eslint: {
    dirs: ["src"],
  },
  webpack(config) {
    config.infrastructureLogging = {debug: /PackFileCache/}
    return config;
  }
}

module.exports = nextConfig
