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

}

export default nextConfig
