/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com", "localhost"],
  },
  swcMinify: true,

}


module.exports = nextConfig
