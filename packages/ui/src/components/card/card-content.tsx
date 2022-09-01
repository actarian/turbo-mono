import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getCssResponsive } from '@ui-components/utils';
import styled from 'styled-components';

type Props = {
}

export type CardContentProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

export const CardContent = styled.div<CardContentProps>`
  position: relative;
  ${props => getCssResponsive(props)}
`;
