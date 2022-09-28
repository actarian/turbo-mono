import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
}

export type PageProps = UIStyledComponentProps<Props>;

const Page = styled.div<PageProps>`
  margin: 0 auto;
  ${props => getCssResponsive(props)}
`;

export default Page;
