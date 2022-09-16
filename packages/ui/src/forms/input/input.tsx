import { getClassNames } from '@websolute/core';
import { ComponentPropsWithRef, forwardRef, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

interface Props extends ComponentPropsWithRef<'input'> {
  before?: ReactNode;
  after?: ReactNode;
}

export type InputProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const StyledInputContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  border: 2px solid;
  border-radius: var(--border-radius);
  color: inherit;
  background-color: transparent;
  border-color: var(--color-neutral-200);
  outline-color: transparent;
  transition: border 150ms ease-in 0s, outline-color 150ms ease-in 0s, color 200ms ease-out 0s;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }

  &.active:not(.disabled),
  &:hover:not(.disabled) {
    border-color: var(--color-neutral-300);
  }

  &.focus {
    outline: 2px solid var(--color-primary-200);
    outline-offset: 2px;

    input::placeholder {
      opacity: 0.5;
    }
  }

  &.hidden {
    display: none;
  }

  input {
    flex-grow: 1;
    appearance: none;
  }

  input::placeholder {
    color: inherit;
    opacity: 0.3;
  }

  &>:first-child:not(input) {
    margin: 0 0.5em;
  }

  &>:last-child:not(input) {
    margin: 0 0.5em;
  }

  ${props => getCssResponsive(props)}
`;

const StyledInput = styled.div<InputProps>`
  display: block;
  appearance: none;
  padding: var(--form-padding);
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  color: inherit;
  background-color: transparent;
  border: none;
  outline: none;

  ${props => getCssResponsive(props)}
`;

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  before,
  after,
  type = 'text',
  onFocus,
  onBlur,
  ...props }, ref) => {
  const [focus, setFocus] = useState<boolean>(false);
  const onFocus_ = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(event);
    setFocus(true);
  }
  const onBlur_ = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(event);
    setFocus(false);
  }
  const classNames = getClassNames('input', {
    focus,
    disabled: props.disabled,
    readonly: props.readOnly,
    hidden: props.hidden,
  }, className);
  return (
    <StyledInputContainer className={classNames} {...props}>
      {before}
      <StyledInput ref={ref} as='input' type={type} onFocus={onFocus_} onBlur={onBlur_} {...props} />
      {after}
    </StyledInputContainer>
  );
});

Input.displayName = 'Input';

export default Input;
