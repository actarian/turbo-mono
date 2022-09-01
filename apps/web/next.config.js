// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranspileModules = require('next-transpile-modules');

const transpiledModules = nextTranspileModules(['ui'], { resolveSymlinks: false });

module.exports = transpiledModules({
  reactStrictMode: true,
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
    return config;
  }
});
