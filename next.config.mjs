/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? '/krissirk0906.github.io' : ''
const assetBath = isProduction ? '/krissirk0906.github.io/' : ''

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
  output: 'export',
  // Only apply basePath in production
  basePath: isProduction ? basePath : '',
  // Remove assetPrefix as it's causing issues with static assets
  assetPrefix: isProduction ? assetBath : '',
  // Remove trailingSlash as it can cause issues with static exports
  trailingSlash: false,
  // Ensure static assets are properly handled
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    // Ensure CSS modules are properly handled
    return config
  },
  // Add experimental features for better static export
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  // Add custom headers for static assets
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
