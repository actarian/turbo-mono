import { useClasses, useEventListener, useIsomorphicLayoutEffect } from '@websolute/hooks';
import React, { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { Loading } from '../../components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
  onMore: () => void;
  children?: ReactNode;
}

export type InfiniteLoaderProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledInfiniteLoader = styled.div<InfiniteLoaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin: 1rem 0;
  background-color: var(--color-primary-100);
  ${props => getCssResponsive(props)}
`

const InfiniteLoader: React.FC<InfiniteLoaderProps> = ({ onMore, children, ...props }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const classNames = useClasses('infinite-loader');

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      // console.log('rect', rect);
      if (rect.top < window.innerHeight * 0.9) {
        onMore();
      }
    }
  };

  useEventListener('scroll', handleScroll);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledInfiniteLoader ref={ref} className={classNames} {...props}>
      <Loading></Loading>
    </StyledInfiniteLoader>
  )
}

export default InfiniteLoader;
