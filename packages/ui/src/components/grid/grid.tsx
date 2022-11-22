import { withSchema } from '@websolute/core';
import styled, { css } from 'styled-components';
import { ThemeProps, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { sizes } from '../../styles';
import { GridRow } from './grid-row';

type GridBaseProps = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type GridProps = UIStyledComponentProps<GridBaseProps>;

const GridBase = styled.div<GridProps & ThemeProps>`
  // default grid column
  grid-column: span var(--grid-columns);

  ${props => (props.justifyContent || props.alignItems) ? css`
    display: flex;
    flex-direction: column;
  ` : ''}

  // get media query column
  ${props => getMediaQueryColumn(props)}
  ${props => getCssResponsive(props)}
`;

export const Grid = withSchema(GridBase, {
  Row: GridRow,
  displayName: 'Grid',
});

function getMediaQueryColumn(props: GridBaseProps & ThemeProps) {
  const theme = props.theme;
  return sizes.map(size => {
    const key = size as keyof GridBaseProps;
    const columns = props[key];
    if (typeof columns === 'number' && theme.mediaQuery) {
      const width = theme.mediaQuery[key as keyof typeof theme.mediaQuery];
      return key === 'xs' ?
        `grid-column: span ${columns};
        ` : `
        @media(min-width: ${width}px) {
          grid-column: span ${columns};
        }
      `;
    } else {
      return '';
    }
  }).join('\n');
}
