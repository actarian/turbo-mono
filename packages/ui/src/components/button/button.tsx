import { getClassNames } from '@websolute/core';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { SizeVariant, UIComponentWithRef, UIStyledComponentProps, VariantOf } from '../../components/types';
import { getCssResponsive, getVariant } from '../../components/utils';
import { CssButtonCircle, CssButtonDefault, CssButtonGhost, CssButtonLink, CssButtonNav, CssButtonOutline, CssButtonPrimary, CssButtonSecondary, CssButtonUnderline, CssDefault } from './button.css';

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'underline' | 'nav' | 'circle';

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
};

interface Props {
  variant?: ButtonVariant;
  size?: SizeVariant;
  children?: React.ReactNode;
}

export type ButtonProps<C extends React.ElementType = 'button'> = UIStyledComponentProps<Props, C>;

export type ButtonComponent<C extends React.ElementType = 'button'> = UIComponentWithRef<C, ButtonProps<C>>;

const StyledButton = styled.div<ButtonProps>`
  ${CssDefault}
  ${props => getVariant(variants, props.variant)}
  ${props => (css`font-size: var(--button-size-${props.size || 'md'});`)}
  ${props => getCssResponsive(props)}
`;

const Button: ButtonComponent = forwardRef(({ children, as = 'button', type = 'button', ...props }, ref) => {
  const classNames = getClassNames('button', { disabled: props.disabled });
  return (<StyledButton className={classNames} ref={ref} as={as} type={type} {...props}>{children}</StyledButton>);
});

Button.displayName = 'Button';

export default Button;
