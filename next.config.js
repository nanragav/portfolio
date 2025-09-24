/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : undefined,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  
  // Additional configuration for GitHub Pages
  webpack: (config) => {
    return config
  },
}

module.exports = nextConfig