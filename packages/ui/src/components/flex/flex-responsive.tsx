import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
}

export type FlexResponsiveProps = UIStyledComponentProps<Props>;

export const FlexResponsive = styled.div<FlexResponsiveProps>`
  display: flex;
  width: 100%;
  margin: 0 auto;
  gap: 0.5rem;

  @media (max-width: 399.9px) {
    flex-direction: column;
    justify-content: stretch;
  }

  @media (min-width: 400px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  ${props => getCssResponsive(props)}
`;
