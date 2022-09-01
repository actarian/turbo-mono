import { css } from 'styled-components';
import { eachMedia } from '../components/utils';

export const CssTypography = css`
html,
body {
  font-family: var(--font-primary-family);
  ${props => eachMedia(props, (key: string) => (
  `font-size: var(--base-font-size-${key});`
))}
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
