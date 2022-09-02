import { create } from '@storybook/theming/create';

export const createCustomTheme = ({ theme, options = {} }) => {

  const themeValue = {
    // UI
    appBg: '#ffffff', // theme.colors.neutral100,
    appBorderColor: 'rgba(0,0,0,.1)', // theme.colors.neutral200,
    appBorderRadius: 2,
    appContentBg: '#ffffff', // theme.colors.neutral900,

    // Text colors
    textColor: '#333333', // theme.colors.neutral800,
    textInverseColor: '#ffffff',
    textMutedColor: "#888888",

    // color
    colorPrimary: "#00ff00",
    colorSecondary: "#0000ff",

    // Toolbar default and active colors
    barBg: '#ffffff', // theme.colors.neutral900,
    barSelectedColor: '#000000', // theme.colors.primary600,
    barTextColor: '#000000', // theme.colors.neutral800,

    // Font
    fontBase: "\"Nunito Sans\", -apple-system, \".SFNSText-Regular\", \"San Francisco\", BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    fontCode: "ui-monospace, Menlo, Monaco, \"Roboto Mono\", \"Oxygen Mono\", \"Ubuntu Monospace\", \"Source Code Pro\", \"Droid Sans Mono\", \"Courier New\", monospace",

    // input
    inputBg: "#FFFFFF",
    inputBorder: "rgba(0,0,0,.3)",
    inputBorderRadius: 2,
    inputTextColor: "#333333",

    base: "light",

    ...options,
  };

  return create(themeValue);
}
