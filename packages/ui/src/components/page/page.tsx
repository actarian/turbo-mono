import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
}

export type PageProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const Page = styled.div<PageProps>`
  margin: 0 auto;
  ${props => getCssResponsive(props)}
`;

export default Page;
