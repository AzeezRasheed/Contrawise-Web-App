/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // plugins: ["babel-plugin-macros"],

  // webpack: (config, { isServer }) => {
  //   // Set the Node.js target for the client build
  //   if (!isServer) {
  //     config.target = "node";
  //   }

  //   // Add the '.ts' and '.tsx' extensions to the resolver
  //   config.resolve.extensions.push(".ts", ".tsx");

  //   // Add the 'src' directory to the resolver

  //   return config;
  // },


  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
