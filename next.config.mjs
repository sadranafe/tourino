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
                hostname : 'vigilant-wholeness-production-18fc.up.railway.app',
                pathname : '/**',
            }
        ],
    },
};

export default nextConfig;
