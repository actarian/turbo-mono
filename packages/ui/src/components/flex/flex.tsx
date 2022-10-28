import { withSchema } from '@websolute/core';
import styled from 'styled-components';
import { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { FlexCol } from './flex-col';
import { FlexFlow } from './flex-flow';
import { FlexResponsive } from './flex-responsive';
import { FlexRow } from './flex-row';

type Props = {
}

export type FlexProps = UIStyledComponentProps<Props>;

const FlexBase = styled.div<FlexProps>`
  display: flex;
  // flex-direction: column;
  // justify-content: center;
  align-items: center;
  ${props => getCssResponsive(props)}
`;

export const Flex = withSchema(FlexBase, {
  Row: FlexRow,
  Col: FlexCol,
  Responsive: FlexResponsive,
  Flow: FlexFlow,
  displayName: 'Flex',
});
