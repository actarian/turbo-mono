import { useEffect, useRef } from 'react';

export function usePrevious<T>(state: T): T | undefined | null {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    ref.current = state;
  });
  return ref ? ref.current : null;
}
