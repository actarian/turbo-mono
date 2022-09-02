import { useEffect, useMemo, useState } from 'react';

export function useInfiniteLoader(items: any[], perPage: number = 12, delayInMs = 100): [any[], () => void, boolean] {

  const total = items.length;

  const [position, setPosition] = useState(Math.min(total, perPage));

  const [hasMore, setHasMore] = useState(position < total);

  const [more, setMore] = useState(0);

  useEffect(() => {
    const nextPosition = Math.min(total, perPage);
    setPosition(nextPosition);
    setMore(0);
    setHasMore(nextPosition < total);
  }, [items]);

  const visibleItems = useMemo(() => (
    items.slice(0, position)
  ), [items, position]);

  const loadMore = () => {
    setMore(more + 1);
  }

  useEffect(() => {
    // console.log('useInfiniteLoader', hasMore, more, total, position);
    if (hasMore && more > 0) {
      const timer = setTimeout(() => {
        const nextPosition = Math.min(total, position + perPage);
        setPosition(nextPosition);
        setHasMore(nextPosition < total);
      }, delayInMs);
      return () => {
        clearTimeout(timer);
      };
    }
    return;
  }, [more, delayInMs]);

  return [visibleItems, loadMore, hasMore];
}

export default useInfiniteLoader;
