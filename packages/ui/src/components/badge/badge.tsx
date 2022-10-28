import styled from 'styled-components';
import { UIStyledComponentProps } from '../types';
import { getCssResponsive } from '../utils';

type Props = {
};

export type BadgeProps = UIStyledComponentProps<Props>;

export const Badge = styled.div<BadgeProps>`
  display: inline-block;
  line-height: 1;
  padding: 0.3em 0.5em;
  border-radius: 0.65em;
  font-size: 0.7rem;
  min-width: 1.2em;
  text-align: center;
  background: var(--color-neutral-700);
  color: var(--color-neutral-100);
  ${props => getCssResponsive(props)}
`;
