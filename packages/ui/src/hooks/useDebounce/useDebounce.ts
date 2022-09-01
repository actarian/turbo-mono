import { debounce } from 'lodash';
import { useEffect, useMemo } from 'react';

export function useDebounce(callback: (...rest: any[]) => void, msec: number = 500): () => void {
  const debounced = useMemo(() => (
    debounce(callback, msec)
  ), []);

  useEffect(() => {
    return () => {
      debounced.cancel();
    }
  }, []);

  return debounced;
}
