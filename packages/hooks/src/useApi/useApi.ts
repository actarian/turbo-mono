import { apiDelete, apiFetch, apiGet, apiPatch, apiPost, apiPut, FetchRequestOptions } from '@websolute/core';
import { useHttpFetch } from '../useHttp/useHttp';
import { useLayout } from '../useLayout/useLayout';

export function useApiFetch<T = any>(pathname: string, options: FetchRequestOptions = {}) {
  const layout = useLayout();
  return useHttpFetch<T>(pathname, options, apiFetch, layout);
}

export function useApiGet<T = any>(pathname: string, options: FetchRequestOptions = {}) {
  return useApiFetch<T>(pathname, { ...options, method: 'GET' });
}

export function useApiPost<T = any>(pathname: string, payload: unknown, options: FetchRequestOptions = {}) {
  return useApiFetch<T>(pathname, { ...options, method: 'POST', body: payload ? JSON.stringify(payload) : undefined });
}

export function useApiPut<T = any>(pathname: string, payload: unknown, options: FetchRequestOptions = {}) {
  return useApiFetch<T>(pathname, { ...options, method: 'PUT', body: payload ? JSON.stringify(payload) : undefined });
}

export function useApiPatch<T = any>(pathname: string, payload: unknown, options: FetchRequestOptions = {}) {
  return useApiFetch<T>(pathname, { ...options, method: 'PATCH', body: payload ? JSON.stringify(payload) : undefined });
}

export function useApiDelete<T = any>(pathname: string, options: FetchRequestOptions = {}) {
  return useApiFetch<T>(pathname, { ...options, method: 'DELETE' });
}

export function useApi(): {
  get: <T = any>(pathname: string, options?: FetchRequestOptions) => Promise<T>;
  post: <T = any>(pathname: string, payload?: unknown, options?: FetchRequestOptions) => Promise<T>;
  put: <T = any>(pathname: string, payload?: unknown, options?: FetchRequestOptions) => Promise<T>;
  patch: <T = any>(pathname: string, payload?: unknown, options?: FetchRequestOptions) => Promise<T>;
  delete: <T = any>(pathname: string, options?: FetchRequestOptions) => Promise<T>;
} {
  const layout = useLayout();
  return {
    get: async <T = any>(pathname: string, options: FetchRequestOptions = {}) => {
      return apiGet<T>(pathname, options, layout);
    },
    post: async <T = any>(pathname: string, payload?: unknown, options: FetchRequestOptions = {}) => {
      return apiPost<T>(pathname, payload, options, layout);
    },
    put: async <T = any>(pathname: string, payload?: unknown, options: FetchRequestOptions = {}) => {
      return apiPut<T>(pathname, payload, options, layout);
    },
    patch: async <T = any>(pathname: string, payload?: unknown, options: FetchRequestOptions = {}) => {
      return apiPatch<T>(pathname, payload, options, layout);
    },
    delete: async <T = any>(pathname: string, options: FetchRequestOptions = {}) => {
      return apiDelete<T>(pathname, options, layout);
    },
  }
}
