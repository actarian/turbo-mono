import React from 'react';
import { FlattenInterpolation } from 'styled-components';
import { theme } from '../styles/theme';
import { CssResponsiveProps } from './css';

export type Variant = 'default' | 'circle' | 'alfa' | 'beta' | 'gamma' | 'delta' | 'epsilon' | 'zeta' | 'eta' | 'theta' | 'iota' | 'kappa' | 'lambda' | 'mu' | 'nu' | 'xi' | 'omicron' | 'pi' | 'rho' | 'sigma' | 'tau' | 'upsilon' | 'phi' | 'psi' | 'chi' | 'omega';

export type VariantOf<T extends string> = { [key in T]?: FlattenInterpolation<unknown> };

export type Variants = { [key in Variant]?: FlattenInterpolation<unknown> };

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'default' | 'small' | 'smaller' | 'smallest';

export type TextVariants = { [key in TextVariant]?: FlattenInterpolation<unknown> };

export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SizeVariants = { [key in SizeVariant]?: FlattenInterpolation<unknown> };

export type WeightVariant = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export type WeightVariants = { [key in WeightVariant]?: FlattenInterpolation<unknown> };

export type IArray = Array<IObject | string>;

export type IObject = {
  [key: string]: IObject | IArray | string;
};

export type ThemeProps = {
  theme: typeof theme; // IObject;
  className?: string;
};

// interface ExoticComponentWithDisplayName<P = unknown> extends React.ExoticComponent<P> { defaultProps?: Partial<P>; displayName?: string; }

// export type AnyComponent<P = unknown> = ExoticComponentWithDisplayName<P> | React.ComponentType<P>;

// export type KnownTarget = keyof JSX.IntrinsicElements | Element | AnyComponent;

// export type NativeElement = KnownTarget;

// export type NativeProps<T extends NativeElement, U> = Omit<React.HTMLAttributes<T>, keyof U> & { as?: React.ElementType, children?: React.ReactNode };

// export type NativeThemeProps<T, U extends NativeElement> = NativeProps<U, T> & ThemeProps & T;

// export type ComponentProps<T, U extends NativeElement> = NativeThemeProps<T, U>;

// export type ComponentCssResponsiveProps<T, U extends NativeElement> = NativeThemeProps<T, U> & CssResponsiveProps;

// export type ComponentGridRowProps<T, U extends NativeElement> = NativeThemeProps<T, U> & GridRowProps;

// props
// Source: https://github.com/emotion-js/emotion/blob/main/packages/react/types/helper.d.ts
// A more precise version of just React.ComponentPropsWithoutRef on its own
export type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>>
  = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>
// see
// https://www.benmvp.com/blog/polymorphic-react-components-typescript/
// https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/
// also
// https://scottbolinger.com/create-a-polymorphic-component-with-typescript-and-react/

// polymorphic


/**
 * An override of the default HTML tag.
 * Can also be another React component.
 */
type AsProp<C extends React.ElementType> = {
  as?: C;
  displayName?: string;
};

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export type ExtendableProps<ExtendedProps = {}, OverrideProps = {}> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

/**
* Allows for inheriting the props from the specified element type so that
* props like children, className & style work, as well as element-specific
* attributes like aria roles. The component (`C`) must be passed in.
*/
export type InheritableElementProps<C extends React.ElementType, P = {}> = ExtendableProps<PropsOf<C>, P>;

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProp<C extends React.ElementType, P = {}> = React.PropsWithChildren<P & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, P>>;

export type PolymorphicComponentPropWithRef<C extends React.ElementType, P = {}> = PolymorphicComponentProp<C, P> & { ref?: PolymorphicRef<C> };

/**
 * Utility type to extract the `ref` prop from a polymorphic component
 */
export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

// generics

export type UIDevProps = { displayName?: string };

// export type UIBaseProps = { as?: React.ElementType, children?: React.ReactNode } & UIDevProps; // rimuovere children

export type UIStyledProps<P = {}> = P & CssResponsiveProps; // & ThemeProps; // !!! ThemeProps goes only on styled components

export type NativeAttrs<C extends React.ElementType = 'div', P = {}> = Omit<PropsOf<C>, keyof P>;

export type UIComponentProps<P = {}, C extends React.ElementType = 'div'> = P & NativeAttrs<C, P>; // & UIBaseProps;

export type UIStyledComponentProps<P = {}, C extends React.ElementType = 'div', S = UIStyledProps<P>> = S & NativeAttrs<C, S>; // & UIBaseProps;

export type UIComponentPropsWithoutRef<C extends React.ElementType, P> = PolymorphicComponentProp<C, P>;

export type UIComponentPropsWithRef<C extends React.ElementType, P> = PolymorphicComponentPropWithRef<C, P>;

export type UIStyledComponent<C extends React.ElementType, P = {}> = React.FC<Omit<React.ComponentProps<C>, keyof P>>;

export type UIComponent<T extends React.ElementType, P = {}> = (<C extends React.ElementType = T>(props: UIComponentPropsWithoutRef<C, UIStyledComponentProps<P, C>>) => React.ReactElement<C> | null) & UIDevProps;

export type UIComponentWithRef<T extends React.ElementType, P = {}> = (<C extends React.ElementType = T>(props: UIComponentPropsWithRef<C, UIStyledComponentProps<P, C>>) => React.ReactElement<C> | null) & UIDevProps;

// export type UIForwardingComponentWithRef<T extends React.ElementType, P = {}> = <C extends React.ElementType = T>(props: P, ref?: PolymorphicRef<C>) => UIComponentWithRef<C, P>;

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
