import React from 'react';
import { usePaginationContext } from './pagination-context';
import PaginationItem from './pagination-item';

export type PaginationNextProps = React.ButtonHTMLAttributes<any>;

const PaginationNext: React.FC<React.PropsWithChildren<PaginationNextProps>> = ({ children, ...props }) => {
  const { update, isLast } = usePaginationContext();
  return (
    <PaginationItem disabled={isLast} onClick={() => update && update('next')} {...props}>
      {children}
    </PaginationItem>
  );
}

PaginationNext.displayName = 'PaginationNext';

export default PaginationNext;
