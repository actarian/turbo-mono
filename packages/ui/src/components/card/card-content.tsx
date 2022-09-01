import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
}

export type CardContentProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

export const CardContent = styled.div<CardContentProps>`
  position: relative;
  ${props => getCssResponsive(props)}
`;
