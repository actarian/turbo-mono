import { useEffect, useState } from 'react';

export function useSSR(): SSRState {
  const [browser, setBrowser] = useState<boolean>(false)
  useEffect(() => {
    setBrowser(detectIsBrowser());
  }, []);
  return {
    isBrowser: browser,
    isServer: !browser,
  };
}

export type SSRState = {
  isBrowser: boolean;
  isServer: boolean;
};

export const detectIsBrowser = (): boolean => {
  return Boolean(
    typeof window !== 'undefined' && window.document && window.document.createElement
  );
}
