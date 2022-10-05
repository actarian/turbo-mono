import { useEventListener } from '../useEventListener/useEventListener';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect';

export function useResize(callback: () => unknown, immediate: boolean = true): void {

  const handleResize = () => callback();

  useEventListener('resize', handleResize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    if (immediate) {
      handleResize();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

}
