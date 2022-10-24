import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, msec: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), msec);

    return () => {
      clearTimeout(timer);
    }
  }, [value, msec]);

  return debouncedValue;
}
