import { css } from 'styled-components';
import { eachMedia } from '../components/utils';

export const CssTypography = css`
html,
body {
  font-family: var(--font-primary-family);
  line-height: 1.5;
  ${props => eachMedia(props, (key: string) => `font-size: var(--base-font-size-${key});`)}
}

body {
  background: var(--color-neutral-100);
  color: var(--color-neutral-700);
}

/*
* {
  outline-offset: 0.2rem;
  &:focus-visible {
    outline: 2px solid var(--color-primary-200);
  }
}
*/

`;
