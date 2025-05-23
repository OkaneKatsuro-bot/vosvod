/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "cabinet.vosvod.spb.ru",
                pathname: "/**",
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://vosvod-backend.onrender.com/api/:path*',
            },
        ];
    }


}

export default nextConfig
