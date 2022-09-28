import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
}

export type CardFooterProps = UIStyledComponentProps<Props>;

export const CardFooter = styled.div<CardFooterProps>`
  flex: 0 0 4em;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-neutral-100);
  ${props => getCssResponsive(props)}
`;
