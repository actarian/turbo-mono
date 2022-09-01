import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getCssResponsive } from '@ui-components/utils';
import styled from 'styled-components';

type Props = {
}

export type CardFooterProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

export const CardFooter = styled.div<CardFooterProps>`
  flex: 0 0 4em;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-neutral-100);
  ${props => getCssResponsive(props)}
`;
