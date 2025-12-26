/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['knowedigitech.com', 'images.unsplash.com', 'picsum.photos'],
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
