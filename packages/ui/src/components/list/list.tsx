import { forwardRef } from 'react';
import styled from 'styled-components';
import { UIComponentWithRef, UIStyledComponentProps } from '../types';
import { getCssResponsive } from '../utils';

type Props = {
};

export type ListProps = UIStyledComponentProps<Props>;

export type ListComponent<C extends React.ElementType = 'div'> = UIComponentWithRef<C, Props>;

const StyledList = styled.div<ListProps>`
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-neutral-200);
  ${props => getCssResponsive(props)}
`;

export const List: ListComponent = forwardRef(({ as = 'div', ...props }, ref) => (
  <StyledList ref={ref} as={as} {...props} />
));

List.displayName = 'List';
