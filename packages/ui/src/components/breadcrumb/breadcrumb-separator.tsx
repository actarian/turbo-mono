import { getClassNames } from '@websolute/core';
import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type BreadcrumbsSeparatorProps = Props & NativeAttrs;

const StyledBreadcrumbsSeparator = styled.div`
  display: inline-flex;
  user-select: none;
  pointer-events: none;
  align-items: center;
  margin: 0 0.5rem;
`;

const BreadcrumbsSeparator: React.FC<React.PropsWithChildren<BreadcrumbsSeparatorProps>> = ({
  className = '',
  children,
}: BreadcrumbsSeparatorProps) => {
  const classNames = getClassNames('breadcrumb-separator', className);
  return (
    <StyledBreadcrumbsSeparator className={classNames}>
      {children}
    </StyledBreadcrumbsSeparator>
  )
}

BreadcrumbsSeparator.displayName = 'BreadcrumbsSeparator';

export default BreadcrumbsSeparator;
