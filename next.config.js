/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.immediate.co.uk',
      'drive.google.com',
      'upload.wikimedia.org',
    ],
  },
}

module.exports = nextConfig
