
import { getClassNames } from '@websolute/core';
import { ComponentPropsWithRef, forwardRef } from 'react';
import styled from 'styled-components';
import { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { CheckboxIcon } from './checkbox-icon';

type Props = ComponentPropsWithRef<'input'> & {
}

export type CheckboxProps = UIStyledComponentProps<Props, 'input'>;

export type CheckboxComponent<C extends React.ElementType = 'input'> = UIComponentWithRef<C, Props>;

const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  ${props => getCssResponsive(props)}
`

const StyledCheckboxIcon = styled.div`
  margin-right: 0.5rem;
  color: var(--color-neutral-300);
  pointer-events: none;
  outline: 2px solid transparent;
  outline-offset: 1px;
  transition: outline-color 150ms ease-in 0s, color 200ms ease-out 0s;

  input:checked ~ & {
    color: var(--color-primary-500);
  }

  input:not(:disabled):hover ~ & {
    outline-color: var(--color-neutral-300);
  }

  input:focus ~ & {
    outline-color: var(--color-primary-200);
  }
`

const StyledCheckbox = styled.div<CheckboxProps>`
  position: relative;
  ${props => getCssResponsive(props)}
`

export const Checkbox: CheckboxComponent = forwardRef(({ className, ...props }, ref) => {
  const classNames = getClassNames('checkbox', className);
  return (
    <StyledCheckbox className={classNames}>
      <StyledCheckboxInput ref={ref} as='input' type='checkbox' {...props} />
      <StyledCheckboxIcon as={CheckboxIcon} aria-hidden='true' />
    </StyledCheckbox>
  );
});

Checkbox.displayName = 'Checkbox';
