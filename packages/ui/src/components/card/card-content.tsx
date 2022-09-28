import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
}

export type CardContentProps = UIStyledComponentProps<Props>;

export const CardContent = styled.div<CardContentProps>`
  position: relative;
  ${props => getCssResponsive(props)}
`;
