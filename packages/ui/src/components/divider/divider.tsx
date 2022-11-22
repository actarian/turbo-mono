import styled from 'styled-components';
import { UIComponent, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
  children?: React.ReactNode;
};

export type DividerProps = UIStyledComponentProps<Props>;

export type DividerComponent<C extends React.ElementType = 'div'> = UIComponent<C, Props>;

const DividerContainer = styled.div<DividerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 100%;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    top: 50%;
    margin-top: 1px;
    background-color: var(--color-neutral-300);
  }

  ${props => getCssResponsive(props, { padding: props.children ? '1rem 0' : '0.5rem 0' })}
`;

const DividerTitle = styled.span<DividerProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0 0.75em;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-400);
  z-index: 1;
  white-space: nowrap;
`;

export const Divider: DividerComponent = ({ children, as = 'div' as React.ElementType, ...props }) => {
  return (
    <DividerContainer as={as} {...props}>
      {children && <DividerTitle {...props}>{children}</DividerTitle>}
    </DividerContainer>
  );
};
