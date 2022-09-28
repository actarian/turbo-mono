import styled from 'styled-components';
import type { GridProps, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive, getGrid } from '../../components/utils';

type Props = {
}

export type GridRowProps = UIStyledComponentProps<Props & GridProps>;

export const GridRow = styled.div<GridRowProps>`
  ${props => getCssResponsive(props)}
  ${props => getGrid(props)}
`;
