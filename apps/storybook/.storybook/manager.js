import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { theme } from '@websolute/ui';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
// import themeJson from '../../../packages/ui/src/styles/theme.json';
import { createCustomTheme } from './utils/create-custom-theme';

const themeJson = theme;
const themes = [theme];
addDecorator(withThemesProvider(themes, ThemeProvider));

// import '@styles/globals.scss';

addons.setConfig({
  theme: createCustomTheme({ theme: themeJson, options: { base: 'light' } }),

  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
    renderLabel: ({ name, type }) => (type === 'story' ? name : name),
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },

});
