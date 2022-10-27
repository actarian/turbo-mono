import type { FetchRequestOptions, FetchService } from '@websolute/core';
import { httpFetch } from '@websolute/core';
import { Dispatch, useEffect, useState } from 'react';

export function useHttpFetch<T = any>(
  pathname: string,
  options: FetchRequestOptions = {},
  service: FetchService<T> = httpFetch,
  serviceOptions?: any
): [T | undefined, boolean, any, Dispatch<any>] {
  const [response, setResponse] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    // const source = axios.CancelToken.source();
    const fetchData = async () => {
      loading ? null : setLoading(true);
      error ? setError(null) : null;
      try {
        const response = await service(pathname, options, serviceOptions);
        // console.log('useHttp.response', response);
        setResponse(response);
      } catch (error) {
        // console.error(error)
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
    // return () => source.cancel();
  }, [pathname, options.method, options.body]);
  return [response, loading, error, setError];
}

export function useHttpGet<T = any>(pathname: string, options: FetchRequestOptions = {}) {
  return useHttpFetch<T>(pathname, { ...options, method: 'GET' });
}

export function useHttpPost<T = any>(pathname: string, payload: any, options: FetchRequestOptions = {}) {
  return useHttpFetch<T>(pathname, { ...options, method: 'POST', body: payload ? JSON.stringify(payload) : undefined });
}

export function useHttpPut<T = any>(pathname: string, payload: any, options: FetchRequestOptions = {}) {
  return useHttpFetch<T>(pathname, { ...options, method: 'PUT', body: payload ? JSON.stringify(payload) : undefined });
}

export function useHttpPatch<T = any>(pathname: string, payload: any, options: FetchRequestOptions = {}) {
  return useHttpFetch<T>(pathname, { ...options, method: 'PATCH', body: payload ? JSON.stringify(payload) : undefined });
}

export function useHttpDelete<T = any>(pathname: string, options: FetchRequestOptions = {}) {
  return useHttpFetch<T>(pathname, { ...options, method: 'DELETE' });
}
