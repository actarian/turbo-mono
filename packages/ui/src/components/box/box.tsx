import styled from 'styled-components';
import { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
};

export type BoxProps = UIStyledComponentProps<Props>;

export const Box = styled.div<BoxProps>`
  ${props => getCssResponsive(props)}
`;
