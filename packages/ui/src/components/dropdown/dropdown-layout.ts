import { FocusEvent, MouseEvent, MutableRefObject, useState } from 'react';

const defaultRect: ReactiveDomReact = {
  top: -1000,
  left: -1000,
  right: -1000,
  width: 0,
  height: 0,
  elementTop: -1000,
};

export type ReactiveDomReact = {
  top: number;
  left: number;
  right: number;
  width: number;
  height: number;
  elementTop: number;
};

export function getElementOffset(element?: HTMLElement | null | undefined) {
  if (!element) {
    return {
      top: 0,
      left: 0,
    };
  }
  const { top, left } = element.getBoundingClientRect();
  return { top, left };
}

export function isUnplacedRect(rect?: ReactiveDomReact): boolean {
  if (!rect) {
    return true;
  }
  return rect.top === defaultRect.top && rect.left === defaultRect.left;
}

export function getRefRect(ref?: MutableRefObject<HTMLElement | null>, getContainer?: () => HTMLElement | null): ReactiveDomReact {
  if (!ref || !ref.current) {
    return defaultRect;
  }
  const rect = ref.current.getBoundingClientRect();
  return getRectFromDOMWithContainer(rect, getContainer);
}

export function getEventRect(event?: MouseEvent<HTMLElement> | FocusEvent<HTMLElement>, getContainer?: () => HTMLElement | null) {
  const rect = (event?.target as HTMLElement)?.getBoundingClientRect();
  if (!rect) {
    return defaultRect;
  }
  return getRectFromDOMWithContainer(rect, getContainer);
}

export function useRect(initialState?: ReactiveDomReact | (() => ReactiveDomReact)) {
  const [rect, setRect] = useState<ReactiveDomReact>(initialState || defaultRect);

  const updateRect = (eventOrRef:
    | MouseEvent<HTMLElement>
    | FocusEvent<HTMLElement>
    | MutableRefObject<HTMLElement | null>, getContainer?: () => HTMLElement | null) => {
    if (isRefTarget(eventOrRef)) {
      return setRect(getRefRect(eventOrRef, getContainer));
    }
    setRect(getEventRect(eventOrRef, getContainer));
  };

  return { rect, setRect: updateRect };
}

function getRectFromDOMWithContainer(rect?: DOMRect, getContainer?: () => HTMLElement | null): ReactiveDomReact {
  if (!rect) {
    return defaultRect;
  }

  const container = getContainer ? getContainer() : null;
  const scrollElement = container || document.documentElement;
  const { top: offsetTop, left: offsetLeft } = getElementOffset(container);
  return {
    ...rect,
    width: rect.width || rect.right - rect.left,
    height: rect.height || rect.top - rect.bottom,
    top: rect.bottom + scrollElement.scrollTop - offsetTop,
    left: rect.left + scrollElement.scrollLeft - offsetLeft,
    elementTop: rect.top + scrollElement.scrollTop - offsetTop,
  };
}

function isRefTarget(eventOrRef:
  | MouseEvent<HTMLElement>
  | FocusEvent<HTMLElement>
  | MutableRefObject<HTMLElement | null>): eventOrRef is MutableRefObject<HTMLElement | null> {
  return typeof (eventOrRef as any)?.target === 'undefined';
}
