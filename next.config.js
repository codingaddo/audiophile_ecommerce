/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Allow production builds to complete even if there are
    // type errors in the project. These errors will still appear
    // in the console output but they won’t fail the build.
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig;
