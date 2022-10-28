
import { getClassNames, withSchema } from '@websolute/core';
import { ComponentPropsWithRef, forwardRef } from 'react';
import styled from 'styled-components';
import { SizeVariant, UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { RadioGroup } from './radio-group';
import { RadioIcon } from './radio-icon';

type Props = Omit<ComponentPropsWithRef<'input'>, 'size'> & {
  size?: SizeVariant;
}

export type RadioProps = UIStyledComponentProps<Props, 'input'>;

export type RadioComponent<C extends React.ElementType = 'input'> = UIComponentWithRef<C, Props>;

const StyledRadioInput = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`

const StyledRadioIcon = styled.div`
  border-radius: 50%;
  margin-right: 0.5rem;
  color: var(--color-neutral-300);
  pointer-events: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
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

const StyledRadio = styled.div`
  position: relative;
  ${props => getCssResponsive(props)}
`

const RadioBase: RadioComponent = forwardRef(({ as = 'input', className, ...props }, ref) => {
  const classNames = getClassNames('radio', className);
  return (
    <StyledRadio className={classNames}>
      <StyledRadioInput ref={ref} as={as} type='radio' {...props} />
      <StyledRadioIcon as={RadioIcon} aria-hidden='true' />
    </StyledRadio>
  );
});

RadioBase.displayName = 'Radio';

export const Radio = withSchema(RadioBase, {
  Group: RadioGroup,
});
