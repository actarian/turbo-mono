import styled from 'styled-components';
import { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
}

export type PageProps = UIStyledComponentProps<Props>;

export const Page = styled.div<PageProps>`
  margin: 0 auto;
  ${props => getCssResponsive(props)}
`;
