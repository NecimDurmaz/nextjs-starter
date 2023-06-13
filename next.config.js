/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "erspublic.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "elektrawebfiles.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "www.elektraweb.com",
      },
      {
        protocol: "https",
        hostname: "elektrawebfiles.cdn.elektraweb.com",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
