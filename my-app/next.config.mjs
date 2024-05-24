/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@0xsquid/widget"],
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
    images: {
        domains: ['www.pngall.com', 'png.pngtree.com', 'cryptologos.cc', 'assets-global.website-files.com'], // Add other allowed hostnames if needed
      },
};



export default nextConfig;
