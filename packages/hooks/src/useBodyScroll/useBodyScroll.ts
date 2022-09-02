/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';

const defaultOptions: BodyScrollOptions = {
  scrollLayer: false,
  delayReset: 0,
};

const elementStack = new Map<HTMLElement, ElementStackItem>();

export function useBodyScroll(elementRef?: RefObject<HTMLElement> | null, options?: BodyScrollOptions): [boolean, Dispatch<SetStateAction<boolean>>] {
  if (typeof document === 'undefined') {
    return [false, (t: boolean) => t] as any;
  }
  elementRef = elementRef || useRef<HTMLElement>(document.body);
  const [hidden, setHidden] = useState<boolean>(false);
  const safeOptions = {
    ...defaultOptions,
    ...(options || {}),
  };

  useEffect(() => {
    if (!elementRef || !elementRef.current) {
      return;
    }
    const lastOverflow = elementRef.current.style.overflow;
    if (hidden) {
      if (elementStack.has(elementRef.current)) {
        return;
      }
      const paddingRight = getOwnerPaddingRight(elementRef.current);
      const scrollbarWidth = getOwnerScrollbarWidth(elementRef.current);
      // console.log('paddingRight', paddingRight, 'scrollbarWidth', scrollbarWidth);
      elementStack.set(elementRef.current, {
        overflow: lastOverflow,
        paddingRight: elementRef.current.style.paddingRight,
      });
      elementRef.current.style.setProperty('--locked-padding-right', `${paddingRight + scrollbarWidth}px`);
      elementRef.current.style.overflow = 'hidden';
      elementRef.current.style.paddingRight = 'var(--locked-padding-right)';
      return;
    }

    // reset element overflow
    if (!elementStack.has(elementRef.current)) {
      return;
    }

    const reset = (element: HTMLElement) => {
      const store = elementStack.get(element) as ElementStackItem;
      if (!store) {
        return;
      }
      element.style.setProperty('--locked-padding-right', '0');
      element.style.overflow = store.overflow;
      element.style.paddingRight = store.paddingRight;
      elementStack.delete(element);
    }

    const timer = window.setTimeout(() => {
      reset(elementRef!.current!);
      window.clearTimeout(timer);
    }, safeOptions.delayReset);

  }, [hidden, elementRef]);

  return [hidden, setHidden];
}

export function getOwnerPaddingRight(element: Element): number {
  const owner = element?.ownerDocument || document;
  const view = owner.defaultView || window;
  return Number.parseInt(view.getComputedStyle(element).paddingRight, 10) || 0;
}

export function getOwnerScrollbarWidth(element: Element): number {
  const doc = element?.ownerDocument || document;
  return Math.abs(window.innerWidth - doc.documentElement.clientWidth);
}

export type ElementStackItem = {
  overflow: string;
  paddingRight: string;
};

export type BodyScrollOptions = {
  scrollLayer?: boolean;
  delayReset?: number;
};
