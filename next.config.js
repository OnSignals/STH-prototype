/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swrDelta: 60,
    },

    async headers() {
        if (process.env.NODE_ENV !== 'production') {
            return [];
        }

        // cache headers for /public/*
        return [
            {
                source: '/:all*(css|js|gif|svg|jpg|jpeg|png|woff|woff2|mp4|mp3|webp|webm|glb|gltf)',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
