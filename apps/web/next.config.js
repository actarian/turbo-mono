// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranspileModules = require('next-transpile-modules');

const transpiledModules = nextTranspileModules([
  '@websolute/core',
  '@websolute/forms',
  '@websolute/hooks',
  '@websolute/icons',
  '@websolute/models',
  '@websolute/store',
  '@websolute/ui'
], { resolveSymlinks: false });

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(transpiledModules({
  reactStrictMode: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  images: {
    domains: [
      'unsplash.com',
      'picsum.photos',
      'i.pravatar.cc',
      process.env.IMAGE_DOMAIN,
    ]
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      pure: true,
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [{
                name: 'preset-default',
                params: {
                  overrides: { removeViewBox: false },
                },
              }],
            },
            titleProp: true,
          },
        },
      ],
    });
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
  // Docker support: build the project as a standalone app inside the Docker image
  output: 'standalone'
}));
