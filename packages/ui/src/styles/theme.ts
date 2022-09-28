import theme from './theme.json';

const customTheme = theme;

export { customTheme as theme };

export type ITheme = typeof customTheme;
