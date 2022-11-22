import { withSchema } from '@websolute/core';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getContainer, getCssResponsive } from '../../components/utils';

type Props = {
  fluid?: boolean;
  children?: React.ReactNode;
};

export type ContainerProps = UIStyledComponentProps<Props>;

export type ContainerComponent<C extends React.ElementType = 'div'> = UIComponentWithRef<C, Props>;

export const ContainerBase = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  ${props => getContainer(props, props.fluid)}
  ${props => getCssResponsive(props)}
`;

export const ContainerFluid: ContainerComponent = forwardRef(({ children, as = 'div', ...props }, ref) => {
  return (<ContainerBase ref={ref} as={as} {...props} fluid>{children}</ContainerBase>);
});

ContainerFluid.displayName = 'ContainerFluid';

export const Container = withSchema(ContainerBase, {
  Fluid: ContainerFluid,
  displayName: 'Container',
});
