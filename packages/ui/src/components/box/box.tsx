import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
};

export type BoxProps = UIStyledComponentProps<Props>;

const Box = styled.div<BoxProps>`
  ${props => getCssResponsive(props)}
`;

export default Box;
