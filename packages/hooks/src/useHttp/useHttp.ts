import type { FetchRequestOptions, FetchService } from '@websolute/core';
import { httpFetch } from '@websolute/core';
import { useEffect, useState } from 'react';

export function useHttpFetch<T>(pathname: string, options: FetchRequestOptions = {}, service: FetchService = httpFetch) {
  const [response, setResponse] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    // const source = axios.CancelToken.source();
    const fetchData = async () => {
      loading ? null : setLoading(true);
      error ? setError(null) : null;
      try {
        const response = await service(pathname, options);
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
  return { response, loading, error, setError };
}

export function useHttpGet<T>(pathname: string, options: FetchRequestOptions = {}) {
  return useHttpFetch<T>(pathname, { ...options, method: 'GET' });
}

export function useHttpPost<T>(pathname: string, payload: any, options: FetchRequestOptions = {}) {
  return useHttpFetch<T>(pathname, { ...options, method: 'POST', body: payload ? JSON.stringify(payload) : undefined });
}

export function useHttpPut<T>(pathname: string, payload: any, options: FetchRequestOptions = {}) {
  return useHttpFetch<T>(pathname, { ...options, method: 'PUT', body: payload ? JSON.stringify(payload) : undefined });
}

export function useHttpPatch<T>(pathname: string, payload: any, options: FetchRequestOptions = {}) {
  return useHttpFetch<T>(pathname, { ...options, method: 'PATCH', body: payload ? JSON.stringify(payload) : undefined });
}

export function useHttpDelete<T>(pathname: string, options: FetchRequestOptions = {}) {
  return useHttpFetch<T>(pathname, { ...options, method: 'DELETE' });
}
