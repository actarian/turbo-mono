import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getCssResponsive } from '@ui-components/utils';
import { sizes } from '@ui-styles';
import styled, { css } from 'styled-components';
import { GridRow } from './grid-row';

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export type GridProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

export const Grid = styled.div<GridProps>`
  // default grid column
  grid-column: span var(--grid-columns);

  /*
  ${props => (props.justifyContent || props.alignItems) ? css`
    display: flex;
  ` : ''}
  */

  // get media query column
  ${props => getMediaQueryColumn(props)}
  ${props => getCssResponsive(props)}
`;

function getMediaQueryColumn(props: GridProps) {
  const theme = props.theme;
  return sizes.map(size => {
    const key = size as keyof GridProps;
    const columns = props[key];
    if (typeof columns === 'number' && theme.mediaQuery) {
      const width = theme.mediaQuery[key];
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

(Grid as IGrid).Row = GridRow;

export default Grid as IGrid;

type IGrid = typeof Grid & {
  Row: typeof GridRow;
};
