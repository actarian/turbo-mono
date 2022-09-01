import { forwardRef } from 'react';
import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
};

export type LayoutProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledLayout = styled.div<LayoutProps>`
  ${props => getCssResponsive(props)}
`;

const Layout = forwardRef<HTMLDivElement, LayoutProps>((props, ref) => (
  <StyledLayout ref={ref} as='div' {...props} />
));

Layout.displayName = 'Layout';

export default Layout;
