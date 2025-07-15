// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
};

export default nextConfig; // ✅ valid in .mjs





