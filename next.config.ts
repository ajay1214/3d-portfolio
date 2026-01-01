import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "@react-pdf-viewer/core",
      "recharts",
      "three-globe",
    ],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },

  async headers() {
    return [
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // 🔥 THIS IS THE CRITICAL FIX
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      canvas: false, // ⛔ prevents pdfjs from resolving native canvas
    };
    return config;
  },
};

export default nextConfig;
