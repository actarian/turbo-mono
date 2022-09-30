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

module.exports = transpiledModules({
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      pure: true,
    },
  },
  images: {
    domains: [
      'unsplash.com'
    ]
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
    return config;
  },
  // Docker support: build the project as a standalone app inside the Docker image
  output: 'standalone'
});
