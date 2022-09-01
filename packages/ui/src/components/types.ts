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

// Polymorphic
export type PropsOf<E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;
export interface PolymorphicElementOwnProps<E extends React.ElementType = React.ElementType> { as?: E; }
export type PolymorphicElementProps<E extends React.ElementType> = PolymorphicElementOwnProps<E> & Omit<PropsOf<E>, keyof PolymorphicElementOwnProps>;
export type PolymorphicProps<E extends React.ElementType, P> = P & PolymorphicElementProps<E>;
// Polymorphic

export type AsProps<C extends React.ElementType> = {
  as?: C;
};

export type PropsToOmit<C extends React.ElementType, P> = keyof (AsProps<C> & P);

// This is the type for the "ref" only
export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

// This is the first reusable type utility we built
export type PolymorphicComponentProp<C extends React.ElementType, Props = {}> =
  React.PropsWithChildren<Props &
    AsProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// This is a new type utitlity with ref!
export type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = {}> =
  PolymorphicComponentProp<C, Props> &
  { ref?: PolymorphicRef<C> };

/*
// This is the updated component props using PolymorphicComponentPropWithRef

type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, { color?: 'white' | 'black' }>;

// This is the type used in the type annotation for the component
type TextComponent = <C extends React.ElementType = 'span'>(props: TextProps<C>) => React.ReactElement | null;

// export type StyledProps<P, C extends React.ElementType> = PolymorphicComponentPropWithRef<C, P> & CssResponsiveProps;

export const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = 'span'>({ as, color, children }: TextProps<C>, ref?: PolymorphicRef<C>) => {
    const Component = as || "span";
    const style = color ? { style: { color } } : {};
    return (
      <Component {...style} ref={ref}>
        {children}
      </Component>
    );
  }
);
*/
