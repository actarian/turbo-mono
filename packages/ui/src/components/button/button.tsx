import { getClassNames } from '@websolute/core';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { SizeVariant, UIComponentWithRef, UIStyledComponentProps, VariantOf } from '../types';
import { getCssResponsive, getVariant } from '../utils';
import { CssButtonCircle, CssButtonDefault, CssButtonGhost, CssButtonLink, CssButtonNav, CssButtonOutline, CssButtonPrimary, CssButtonSecondary, CssButtonToggle, CssButtonUnderline, CssDefault } from './button.css';

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'underline' | 'nav' | 'circle' | 'toggle';

export type ButtonVariants = VariantOf<ButtonVariant>;

const variants: ButtonVariants = {
  default: CssButtonDefault,
  primary: CssButtonPrimary,
  secondary: CssButtonSecondary,
  outline: CssButtonOutline,
  ghost: CssButtonGhost,
  link: CssButtonLink,
  underline: CssButtonUnderline,
  nav: CssButtonNav,
  circle: CssButtonCircle,
  toggle: CssButtonToggle,
};

type Props = {
  variant?: ButtonVariant;
  size?: SizeVariant;
  children?: React.ReactNode;
  type?: string;
}

export type ButtonProps = UIStyledComponentProps<Props>;

export type ButtonComponent<C extends React.ElementType = 'button'> = UIComponentWithRef<C, Props>;

const StyledButton = styled.div<ButtonProps>`
  ${CssDefault}
  ${props => getVariant(variants, props.variant)}
  ${props => (css`font-size: var(--button-size-${props.size || 'md'});`)}
  ${props => getCssResponsive(props)}
`;

export const Button: ButtonComponent = forwardRef(({ children, className, as = 'button', type = 'button', ...props }, ref) => {
  const classNames = getClassNames('button', className, { disabled: props.disabled });
  return (<StyledButton className={classNames} ref={ref} as={as} type={type} {...props}>{children}</StyledButton>);
});

Button.displayName = 'Button';
