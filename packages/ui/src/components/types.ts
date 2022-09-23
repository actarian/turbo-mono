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

// props
// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
// A more precise version of just React.ComponentPropsWithoutRef on its own
export type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>
// see
// https://www.benmvp.com/blog/polymorphic-react-components-typescript/
// https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/

// polymorphic

type AsProp<C extends React.ElementType> = { as?: C; };

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

// generics

export type UIBaseProps = { as?: React.ElementType, displayName?: string, children?: React.ReactNode }; // rimuovere children

export type UIStyleProps<P = {}> = P & CssResponsiveProps & ThemeProps;

export type NativeAttrs<C extends React.ElementType = 'div', P = {}> = Omit<PropsOf<C>, keyof P>;

export type UIComponentProps<P = {}, C extends React.ElementType = 'div'> = P & NativeAttrs<C, P> & UIBaseProps;

export type UIStyledComponentProps<P = {}, C extends React.ElementType = 'div', S = UIStyleProps<P>> = S & NativeAttrs<C, S> & UIBaseProps;

export type UIComponentPropsWithoutRef<C extends React.ElementType, P> = PolymorphicComponentProp<C, P>;

export type UIComponentPropsWithRef<C extends React.ElementType, P> = PolymorphicComponentPropWithRef<C, P>;

export type UIComponent<T extends React.ElementType, P = {}> = { displayName?: string } & (<C extends React.ElementType = T>(props: UIComponentPropsWithoutRef<C, P>) => React.ReactElement | null);

export type UIComponentWithRef<T extends React.ElementType, P = {}> = { displayName?: string } & (<C extends React.ElementType = T>(props: UIComponentPropsWithRef<C, P>) => React.ReactElement | null);

export type UIForwardingComponentWithRef<T extends React.ElementType, P = {}> = <C extends React.ElementType = T>(props: P, ref?: PolymorphicRef<C>) => UIComponentWithRef<C, P>;

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
