/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "upload.wikimedia.org", "cdn.sanity.io",],
  },
};

module.exports = nextConfig
