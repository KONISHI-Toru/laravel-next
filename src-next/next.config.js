/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL : 'http://laravel-next.thn.local:8000/',
  },
}

module.exports = nextConfig
