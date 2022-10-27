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
      // namespace: 'theme',
    },
    /*
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: boolean | {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName?: boolean,
      // Enabled by default.
      ssr?: boolean,
      // Enabled by default.
      fileName?: boolean,
      // Empty by default.
      topLevelImportPaths?: string[],
      // Defaults to ["index"].
      meaninglessFileNames?: string[],
      // Enabled by default.
      cssProp?: boolean,
      // Empty by default.
      namespace?: string,
      // Not supported yet.
      minify?: boolean,
      // Not supported yet.
      transpileTemplateLiterals?: boolean,
      // Not supported yet.
      pure?: boolean,
    },
    */
  },
  /*
  experimental: {
    forceSwcTransforms: true,
  },
  */
  webpack(config) {
    /*
    config.module.rules.push({
      test: /\.css$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: 'raw-loader'
        },
      ],
    });
    */
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
