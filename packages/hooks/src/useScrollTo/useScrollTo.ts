import { animate } from 'framer-motion';

export function useScrollTo(): (event: React.MouseEvent<HTMLElement>) => void {
  // The handler to smoothly scroll the element into view
  const scrollToHash = (event: React.MouseEvent<HTMLElement>) => {
    const href = event.currentTarget.getAttribute('href');
    // console.log(event.currentTarget, href, href?.indexOf('#'));
    if (href && href.indexOf('#') !== -1) {
      const hashId = `#${href.split('#')[1]}`;
      // console.log('hashId', hashId);
      // console.log('NavLink.onClick', event.currentTarget.getAttribute('href'), hashId);
      scrollToSelector(hashId);
    }
  };
  return scrollToHash;
}

export function scrollToSelector(selector?: string, offset: number = 0) {
  if (selector && typeof window !== 'undefined') {
    const element = document.querySelector(selector);
    if (element) {
      const rect = element.getBoundingClientRect();
      scrollToRelativeY(rect.top, offset);
    }
  }
}

export function scrollToRelativeY(y: number = 0, offset: number = 0) {
  const to = window.scrollY + y - 60 + offset;
  return scrollToY(to);
}

export function scrollToY(y: number = 0) {
  const from = window.scrollY;
  const to = y;
  const duration = Math.sqrt(Math.abs(to - from) / 4000);
  animate(from, to, { duration, onUpdate: v => window.scrollTo(0, v) });
}
