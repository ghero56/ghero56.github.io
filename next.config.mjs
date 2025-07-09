/*
 * @type {import('next').NextConfig}
 *
 */
const nextConfig = {
  output: "standalone",
  distDir: "build",
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
