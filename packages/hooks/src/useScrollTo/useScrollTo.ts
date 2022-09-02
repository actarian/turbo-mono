import { animate } from 'framer-motion';

export function useScrollTo(): (event: React.MouseEvent<HTMLElement>) => void {
  // The handler to smoothly scroll the element into view
  const scrollToHash = (event: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== 'undefined') {
      const href = event.currentTarget.getAttribute('href');
      if (href?.indexOf('#')) {
        const hashId = `#${href.split('#')[1]}`;
        // console.log('NavLink.onClick', event.currentTarget.getAttribute('href'), hashId);
        // Get the hash from the url
        // const hashId = window.location.hash;
        if (hashId) {
          // Use the hash to find the first element with that id
          const element = document.querySelector(hashId);
          // console.log('NavLink.element', element);
          if (element) {
            const rect = element.getBoundingClientRect();
            // console.log(rect);
            const from = window.scrollY;
            const to = window.scrollY + (rect.top - window.scrollY);
            // const to = window.scrollY + ((rect.top - window.innerHeight * 0.25) - window.scrollY);
            const duration = Math.abs((to - from) / 2000);
            // console.log(from, to, duration);
            animate(from, to, { duration, onUpdate: v => window.scrollTo(0, v) });
            /*
            console.log(window.scrollY);
            setTimeout(() => {
              console.log(window.scrollY);
            }, 100);
            */
          }
        }
      }
    }
  }
  return scrollToHash;
}
