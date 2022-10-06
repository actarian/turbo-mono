import { animate } from 'framer-motion';

export function useScrollTo(): (event: React.MouseEvent<HTMLElement>) => void {
  // The handler to smoothly scroll the element into view
  const scrollToHash = (event: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== 'undefined') {
      const href = event.currentTarget.getAttribute('href');
      // console.log(event.currentTarget, href, href?.indexOf('#'));
      if (href && href.indexOf('#') !== -1) {
        const hashId = `#${href.split('#')[1]}`;
        // console.log('hashId', hashId);
        // console.log('NavLink.onClick', event.currentTarget.getAttribute('href'), hashId);
        if (hashId) {
          // Use the hash to find the first element with that id
          const element = document.querySelector(hashId);
          // console.log('NavLink.element', element);
          if (element) {
            const rect = element.getBoundingClientRect();
            // console.log(rect);
            const from = window.scrollY;
            const to = window.scrollY + rect.top - 60;
            const duration = Math.sqrt(Math.abs(to - from) / 4000);
            // console.log(from, to, duration);
            animate(from, to, { duration, onUpdate: v => window.scrollTo(0, v) });
          }
        }
      }
    }
  }
  return scrollToHash;
}
