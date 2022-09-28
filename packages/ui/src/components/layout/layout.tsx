import { forwardRef } from 'react';
import styled from 'styled-components';
import type { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
  children?: React.ReactNode;
};

export type LayoutProps = UIStyledComponentProps<Props>;

export type LayoutComponent<C extends React.ElementType = 'div'> = UIComponentWithRef<C, Props>;

const StyledLayout = styled.div<LayoutProps>`
  ${props => getCssResponsive(props)}
`;

const Layout: LayoutComponent = forwardRef(({ children, as = 'div', ...props }, ref) => (
  <StyledLayout ref={ref} as={as} {...props}>{children}</StyledLayout>
));

Layout.displayName = 'Layout';

export default Layout;
