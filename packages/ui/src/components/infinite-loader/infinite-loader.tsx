import { getClassNames } from '@websolute/core';
import { useEventListener, useIsomorphicLayoutEffect } from '@websolute/hooks';
import React, { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { Loading } from '../../components';
import type { UIComponent, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
  onMore: () => void;
  children?: ReactNode;
}

export type InfiniteLoaderProps = UIStyledComponentProps<Props>;

export type InfiniteLoaderComponent<C extends React.ElementType = 'div'> = UIComponent<C, Props>;

export type StyledInfiniteLoaderProps = UIStyledComponentProps;

const StyledInfiniteLoader = styled.div<StyledInfiniteLoaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin: 1rem 0;
  background-color: var(--color-primary-100);
  ${props => getCssResponsive(props)}
`;

const InfiniteLoader: InfiniteLoaderComponent = ({ children, as = 'div' as React.ElementType, onMore, ...props }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      // console.log('rect', rect);
      if (rect.top < window.innerHeight * 0.9) {
        onMore();
      }
    }
  };

  useEventListener('scroll', onScroll);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    onScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classNames = getClassNames('infinite-loader');

  return (
    <StyledInfiniteLoader as={as} ref={ref} className={classNames} {...props}>
      <Loading></Loading>
    </StyledInfiniteLoader>
  )
}

export default InfiniteLoader;
