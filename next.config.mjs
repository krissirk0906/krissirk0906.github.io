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
  // Ensure static assets are properly handled
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  },
  // Add experimental features for better static export
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  // Add custom 404 page configuration
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/_not-found',
        permanent: false,
      },
    ]
  }
}

export default nextConfig
