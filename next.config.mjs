/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/krissirk0906.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/krissirk0906.github.io' : '',
  trailingSlash: true,
  distDir: 'out',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  }
}

export default nextConfig
