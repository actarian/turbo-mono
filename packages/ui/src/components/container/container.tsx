import React, { forwardRef } from 'react';
import styled from 'styled-components';
import type { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getContainer, getCssResponsive } from '../../components/utils';

type Props = {
  fluid?: boolean;
  children?: React.ReactNode;
}

export type ContainerProps = UIStyledComponentProps<Props>;

export type ContainerComponent<C extends React.ElementType = 'div'> = UIComponentWithRef<C, Props>;

const Container = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  ${props => getContainer(props, props.fluid)}
  ${props => getCssResponsive(props)}
`;

export const ContainerFluid: ContainerComponent = forwardRef(({ children, as = 'div', ...props }, ref) => {
  return (<Container ref={ref} as={as} {...props} fluid>{children}</Container>);
});

ContainerFluid.displayName = 'ContainerFluid';

(Container as IContainer).Fluid = ContainerFluid;

export default Container as IContainer;

type IContainer = typeof Container & {
  Fluid: typeof ContainerFluid;
};
