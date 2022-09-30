import styled, { css } from 'styled-components';
import type { ThemeProps, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { sizes } from '../../styles';
import { GridRow } from './grid-row';

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export type GridProps = UIStyledComponentProps<Props>;

export const Grid = styled.div<GridProps & ThemeProps>`
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

function getMediaQueryColumn(props: GridProps & ThemeProps) {
  const theme = props.theme;
  return sizes.map(size => {
    const key = size as keyof GridProps;
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

(Grid as IGrid).Row = GridRow;

export default Grid as IGrid;

type IGrid = typeof Grid & {
  Row: typeof GridRow;
};
