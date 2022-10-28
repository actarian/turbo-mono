import React, { ReactNode } from 'react';
import { css, FlattenInterpolation } from 'styled-components';
import { CssMap, CssResponsiveProps } from './css';
import { GridRowBaseProps } from './grid/grid-row';
import { ThemeProps } from './types';

export const ObjectKeys = Object.keys as <T>(o: T) => (Extract<keyof T, string>)[];

export function getContainer(props: ThemeProps, fluid?: boolean) {
  if (fluid) {
    return `
    max-width: calc(100% - var(--grid-column-gap) * 2);
  `;
  } else {
    const theme = props.theme;
    if (theme.maxWidth && theme.mediaQuery) {
      return ObjectKeys(theme.mediaQuery).map((key) => {
        const value = theme.mediaQuery[key];
        return `
@media(min-width: ${value}px) {
  max-width: ${theme.container.maxWidth[key]};
}
`
      }).join('\n');
    } else {
      return '';
    }
  }
}

export function getCssResponsive(props: CssResponsiveProps & ThemeProps, defaultValue: CssResponsiveProps = {}) {
  props = { ...defaultValue, ...props };
  let rules = '';
  for (const [key, value] of Object.entries(props)) {
    // console.log(`${key}: ${value}`);
    const rule = key.replace(/(.+?)(Sm|Md|Lg|Xl)?$/, function (m, g1, g2) {
      const prop: string = g1;
      if (CssMap.has(prop)) {
        // console.log('prop', prop);
        const rule = `${CssMap.get(prop)}: ${value};`;
        if (g2) {
          const size: keyof typeof props.theme.mediaQuery = g2.toLowerCase();
          // console.log('size', size, 'rule', rule);
          return `@media(min-width: ${props.theme.mediaQuery[size]}px) {
              ${rule}
            }`;
        } else {
          // console.log('rule', rule);
          return rule;
        }
      } else {
        return '';
      }
    });
    rules += rule + '\n';
  }
  return rules;
}

export function getAspectResponsive(props: CssResponsiveProps & ThemeProps, defaultValue: CssResponsiveProps = {}) {
  props = { ...defaultValue, ...props };
  let rules = '';
  for (const [key, value] of Object.entries(props)) {
    const rule = key.replace(/(.+?)(Sm|Md|Lg|Xl)?$/, function (m, g1, g2) {
      const prop = g1;
      if (prop === 'aspectRatio') {
        const rule = `
          position: relative;
          overflow: hidden;
        `;
        if (g2) {
          const size: keyof typeof props.theme.mediaQuery = g2.toLowerCase();
          // console.log('size', size, 'rule', rule);
          return `@media(min-width: ${props.theme.mediaQuery[size]}px) {
              ${rule}
            }`;
        } else {
          // console.log('rule', rule);
          return rule;
        }
      } else {
        return '';
      }
    });
    rules += rule + '\n';
  }
  return rules;
}

export function getGrid(props: GridRowBaseProps, defaultValue: GridRowBaseProps = {}) {
  props = { ...defaultValue, ...props };
  return css`
    ${(props.columns) ? css`
      --grid-columns: ${props.columns};
    `: ''}
    ${(props.columnGap) ? css`
      --grid-column-gap: ${props.columnGap};
    `: ''}
    ${(props.rowGap) ? css`
      --grid-row-gap: ${props.rowGap};
    `: ''}
    ${(props.size) ? css`
      --grid-size: ${props.size};
    `: ''}
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), var(--grid-size));
    grid-column-gap: var(--grid-column-gap);
    grid-row-gap: var(--grid-row-gap);
  `;
}

export function eachMedia(props: ThemeProps, callback: (key: string) => string | void) {
  const theme = props.theme;
  if (theme.mediaQuery && typeof callback === 'function') {
    return ObjectKeys(theme.mediaQuery).map(key => {
      const value = theme.mediaQuery[key];
      const rule = callback(key);
      return rule ? `@media(min-width: ${value}px) { ${rule} }` : '';
    }).join('\n');
  } else {
    return '';
  }
}

export function getVariant<T extends string>(variants: { [key in T]?: FlattenInterpolation<unknown> }, type?: T): FlattenInterpolation<unknown> | '' {
  return (type && variants[type]) ? (variants[type] || '') : '';
}

export function isChildElement(parent: Element | null | undefined, child: Element | null | undefined): boolean {
  if (!parent || !child) {
    return false;
  }
  let node: (Node & ParentNode) | null = child;
  while (node) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

export function mapChildsByType(
  children: ReactNode | undefined,
  type: React.ElementType,
  mapMethod: (child: ReactNode) => ReactNode,
): ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    if (child.type === type) {
      return mapMethod(child);
    } else if (child.props.children) {
      child = React.cloneElement(child, {
        ...child.props,
        children: mapChildsByType(child.props.children, type, mapMethod),
      });
    }
    return child;
  });
}

export function getChildsByType(children: ReactNode | undefined, type: React.ElementType): [ReactNode | undefined, ReactNode | undefined] {
  const items: ReactNode[] = [];
  const others = React.Children.map(children, (item) => {
    if (!React.isValidElement(item)) {
      return item;
    }
    if (item.type === type) {
      items.push(item);
      return null;
    }
    return item;
  });
  // console.log(items);
  const childs = items.length > 0 ? items : undefined;
  return [childs, others];
}

export function hasChildOfType(children: ReactNode | undefined, type: React.ElementType): boolean {
  const [foundChildren, otherChildren] = getChildsByType(children, type);
  const hasChildOfType = foundChildren !== undefined;
  return hasChildOfType;
}

export function hypenize(text: string): string {
  return text.replace(/(?<![A-Z])[A-Z]|(?<![0-9]|^)[0-9]/g, m => '-' + m.toLowerCase());
}

export function camelize(text: string): string {
  return text.replace(/(^[a-z])|-([a-z0-9])/gi, ($0, $1, $2) => $2 ? $2.toUpperCase() : $1.toUpperCase());
}
