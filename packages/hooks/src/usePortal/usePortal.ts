import { useEffect, useState } from 'react';
import { useSSR } from '../useSSR/useSSR';

const namespace = 'design-system';

export function usePortal(name: string = getUID(), getContainer?: () => HTMLElement | null): HTMLElement | null {
  const { isBrowser } = useSSR();

  const id = `${namespace}-${name}`;

  const [portal, setPortal] = useState<HTMLElement | null>(isBrowser ? createElementWithId(id) : null);

  useEffect(() => {
    const container = typeof getContainer === 'function' ? getContainer() : null;
    const parentElement = container || document.body
    const element = parentElement.querySelector<HTMLElement>(`#${id}`) || createElementWithId(id);
    if (!element.parentElement) {
      parentElement.appendChild(element);
    }
    setPortal(element);
  }, []);

  return portal;
}

export function createElementWithId(id: string): HTMLElement {
  const element = document.createElement('div');
  element.setAttribute('id', id);
  return element;
}

export function getUID() {
  return Math.random().toString(32).slice(2, 10);
}
