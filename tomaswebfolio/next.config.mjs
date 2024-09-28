/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                pathname: '/512/**', // Path to match any image under /512/
            },
        ],
    },

};

export default nextConfig;
