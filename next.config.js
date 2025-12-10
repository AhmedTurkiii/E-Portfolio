/** @type {import('next').NextConfig} */
const basePath = '/E-Portfolio'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

