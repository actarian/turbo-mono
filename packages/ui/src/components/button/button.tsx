import { getClassNames } from '@websolute/core';
import { ComponentPropsWithRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { ComponentCssResponsiveProps, SizeVariant, VariantOf } from '../../components/types';
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

interface Props extends ComponentPropsWithRef<'button'> {
  variant?: ButtonVariant;
  size?: SizeVariant;
}

export type ButtonProps = ComponentCssResponsiveProps<Props, HTMLButtonElement>;

const StyledButton = styled.div<ButtonProps>`
  ${CssDefault}
  ${props => getVariant(variants, props.variant)}
  ${props => (css`font-size: var(--button-size-${props.size || 'md'});`)}
  ${props => getCssResponsive(props)}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ type = 'button', as = 'button', ...props }, ref) => {
  const classNames = getClassNames('button', { disabled: props.disabled });
  return (<StyledButton ref={ref} className={classNames} type={type} forwardedAs={as} {...props}>{props.children}</StyledButton>);
});

Button.displayName = 'Button';

export default Button;

// Polymorphic version

/*
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '../../components/types';
import { CssResponsiveProps } from '../css';

type PolymorphicButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, Props & CssResponsiveProps>;

type PolymorphicButtonComponent = <C extends React.ElementType = 'button'>(props: PolymorphicButtonProps<C>) => React.ReactElement | null;

// eslint-disable-next-line react/display-name
const PolymorphicButton: PolymorphicButtonComponent = forwardRef(<C extends React.ElementType = 'button'>({ as, color, children, type = 'button', ...props }: PolymorphicButtonProps<C>, ref?: PolymorphicRef<C>) => {
  const classNames = getClassNames('button', { disabled: props.disabled });
  const Component = as || 'button';
  return (
    <Component ref={ref} className={classNames} type={type} {...props}>{children}</Component>
  );
});

const StyledPolymorphicButton: PolymorphicButtonComponent = styled(PolymorphicButton)`
  ${CssDefault}
  ${props => getVariant(variants, props.variant)}
  ${props => (css`font-size: var(--button-size-${props.size || 'md'});`)}
  ${props => getCssResponsive(props)}
`;

 export default StyledPolymorphicButton;
*/
