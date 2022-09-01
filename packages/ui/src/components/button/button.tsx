import { ComponentPropsWithRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { ComponentCssResponsiveProps, SizeVariant, VariantOf } from '../../components/types';
import { getCssResponsive, getVariant } from '../../components/utils';
import { useClasses } from '../../hooks';
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
  // htmlType?: React.ButtonHTMLAttributes<any>['type']
  // onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type ButtonProps = ComponentCssResponsiveProps<Props, HTMLButtonElement>;

const StyledButton = styled.div<ButtonProps>`
  ${CssDefault}
  ${props => getVariant(variants, props.variant)}
  ${props => (css`font-size: var(--button-size-${props.size || 'md'});`)}
  ${props => getCssResponsive(props)}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const className = useClasses('button', { disabled: props.disabled });
  return (<StyledButton ref={ref} className={className} as="button" {...props}>{props.children}</StyledButton>);
});

Button.displayName = 'Button';

export default Button;
