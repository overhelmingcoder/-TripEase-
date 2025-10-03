/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    domains: ['openweathermap.org'],
    unoptimized: true
  },
  
  // Enable experimental features for better performance
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  },
};

export default nextConfig;
