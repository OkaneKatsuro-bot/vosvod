/** @type {import('next').NextConfig} */
const nextConfig = {
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    images: {
        domains: ['assets.aceternity.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "storage.yandexcloud.net",
                pathname: "/**",
            },
        ],
    },
    async headers() {
        return [
            {
                source: "/api/:path*", // Настройки для всех API-роутов
                headers: [
                    {key: "Cache-Control", value: "no-store, no-cache, must-revalidate, proxy-revalidate"},
                ],
            },
        ];
    },
};

module.exports = nextConfig;