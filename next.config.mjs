/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.doubanio.com",
      },
      {
        protocol: "https",
        hostname: "647bc185.szrtcpa.com",
      },
      {
        protocol: "https",
        hostname: "img9.doubanio.com",
      },
    ],
  },
};

export default nextConfig;
