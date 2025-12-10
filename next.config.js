/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = '/E-Portfolio'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? basePath : '',
  assetPrefix: isProd ? basePath : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

