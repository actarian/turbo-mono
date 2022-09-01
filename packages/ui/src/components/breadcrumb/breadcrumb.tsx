import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import BreadcrumbItem from './breadcrumb-item';
import BreadcrumbSeparator from './breadcrumb-separator';

interface Props {
  separator?: string | ReactNode;
  className?: string;
}

export type BreadcrumbProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledBreadcrumb = styled.div`
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

const Breadcrumb: React.FC<React.PropsWithChildren<BreadcrumbProps>> = ({
  separator = '/',
  className = '',
  children,
  ...props
}: BreadcrumbProps) => {
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
    <StyledBreadcrumb as="nav" className={className} {...props}>
      {withSeparatorChildren}
    </StyledBreadcrumb>
  );
}

Breadcrumb.displayName = 'Breadcrumb';

(Breadcrumb as IBreadcrumb).Item = BreadcrumbItem;
(Breadcrumb as IBreadcrumb).Separator = BreadcrumbSeparator;

export default Breadcrumb as IBreadcrumb;

type IBreadcrumb = typeof Breadcrumb & {
  Item: typeof BreadcrumbItem;
  Separator: typeof BreadcrumbSeparator;
};
