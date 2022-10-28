import { getClassNames } from '@websolute/core';
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import styled, { css } from 'styled-components';
import { CssResponsiveProps } from '../css';
import { ThemeProps, UIComponentWithRef, UIStyledComponentProps } from '../types';
import { getCssResponsive } from '../utils';

type Props = {
}

export type FlexFlowProps = UIStyledComponentProps<Props>;

export type FlexFlowComponent<C extends React.ElementType = 'div'> = UIComponentWithRef<C, Props>;

function getFlexColumn(columns: string | number = 2) {
  const cols: number = parseInt(columns.toString());
  if (cols === 1) {
    return `width: 100%;`;
  }
  const calc = `calc(${(100 / cols)}% - (var(--grid-column-gap) * ${cols - 1} / ${cols}))`;
  return `
    flex: 1 0 ${calc};
    max-width: ${calc};
  `;
}

export function getCssResponsiveColumn(props: CssResponsiveProps & ThemeProps, defaultValue: CssResponsiveProps = {}) {
  props = { ...defaultValue, ...props };
  const columnsProps = ['columns', 'columnsSm', 'columnsMd', 'columnsLg', 'columnsXl'];
  let rules = '';
  for (const [key, value] of Object.entries(props)) {
    // console.log(`${key}: ${value}`);
    const rule = key.replace(/(.+?)(Sm|Md|Lg|Xl)?$/, function (m, g1, g2) {
      const prop: string = g1;
      if (columnsProps.includes(key)) {
        // console.log('prop', prop);
        const rule = getFlexColumn(value as string);
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

const StyledFlexFlow = styled.div<FlexFlowProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--grid-column-gap);
  ${props => css`
    &>div {
      position: relative;
      ${getCssResponsiveColumn(props)}
    }
    ${getCssResponsive(props)}
  `}
`;

export const FlexFlow: FlexFlowComponent = forwardRef(({ children, className, as = 'div', ...props }, ref) => {

  const innerRef = React.createRef<HTMLElement>();

  useImperativeHandle(ref, () => innerRef.current);

  useEffect(() => {
    if (!(window && window.addEventListener)) {
      return;
    }

    if (!innerRef.current) {
      return;
    }

    const element: HTMLElement = innerRef.current;

    const imagesLoaded = Array.from(element.querySelectorAll('img'));
    if (imagesLoaded.length === 0) {
      return;
    }
    imagesLoaded.forEach((image) => {
      image.addEventListener('load', () => reposChildElements(element), {
        once: true
      });
      image.addEventListener('error', () => reposChildElements(element), {
        once: true
      });
    });

    reposChildElements(element);

    const onResize = () => {
      reposChildElements(element);
    }

    window.addEventListener('resize', onResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [children]);

  const classNames = getClassNames('flex-flow', className);

  return (<StyledFlexFlow className={classNames} ref={innerRef} as={as} {...props}>{children}</StyledFlexFlow>);
});

FlexFlow.displayName = 'FlexFlow';

function reposChildElements(node: HTMLElement) {
  node.style.height = '';

  const nodeRect = node.getBoundingClientRect();

  const items = Array.prototype.slice.call(node.children);
  items.forEach(x => x.style.top = null);

  const itemStyles = items.map(item => getComputedStyle(item));
  let itemRect = items[0].getBoundingClientRect();
  let itemStyle = itemStyles[0];
  const itemOuterWidth = itemRect.width + parseFloat(itemStyle.marginLeft) + parseFloat(itemStyle.marginRight);
  const cols = Math.round((1 / (itemOuterWidth / nodeRect.width)));

  const heights: {
    [key: number]: number;
  } = {};

  items.forEach((item, i) => {
    itemRect = item.getBoundingClientRect();
    itemStyle = itemStyles[i];
    const c = i % cols;
    if (typeof heights[c] == 'undefined') {
      heights[c] = 0;
    }
    heights[c] += itemRect.height + parseFloat(itemStyle.marginBottom);
    if (i - cols >= 0) {
      const previousIndex = i - cols;
      const previousItem = items[previousIndex];
      const previousRect = previousItem.getBoundingClientRect();
      const previousBottom = previousRect.bottom;
      // console.log('i', i, 'previousIndex', previousIndex, 'previousBottom', previousBottom);
      const top = itemRect.top - parseFloat(itemStyle.marginBottom);
      item.style.top = `-${top - previousBottom}px`;
    }
  });

  const maxHeight = Math.max(...Object.values(heights));

  // console.log('reposChildElements', maxHeight);

  node.style.height = `${maxHeight}px`;
}
