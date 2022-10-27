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

module.exports = transpiledModules({
  reactStrictMode: true,
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
  }
});
