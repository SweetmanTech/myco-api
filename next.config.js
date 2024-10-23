/* eslint-disable no-param-reassign */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i1.sndcdn.com',
      },
      {
        hostname: 'i.scdn.co',
      },
      {
        hostname: '*.cloudfront.net',
      },
      {
        hostname: 'soundcloud.com',
      },
      {
        hostname: 'imagedelivery.net',
      },
      {
        hostname: 'i.imgur.com',
      },
      {
        hostname: 'ipfs.decentralized-content.com',
      },
      {
        hostname: 'i.seadn.io',
      },
      {
        hostname: 'arweave.net',
      },
      {
        hostname: 'static.highongrowth.xyz',
      },
    ],
  },
  async headers() {
    return [
      {
        // Routes this applies to
        source: "/api/(.*)",
        // Headers
        headers: [
          // Allow for specific domains to have access or * for all
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          // Allows for specific methods accepted
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
