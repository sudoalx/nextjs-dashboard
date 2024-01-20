const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com"
            }
        ],
    },

}

module.exports = nextConfig
