import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getCssResponsive } from '@ui-components/utils';
import styled from 'styled-components';

type Props = {
};

export type BoxProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const Box = styled.div<BoxProps>`
  ${props => getCssResponsive(props)}
`;

export default Box;
