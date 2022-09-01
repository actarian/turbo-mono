
import { ComponentPropsWithRef, forwardRef, ReactNode, SVGProps } from 'react';
import styled, { css } from 'styled-components';
import { CssDefault } from '../../components/button/button.css';
import { ComponentCssResponsiveProps, SizeVariant } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { useClasses } from '../../hooks';
import RadioOptionGroup from './radio-option-group';

interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  size?: SizeVariant;
  children?: ReactNode;
}

export type RadioOptionProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const RadioOptionDisabledSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor" {...props}>
    <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke"></line>
  </svg>
);

const RadioOptionDisabled = styled(RadioOptionDisabledSvg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  border: 1px solid var(--color-neutral-300);
  color: var(--color-neutral-300);
  border-radius: var(--button-border-radius);

  input:disabled ~ &,
  input.disabled ~ & {
    display: block;
  }
`;

const StyledRadioOptionInput = styled.div`
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

const StyledRadioOptionButton = styled.div<RadioOptionProps>`
  ${CssDefault}

  width: 100%;
  justify-content: center;
  padding: 0.8em;
  border-radius: var(--button-border-radius);
  background: var(--color-neutral-100);
  border: 2px solid var(--color-neutral-200);
  color: var(--color-neutral-700);
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: outline-color .1s ease-in-out, border-color .1s ease-in-out, color .1s ease-in-out;

  input:not(:disabled):hover ~ & {
    border-color: var(--color-neutral-300);
    color: var(--color-neutral-900);
  }

  input:focus ~ &,
  input:active ~ & {
    outline-color: var(--color-primary-200);
  }

  input:checked ~ &,
  input.active ~ & {
    outline-color: var(--color-primary-500);
  }

  input:disabled ~ &,
  input.disabled ~ & {
    background: var(--color-neutral-200);
    pointer-events: none;
    opacity: 0.4;
  }

  ${props => (css`font-size: var(--button-size-${props.size || 'md'});`)}
  ${props => getCssResponsive(props)}
`

const StyledRadioOption = styled.div<RadioOptionProps>`
  position: relative;
  display: flex;
  min-height: 3.8em;
  line-height: 1;

  ${props => (css`
  &, .line {
    font-size: var(--button-size-${props.size || 'md'});
  }
  `)}
  ${props => getCssResponsive(props)}
`

const RadioOption = forwardRef<HTMLInputElement, RadioOptionProps>(({
  children,
  className,
  ...props
}, ref) => {
  const classNames = useClasses('radio-option', className);
  return (
    <StyledRadioOption size={props.size} className={classNames}>
      <StyledRadioOptionInput ref={ref} as='input' type='radio' {...props} />
      <StyledRadioOptionButton as="button" size={props.size}>
        <span>{children}</span>
      </StyledRadioOptionButton>
      <RadioOptionDisabled className="line" />
    </StyledRadioOption>
  );
});

RadioOption.displayName = 'RadioOption';

(RadioOption as IRadioOption).Group = RadioOptionGroup;

export default RadioOption as IRadioOption;

type IRadioOption = typeof RadioOption & {
  Group: typeof RadioOptionGroup;
};
