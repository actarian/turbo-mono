import { NextRouter, useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

const USE_ENCRYPTION = true;

export const isBrowser = typeof window !== 'undefined';

function base64ToString(base64: string): string {
  if (!USE_ENCRYPTION) return base64;
  return isBrowser ? window.atob(base64) : Buffer.from(base64, 'base64').toString();
}

function stringToBase64(text: string): string {
  if (!USE_ENCRYPTION) return text;
  return isBrowser ? window.btoa(text) : Buffer.from(text).toString('base64');
}

function stringToURLSearchParams(url: string):URLSearchParams {
  // console.log('stringToURLSearchParams', url);
  return new URLSearchParams(url);
}

/*
function hasURLSearchParams(url: string, key: string):boolean {
  const params = stringToURLSearchParams(url);
  return params.has(key);
}
*/

function getURLSearchParams(url: string, key: string): string | null {
  const params = stringToURLSearchParams(url);
  return params.get(key);
}

function setURLSearchParams(url: string, keyOrValue: string, value: string | null | undefined): URLSearchParams { // !!! any
  const params = stringToURLSearchParams(url);
  if (value != null) {
    params.set(keyOrValue, value);
  } else {
    params.set(keyOrValue, '');
  }
  return params;
  // push_(params);
  // replace_(params);
}

/*
function push_(params: URLSearchParams) {
  if (window.history) {
    const title = document.title;
    const url = `${window.location.href.split('?')[0]}?${params.toString()}`;
    window.history.pushState(params.toString(), title, url);
  }
}
*/

function replace_(params: URLSearchParams) {
  if (window.history) {
    const title = document.title;
    const url = `${window.location.href.split('?')[0]}?${params.toString()}`;
    window.history.replaceState(params.toString(), title, url);
  }
}

/*
function replace__(from: string, to: string) {
  const history = window.history;
  if (history && history.replaceState) {
    const location = window.location;
    const title = document.title;
    if (location.pathname === '/') {
      const url = location.origin + to + location.search;
      history.replaceState(history.state, title, url);
    } else if (location.href.indexOf(from) !== -1) {
      const url = location.href.replace(from, to);
      history.replaceState(history.state, title, url);
    }
  }
}
*/

function deserialize_(url: string, key?: string) {
  const encoded = getURLSearchParams(url, 'params');
  return decode(encoded, key);
}

function serialize_(url: string, value: IParams, key?: string): URLSearchParams {
  const params = deserialize_(url);
  const encoded = encode(params, value, key);
  return setURLSearchParams(url, 'params', encoded);
}

export function decode(encoded: string | null | undefined, key?: string): IParams {
  let decoded = null;
  if (encoded) {
    const json = base64ToString(encoded);
    decoded = JSON.parse(json);
  }
  // console.log('useSearchParams.decode', decoded);
  if (key && decoded) {
    decoded = decoded[key];
  }
  return decoded || null;
}

function encode(params: IParams, value: IParams, key?: string) {
  params = params || {};
  let encoded = null;
  if (typeof key === 'string') {
    params[key] = value;
  } else if (typeof value === 'object') {
    params = Object.assign(params, value);
  }
  // console.log('useSearchParams.encode', params);
  const json = JSON.stringify(params);
  encoded = stringToBase64(json);
  return encoded;
}

function searchParamsToObject_(params: URLSearchParams): { [key: string]: string } {
  const entries = params.entries();
  const result: { [key: string]: string } = {};
  for (const [key, value] of entries) { // each 'entry' is a [key, value] tuple
    result[key] = value;
  }
  return result;
}

export function getSearchParams(url: string, key?: string): {} | null {
  const components = url.split('?');
  const search = components[1] || '';
  const searchParams = new URLSearchParams(search);
  const params = searchParams.get('params');
  const value = params ? decode(params, key) : null;
  // console.log('getSearchParams', value, params, search);
  return value;
}

export function updateSearchParams(currentPath: string, value: IParams, key?: string): { pathname: string, query: { [key: string]: string } } {
  const components = currentPath.split('?');
  const searchParams = serialize_(components[1] || '', value, key);
  const query = searchParamsToObject_(searchParams);
  const pathname = components[0] || '';
  // console.log(pathname, query);
  return { pathname, query };
}

export function replaceSearchParams(router: NextRouter, value: IParams, key?: string):void {
  const { pathname, query } = updateSearchParams(router.asPath, value, key);
  router.replace({ pathname, query });
}

export function pushSearchParams(router: NextRouter, value: IParams, key?: string):void {
  const { pathname, query } = updateSearchParams(router.asPath, value, key);
  router.push({ pathname, query });
}

export function replaceSearchParamsSilently(value: IParams, key?: string):void {
  if (isBrowser) {
    const searchParams = serialize_(window.location.search, value, key);
    replace_(searchParams);
  }
}

export function useSearchParams(key?: string): IUseSearchParamsResult {
  const router = useRouter();

  const initialValue = useMemo(() => {
    const value = getSearchParams(router.asPath, key);
    return value;
  }, [key, router.asPath]);

  const params = initialValue;
  // console.log('useSearchParams', params);
  // const [params, setParams_] = useState(initialValue);

  /*
  const setParams = useCallback((params: IParams) => {
    replaceSearchParams(router, params, key);
  }, [key, router]);
  */

  const replaceParamsSilently = useCallback((params: IParams) => {
    replaceSearchParamsSilently(params, key);
  }, [key]);

  return { params, replaceParamsSilently };
}

export type IUseSearchParamsResult = { params: IParams, replaceParamsSilently: (params:IParams) => void };

export type IParams = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key:string]: any;
} | null;
