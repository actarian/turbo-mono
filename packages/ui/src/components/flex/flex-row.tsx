import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getCssResponsive } from '@ui-components/utils';
import styled from 'styled-components';

type Props = {
}

export type FlexRowProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  align-items: center;
  // width: 100%;
  // flex-wrap: wrap;
  // margin: 0 auto;
  gap: 0.5rem;
  ${props => getCssResponsive(props)}
`;
