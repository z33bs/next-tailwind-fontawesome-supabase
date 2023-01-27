/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:loggedIn*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
          //more headers
        ],
      },
      //more sources
    ]
  },
  //more configs
}

module.exports = nextConfig
