/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'assets.algoexpert.io',
        port: '',
      },
    ],
  },
  experimental: {
    reactCompiler: true,
  },
}

module.exports = nextConfig
