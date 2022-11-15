const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  staticDirs: [
    './../public',
  ],
  typescript: { reactDocgen: false },
  features: {
    previewMdx2: true, // 👈 MDX 2 enabled here
  },
  /*
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  */
  /*
  webpackFinal: (config) => {
    // Fix that allows to fix storybook issues with core-js
    // https://github.com/storybookjs/storybook/issues/11255
    config.resolve.alias['core-js'] = path.dirname(require.resolve('core-js'));
    config.resolve.alias['@strapi/icons'] = path.dirname(require.resolve('../../strapi-icons/dist'));
    return config;
  },
  */
  webpackFinal: async (config) => {
    // configure for absolute imports
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    // disable whatever is already set to load SVGs
    config.module.rules
      .filter(rule => rule.test.test('.svg'))
      .forEach(rule => rule.exclude = /\.svg$/i);
    // add SVGR instead
    config.module.rules.push({
      test: /\.svg$/i,
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
        }
      ],
      type: 'javascript/auto',
      issuer: { and: [/\.(js|ts|md)x?$/] },
    });
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
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  }
}
