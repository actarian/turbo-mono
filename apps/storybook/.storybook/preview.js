// import { themes } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { CartProvider, LabelProvider, LayoutProvider, PageProvider } from '@websolute/hooks';
import { LayoutDefaults, PageDefaults } from '@websolute/mock';
import { GlobalStyle, theme } from '@websolute/ui';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
// import themeJson from '../src/@styles/theme.json';
import Head from 'next/head';
import { createCustomTheme } from './utils/create-custom-theme';

const themeJson = theme;

const layout = LayoutDefaults;

const page = PageDefaults;

addDecorator((story) => (
  <>
    <LayoutProvider layout={ layout }>
      <LabelProvider>
        <PageProvider page={ page }>
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;700&display=swap" rel="stylesheet"></link>
          </Head>
          <GlobalStyle />
          <CartProvider>
            { story() }
          </CartProvider>
        </PageProvider>
      </LabelProvider>
    </LayoutProvider>
  </>
));

const themes = [theme];
addDecorator(withThemesProvider(themes, ThemeProvider));

// import '@styles/globals.scss';

export const parameters = {
  docs: {
    theme: createCustomTheme({ theme: themeJson, options: { base: 'light' } }),
  },
  options: {
    storySort: {
      method: 'alphabetical',
      // order: ['Introduction', 'Styleguide', 'Atoms', 'Molecules', 'Organisms'],
      order: ['Introduction', 'Styleguide', 'Typography', 'Colors', 'Icons', 'Components', 'Forms', 'Sections', 'Pages'],
      locales: 'en-US',
    },
    showPanel: false,
  },
  backgrounds: {
    disable: true,
    grid: {
      disable: true,
    }
  },
  /*
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },
  */
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: false,
    /*
    presetColors: [{ color: '#ff4785', title: 'Coral' }, 'rgba(0, 159, 183, 1)', '#fe4a49'],
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    */
  },
  nextRouter: {
    query: {
      foo: 'this-is-a-global-override',
    },
  },
}
