/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xfojwfbxxibqwhilyycs.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // Serve WebP/AVIF — typically 30-70% smaller than PNG/JPEG
    formats: ['image/avif', 'image/webp'],
    // Cache optimised images for 30 days on the CDN/browser
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Device breakpoints used when generating srcset
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
