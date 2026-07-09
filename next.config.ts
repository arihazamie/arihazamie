import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Compression & Security ─────────────────────────────────────────
  compress: true,
  poweredByHeader: false,

  // ── Image Optimisation ────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2_592_000, // 30 days
  },

  // ── Bundle Optimisation ───────────────────────────────────────────
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;