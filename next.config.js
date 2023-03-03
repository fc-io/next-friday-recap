/** @type {import('next').NextConfig} */
const path = require('path');

console.log('styles', path.join(__dirname, 'styles'))
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
