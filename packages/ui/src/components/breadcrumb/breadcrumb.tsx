import { withSchema } from '@websolute/core';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { UIComponent, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { BreadcrumbItem } from './breadcrumb-item';
import { BreadcrumbSeparator } from './breadcrumb-separator';
import { BreadcrumbGroup } from './breadcrumb.group';

type Props = {
  separator?: string | ReactNode;
  children?: ReactNode;
}

export type BreadcrumbProps = UIStyledComponentProps<Props>;

export type BreadcrumbComponent<C extends React.ElementType = 'nav'> = UIComponent<C, Props>;

const StyledBreadcrumb = styled.div<BreadcrumbProps>`
  display: flex;
  align-items: center;

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
  }

  .breadcrumb-separator,
  .breadcrumb-item:not(.link) {
    color: var(--color-neutral-500);
  }

  & > .breadcrumb-separator:last-child {
    display: none;
  }

  svg {
    width: 1em;
    height: 1em;
    margin: 0 0.3em;
  }

  ${props => getCssResponsive(props)}
`;

const BreadcrumbBase: BreadcrumbComponent = ({ children, as = 'nav' as React.ElementType, separator = '/', className = '', ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const withSeparatorChildren = childrenArray.map((item, index) => {
    if (!React.isValidElement(item)) {
      return item;
    }
    const last = childrenArray[index - 1];
    const lastIsSeparator = React.isValidElement(last) && last.type === BreadcrumbSeparator;
    const currentIsSeparator = item.type === BreadcrumbSeparator;
    if (!lastIsSeparator && !currentIsSeparator && index > 0) {
      return (
        <React.Fragment key={index}>
          <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
          {item}
        </React.Fragment>
      )
    }
    return item;
  });
  return (
    <StyledBreadcrumb as={as} className={className} {...props}>
      {withSeparatorChildren}
    </StyledBreadcrumb>
  );
}

export const Breadcrumb = withSchema(BreadcrumbBase, {
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
  Group: BreadcrumbGroup,
  displayName: 'Breadcrumb',
});
