import { useCurrentState } from '@websolute/hooks';
import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { pickChild } from '../popover/popover-collections';
import { PaginationConfig, PaginationContext, PaginationUpdateType } from './pagination-context';
import PaginationNext from './pagination-next';
import PaginationPages from './pagination-pages';
import PaginationPrevious from './pagination-previous';

interface Props {
  page?: number;
  initialPage?: number;
  count?: number;
  limit?: number;
  onChange?: (val: number) => void;
  className?: string;
}

export type PaginationProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  font-variant: tabular-nums;
  font-feature-settings: 'tnum';
  font-size: 0.875rem;
  --pagination-size: 2rem;

  :global(button:last-of-type) {
    margin-right: 0;
  }

  ${props => getCssResponsive(props)}
`;

const Pagination: React.FC<React.PropsWithChildren<PaginationProps>> = ({
  className = '',
  initialPage = 1,
  count = 1,
  limit = 7,
  page: customPage,
  children,
  onChange,
  ...props
}: React.PropsWithChildren<PaginationProps>) => {

  const [page, setPage, pageRef] = useCurrentState(initialPage);
  const [, prevChildren] = pickChild(children, PaginationPrevious);
  const [, nextChildren] = pickChild(children, PaginationNext);

  const [prevItem, nextItem] = useMemo(() => {
    const hasChildren = (c: any) => React.Children.count(c) > 0;
    const prevDefault = <PaginationPrevious>prev</PaginationPrevious>;
    const nextDefault = <PaginationNext>next</PaginationNext>;
    return [
      hasChildren(prevChildren) ? prevChildren : prevDefault,
      hasChildren(nextChildren) ? nextChildren : nextDefault,
    ];
  }, [prevChildren, nextChildren]);

  const values = useMemo<PaginationConfig>(() => {
    const update = (type: PaginationUpdateType) => {
      if (type === 'prev' && pageRef.current > 1) {
        setPage(last => last - 1);
      }
      if (type === 'next' && pageRef.current < count) {
        setPage(last => last + 1);
      }
    }
    return {
      isFirst: page <= 1,
      isLast: page >= count,
      update,
    };
  }, [page, count, pageRef, setPage]);

  useEffect(() => {
    onChange && onChange(page);
  }, [onChange, page]);

  useEffect(() => {
    if (customPage !== undefined) {
      setPage(customPage);
    }
  }, [customPage, setPage]);

  return (
    <PaginationContext.Provider value={values}>
      <StyledPagination as="nav" className={className} {...props}>
        {prevItem}
        <PaginationPages count={count} current={page} limit={limit} setPage={setPage} />
        {nextItem}
      </StyledPagination>
    </PaginationContext.Provider>
  )
}

Pagination.displayName = 'Pagination';

(Pagination as IPagination).Previous = PaginationPrevious;
(Pagination as IPagination).Next = PaginationNext;

export default Pagination as IPagination;

type IPagination = typeof Pagination & {
  Previous: typeof PaginationPrevious;
  Next: typeof PaginationNext;
};
