import { NextRouter, useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export const isBrowser = typeof window !== 'undefined';

function replace_(params: URLSearchParams) {
  if (window.history) {
    const title = document.title;
    const url = `${window.location.href.split('?')[0]}?${params.toString()}`;
    window.history.replaceState(params.toString(), title, url);
  }
}

function deserialize_(url: string): URLSearchParams {
  const components = url.split('?');
  const search = components[1] || '';
  return new URLSearchParams(search);
}

function serialize_(url: string, params: IParams): URLSearchParams {
  const searchParams = deserialize_(url);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      searchParams.set(key, value);
    }
  }
  return searchParams;
}

function searchParamsToObject_(params: URLSearchParams): { [key: string]: string } {
  const entries = params.entries();
  const result: { [key: string]: string } = {};
  for (const [key, value] of entries) { // each 'entry' is a [key, value] tuple
    result[key] = value;
  }
  return result;
}

export function getSearchParams(url: string, key?: string): IParams | string | null {
  const params = deserialize_(url);
  const value = key ? params.get(key) : Object.fromEntries(params);
  // console.log('getSearchParams', value, params, search);
  return value;
}

export function updateSearchParams(currentPath: string, params: IParams): { pathname: string, query: { [key: string]: string } } {
  const components = currentPath.split('?');
  const searchParams = serialize_(components[1] || '', params);
  const query = searchParamsToObject_(searchParams);
  const pathname = components[0] || '';
  // console.log(pathname, query);
  return { pathname, query };
}

export function replaceSearchParams(router: NextRouter, params: IParams): void {
  const { pathname, query } = updateSearchParams(router.asPath, params);
  router.replace({ pathname, query });
}

export function pushSearchParams(router: NextRouter, params: IParams): void {
  const { pathname, query } = updateSearchParams(router.asPath, params);
  router.push({ pathname, query });
}

export function replaceSearchParamsSilently(params: IParams): void {
  if (isBrowser) {
    const searchParams = serialize_(window.location.search, params);
    replace_(searchParams);
  }
}

export function useSearchParams(): IUseSearchParamsResult {
  const router = useRouter();

  const initialValue = useMemo(() => {
    const params = deserialize_(router.asPath);
    const value = Object.fromEntries(params);
    return value;
  }, [router.asPath]);

  const params = initialValue;

  const replaceParamsSilently = useCallback((params: IParams) => {
    replaceSearchParamsSilently(params);
  }, []);

  return { params, replaceParamsSilently };
}

export function useSearchParamsValue(key: string): IUseSearchParamsValueResult {
  const router = useRouter();

  const initialValue = useMemo(() => {
    const params = deserialize_(router.asPath);
    const value = params.get(key);
    return value;
  }, [key, router.asPath]);

  const params = initialValue;

  const replaceParamsSilently = useCallback((params: IParams) => {
    replaceSearchParamsSilently(params);
  }, [key]);

  return { params, replaceParamsSilently };
}

export type IUseSearchParamsResult = { params: IParams, replaceParamsSilently: (params: IParams) => void };

export type IUseSearchParamsValueResult = { params: string | null, replaceParamsSilently: (params: IParams) => void };

export type IParams = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: string;
};
