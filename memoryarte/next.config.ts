import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'memoriarte.vercel.app',
            },
        ],
    },
    /* config options here */
    reactStrictMode: true,
};

export default nextConfig;
