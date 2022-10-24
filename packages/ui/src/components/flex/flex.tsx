import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { FlexCol } from './flex-col';
import FlexFlow from './flex-flow';
import { FlexResponsive } from './flex-responsive';
import { FlexRow } from './flex-row';

export type FlexProps = UIStyledComponentProps<Props>;

const Flex = styled.div<FlexProps>`
  display: flex;
  // flex-direction: column;
  // justify-content: center;
  align-items: center;
  ${props => getCssResponsive(props)}
`;

(Flex as IFlex).Row = FlexRow;
(Flex as IFlex).Col = FlexCol;
(Flex as IFlex).Responsive = FlexResponsive;
(Flex as IFlex).Flow = FlexFlow;

export default Flex as IFlex;

type Props = {
}

type IFlex = typeof Flex & {
  Row: typeof FlexRow;
  Col: typeof FlexCol;
  Responsive: typeof FlexResponsive;
  Flow: typeof FlexFlow;
};
