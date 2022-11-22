import { useEffect, useRef, useState } from 'react';

export function useIdle(delay: number = 3000) {

  const [isIdle, setIsIdle] = useState<boolean>(false);

  // create a new reference to track timer
  const timeoutId = useRef<NodeJS.Timeout>();

  const goInactive = () => {
    setIsIdle(true);
  };

  const onStartTimer = () => {
    // wait till delay time before calling goInactive
    timeoutId.current = setTimeout(goInactive, delay);
  };

  const goActive = () => {
    setIsIdle(false);
    // start the timer to track Inactiveness
    onStartTimer();
  };

  const onResetTimer = () => {
    // reset the timer and make user active
    clearTimeout(timeoutId.current);
    goActive();
  };

  const setup = () => {
    document.addEventListener('mousemove', onResetTimer, false);
    document.addEventListener('mousedown', onResetTimer, false);
    document.addEventListener('keypress', onResetTimer, false);
    document.addEventListener('DOMMouseScroll', onResetTimer, false);
    document.addEventListener('mousewheel', onResetTimer, false);
    document.addEventListener('touchmove', onResetTimer, false);
    document.addEventListener('MSPointerMove', onResetTimer, false);

    // edge case
    // if tab is changed or is out of focus
    window.addEventListener('blur', onStartTimer, false);
    window.addEventListener('focus', onResetTimer, false);
  };

  const cleanUp = () => {
    document.removeEventListener('mousemove', onResetTimer);
    document.removeEventListener('mousedown', onResetTimer);
    document.removeEventListener('keypress', onResetTimer);
    document.removeEventListener('DOMMouseScroll', onResetTimer);
    document.removeEventListener('mousewheel', onResetTimer);
    document.removeEventListener('touchmove', onResetTimer);
    document.removeEventListener('MSPointerMove', onResetTimer);

    // edge case
    // if tab is changed or is out of focus
    window.removeEventListener('blur', onStartTimer);
    window.removeEventListener('focus', onResetTimer);

    // memory leak
    clearTimeout(timeoutId.current);
  };

  // assign and remove the listeners
  useEffect(() => {
    setup();

    return () => {
      cleanUp();
    };
  });

  // return previous value (happens before update in useEffect above)
  return isIdle;
}
