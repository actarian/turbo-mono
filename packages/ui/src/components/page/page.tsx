import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getCssResponsive } from '@ui-components/utils';
import styled from 'styled-components';

type Props = {
}

export type PageProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const Page = styled.div<PageProps>`
  margin: 0 auto;
  ${props => getCssResponsive(props)}
`;

export default Page;
