/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "upload.wikimedia.org", "cdn.sanity.io", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig
