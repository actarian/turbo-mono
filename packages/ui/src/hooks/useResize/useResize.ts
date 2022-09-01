import { useEffect } from 'react';

export function useResize(callback: () => unknown, immediate: boolean = true): void {
  useEffect(() => {
    const handler = () => callback();
    if (immediate) {
      handler();
    }
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
}
