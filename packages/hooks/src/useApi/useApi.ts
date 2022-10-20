import type { FetchRequestOptions } from '@websolute/core';
import { apiFetch } from '@websolute/core';
import { useHttpFetch } from '../useHttp/useHttp';
import { useLayout } from '../useLayout/useLayout';

export function useApiFetch<T>(pathname: string, options: FetchRequestOptions = {}) {
  const layout = useLayout();
  return useHttpFetch<T>(pathname, options, apiFetch, layout);
}

export function useApiGet<T>(pathname: string, options: FetchRequestOptions = {}) {
  return useApiFetch<T>(pathname, { ...options, method: 'GET' });
}

export function useApiPost<T>(pathname: string, payload: any, options: FetchRequestOptions = {}) {
  return useApiFetch<T>(pathname, { ...options, method: 'POST', body: payload ? JSON.stringify(payload) : undefined });
}

export function useApiPut<T>(pathname: string, payload: any, options: FetchRequestOptions = {}) {
  return useApiFetch<T>(pathname, { ...options, method: 'PUT', body: payload ? JSON.stringify(payload) : undefined });
}

export function useApiPatch<T>(pathname: string, payload: any, options: FetchRequestOptions = {}) {
  return useApiFetch<T>(pathname, { ...options, method: 'PATCH', body: payload ? JSON.stringify(payload) : undefined });
}

export function useApiDelete<T>(pathname: string, options: FetchRequestOptions = {}) {
  return useApiFetch<T>(pathname, { ...options, method: 'DELETE' });
}
