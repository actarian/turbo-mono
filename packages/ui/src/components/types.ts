import React from 'react';
import { FlattenInterpolation } from 'styled-components';
import { CssResponsiveProps } from './css';

export type Variant = 'default' | 'circle' | 'alfa' | 'beta' | 'gamma' | 'delta' | 'epsilon' | 'zeta' | 'eta' | 'theta' | 'iota' | 'kappa' | 'lambda' | 'mu' | 'nu' | 'xi' | 'omicron' | 'pi' | 'rho' | 'sigma' | 'tau' | 'upsilon' | 'phi' | 'psi' | 'chi' | 'omega';

export type VariantOf<T extends string> = { [key in T]?: FlattenInterpolation<any> };

export type Variants = { [key in Variant]?: FlattenInterpolation<any> };

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'default' | 'small' | 'smaller' | 'smallest';

export type TextVariants = { [key in TextVariant]?: FlattenInterpolation<any> };

export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SizeVariants = { [key in SizeVariant]?: FlattenInterpolation<any> };

export type WeightVariant = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export type WeightVariants = { [key in WeightVariant]?: FlattenInterpolation<any> };

export type ThemeProps = {
  theme?: any;
  className?: string;
};

export type GridProps = {
  columns?: string;
  size?: string;
  columnGap?: string;
  rowGap?: string;
};

export type NativeElement = Element;

export type NativeProps<T extends NativeElement, U> = Omit<React.HTMLAttributes<T>, keyof U> & { as?: React.ElementType, children?: React.ReactNode };

export type NativeThemeProps<T, U extends NativeElement> = NativeProps<U, T> & ThemeProps & T;

export type ComponentProps<T, U extends NativeElement> = NativeThemeProps<T, U>;

export type ComponentCssResponsiveProps<T, U extends NativeElement> = NativeThemeProps<T, U> & CssResponsiveProps;

export type ComponentGridProps<T, U extends NativeElement> = NativeThemeProps<T, U> & GridProps;

// todo polymorphism

type AsProp<C extends React.ElementType> = { as?: C; };

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

/*

type Props = {};

type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, Props> & CssResponsiveProps;

type ButtonComponent = <C extends React.ElementType = 'button'>(props: ButtonProps<C>) => React.ReactElement | null;

const PolymorphicButton: ButtonComponent = React.forwardRef(<C extends React.ElementType = 'button'>({ as, color, children, ...props }: ButtonProps<C>, ref?: PolymorphicRef<C>) => {
  const Component = as || 'button';
  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
});

*/
