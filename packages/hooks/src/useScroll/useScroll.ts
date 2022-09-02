import { useState } from 'react';
import { useEventListener } from '../useEventListener/useEventListener';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect';

interface Scroll {
  left: number;
  top: number;
}

export function useScroll(): Scroll {
  const [scroll, setScroll] = useState<Scroll>({ left: 0, top: 0 });

  const handleScroll = () => {
    const left = window.pageXOffset;
    const top = window.pageYOffset;
    if (scroll.left !== left || scroll.top !== top) {
      setScroll({ left, top });
    }
  };

  useEventListener('scroll', handleScroll);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scroll;
}
