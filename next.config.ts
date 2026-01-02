/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  domains: ['res.cloudinary.com'],
  remotePatterns: [
    {
      protocol: "https",
      hostname: "*.graphassets.com",
    },
  ],
},
};

module.exports = nextConfig;