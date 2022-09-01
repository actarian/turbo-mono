import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import Input from '../../forms/input/input';
import { useClasses } from '../../hooks';

interface Props extends ComponentPropsWithRef<'input'> {
  children?: ReactNode;
}

export type InputGroupProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const StyledInputGroup = styled.div<InputGroupProps>`
  display: block;
  width: 100%;
  padding: var(--form-padding);
  appearance: none;
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  border: 2px solid;
  border-radius: var(--border-radius);
  color: inherit;
  background-color: transparent;
  border-color: var(--color-neutral-200);
  transition: border 150ms ease-in 0s, outline-color 150ms ease-in 0s, color 200ms ease-out 0s;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }

  &.active:not(.disabled),
  &:hover:not(.disabled) {
    border-color: var(--color-neutral-300);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary-200);
    outline-offset: 2px;

    &::placeholder {
      opacity: 0.5;
    }
  }

  &::placeholder {
    color: inherit;
    opacity: 0.3;
  }

  ${props => getCssResponsive(props)}
`;

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(({
  children,
  className,
  ...props
}, ref) => {
  const classNames = useClasses('input-group', className);
  return (
    <StyledInputGroup className={classNames} as="div" {...props}>
      {children}
    </StyledInputGroup>
  );
});

InputGroup.displayName = 'InputGroup';

(InputGroup as IInputGroup).Input = Input;

export default InputGroup as IInputGroup;

type IInputGroup = typeof InputGroup & {
  Input: typeof Input;
};
