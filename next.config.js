/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],
  },
}

module.exports = nextConfig