import { getClassNames } from '@websolute/core';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type BreadcrumbSeparatorProps = Props & NativeAttrs;

const StyledBreadcrumbSeparator = styled.div`
  display: inline-flex;
  user-select: none;
  pointer-events: none;
  align-items: center;
  margin: 0 0.5rem;
`;

export const BreadcrumbSeparator: React.FC<React.PropsWithChildren<BreadcrumbSeparatorProps>> = ({
  className = '',
  children,
}: BreadcrumbSeparatorProps) => {
  const classNames = getClassNames('breadcrumb-separator', className);
  return (
    <StyledBreadcrumbSeparator className={classNames}>
      {children}
    </StyledBreadcrumbSeparator>
  )
}

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
