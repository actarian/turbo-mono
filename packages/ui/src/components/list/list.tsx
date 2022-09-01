import { forwardRef } from 'react';
import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
};

export type ListProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledList = styled.div<ListProps>`
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-neutral-200);
  ${props => getCssResponsive(props)}
`;

const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => (
  <StyledList ref={ref} as='div' {...props} />
));

List.displayName = 'List';

export default List;
