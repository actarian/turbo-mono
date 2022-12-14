import styled from 'styled-components';
import { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
};

export type FlexRowProps = UIStyledComponentProps<Props>;

export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  align-items: center;
  // width: 100%;
  // flex-wrap: wrap;
  // margin: 0 auto;
  gap: 0.5rem;
  ${props => getCssResponsive(props)}
`;
