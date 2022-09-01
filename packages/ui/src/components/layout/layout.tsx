import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getCssResponsive } from '@ui-components/utils';
import { forwardRef } from 'react';
import styled from 'styled-components';

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
