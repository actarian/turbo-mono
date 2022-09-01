import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
};

export type BoxProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const Box = styled.div<BoxProps>`
  ${props => getCssResponsive(props)}
`;

export default Box;
