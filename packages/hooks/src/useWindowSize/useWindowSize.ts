import { useState } from 'react';
import { useEventListener } from '../useEventListener/useEventListener';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect';

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): WindowSize {

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0, height: 0,
  });

  const handleSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWindowSize({ width, height });
  };

  useEventListener('resize', handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}
