import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getContainer, getCssResponsive } from '@ui-components/utils';
import React from 'react';
import styled from 'styled-components';

type Props = {
  fluid?: boolean;
}

export type ContainerProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const Container = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  ${props => getContainer(props, props.fluid)}
  ${props => getCssResponsive(props)}
`;

export const ContainerFluid = React.forwardRef<Element, ContainerProps>((props: ContainerProps, ref?: React.Ref<Element>) => {
  return (<Container {...props} ref={ref} fluid>{props.children}</Container>);
});

ContainerFluid.displayName = 'ContainerFluid';

(Container as IContainer).Fluid = ContainerFluid;

export default Container as IContainer;

type IContainer = typeof Container & {
  Fluid: typeof ContainerFluid;
};
