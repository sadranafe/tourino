/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'http',
                hostname : 'localhost',
                port : '6500',
                pathname : '/**',
            },
            {
                protocol : 'https',
                hostname : 'tourino-api-production.up.railway.app',
                pathname : '/**',
            }
        ],
    },
};

export default nextConfig;
