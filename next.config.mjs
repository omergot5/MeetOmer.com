/**
 * Next.js configuration.
 *
 * The site is built as a static export so it can be served from GitHub Pages,
 * Vercel, Netlify, or any static host.
 *
 * For GitHub Pages PROJECT pages (e.g. served at
 * https://<user>.github.io/<repo>/), set NEXT_PUBLIC_BASE_PATH=/<repo> at build
 * time. For USER pages (https://<user>.github.io/) or Vercel, leave it empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
