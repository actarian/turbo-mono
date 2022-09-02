import { useEffect, useState } from 'react';

export function useSSR(): SSRState {
  const [browser, setBrowser] = useState<boolean>(false)
  useEffect(() => {
    setBrowser(isBrowser());
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

export const isBrowser = (): boolean => {
  return Boolean(
    typeof window !== 'undefined' && window.document && window.document.createElement
  );
}
