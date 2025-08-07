/** @type {import('next').NextConfig} */
import createBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? createBundleAnalyzer({ enabled: true })
  : (config) => config;

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
  // Cloudflare Pages optimizations
  images: {
    unoptimized: true,
  },
  // Performance optimizations for Cloudflare
  compress: true,
  generateEtags: false,
}

export default withBundleAnalyzer(nextConfig)
