/** @type {import('next').NextConfig} */

//will need to update child to include external calls e.g. fonts etc
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';  
`

const securityHeaders = [
    {
      key: 'Cache-Control',
      value: 'private', //no-store
    },
    { //unnecessary - default with hosting on Vercel
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload'
    },
    {//unnecessary if using content policy... else good to use
      key: 'X-XSS-Protection',
      value: '1; mode=block'
    },
    {//disallow others to put in an iframe
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN'
    },
    {//prevent access to following hardware
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
    },
    {//when uploading e.g. images don't allow e.g. executibles to be uploaded
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'Referrer-Policy',
      value: 'origin-when-cross-origin'
    },
    {
      key: 'Content-Security-Policy',
      value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
    },
    //more headers
]

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/secure/:path*', //where :path* is a wildcard path
        headers: securityHeaders
      },
      //more sources
    ]
  },
  //more configs
}

module.exports = nextConfig
