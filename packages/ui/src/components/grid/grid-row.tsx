import styled from 'styled-components';
import { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive, getGrid } from '../../components/utils';

export type GridRowBaseProps = {
  columns?: string;
  size?: string;
  columnGap?: string;
  rowGap?: string;
}

export type GridRowProps = UIStyledComponentProps<GridRowBaseProps>;

export const GridRow = styled.div<GridRowProps>`
  ${props => getCssResponsive(props)}
  ${props => getGrid(props)}
`;
