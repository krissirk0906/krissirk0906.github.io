/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    images: {
      unoptimized: true,
    }
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/krissirk0906.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/krissirk0906.github.io' : '',
  trailingSlash: true,
  distDir: 'out'
}

export default nextConfig
