import { withSchema } from '@websolute/core';
import { useCurrentState } from '@websolute/hooks';
import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { pickChild } from '../popover/popover-collections';
import { PaginationConfig, PaginationContext, PaginationUpdateType } from './pagination-context';
import { PaginationNext } from './pagination-next';
import { PaginationPages } from './pagination-pages';
import { PaginationPrevious } from './pagination-previous';

type Props = {
  page?: number;
  initialPage?: number;
  count?: number;
  limit?: number;
  onChange?: (val: number) => void;
  className?: string;
};

export type PaginationProps = UIStyledComponentProps<Props>;

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

const PaginationBase: React.FC<React.PropsWithChildren<PaginationProps>> = ({
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

  const update = (type: PaginationUpdateType) => {
    if (type === 'prev' && pageRef.current > 1) {
      setPage(last => last - 1);
    }
    if (type === 'next' && pageRef.current < count) {
      setPage(last => last + 1);
    }
  };
  const values = useMemo<PaginationConfig>(() => {
    return {
      isFirst: page <= 1,
      isLast: page >= count,
      update,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, count]);

  useEffect(() => {
    onChange && onChange(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (customPage !== undefined) {
      setPage(customPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customPage]);

  return (
    <PaginationContext.Provider value={values}>
      <StyledPagination as="nav" className={className} {...props}>
        {prevItem}
        <PaginationPages count={count} current={page} limit={limit} setPage={setPage} />
        {nextItem}
      </StyledPagination>
    </PaginationContext.Provider>
  );
};

export const Pagination = withSchema(PaginationBase, {
  Previous: PaginationPrevious,
  Next: PaginationNext,
  displayName: 'Pagination',
});
