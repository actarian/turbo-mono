import { useEffect } from 'react';

export function useClickAnyWhere(handler: (event: MouseEvent) => void) {
  useEffect(() => {
    const callback = (event: MouseEvent) => handler(event);
    document.addEventListener('click', callback);
    return () => document.removeEventListener('click', callback);
  }, [handler]);
}
