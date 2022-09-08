import { FetchRequestOptions, httpFetch } from '@core/http/http.service';
import { merge } from '@core/utils';

const LOCAL_API_URL = process.env.NEXT_PUBLIC_URL === 'https://' ? 'http://localhost:3007' : process.env.NEXT_PUBLIC_URL;
const LOCAL_API_BASE = process.env.NEXT_PUBLIC_API || '/api';
// const BEARER = process.env.STORE_BEARER || '7584f15d12972fb1e7695e998dd5e4c754f46c74d06a08e8d76f556adcd045e48cd52bed6faac098784471ac273ee40243194b9cff7eba3c4a768f8f41d2d51959a7f767b943c7f0170f6e5f632db523803c357083bf7a7bf03ee8e0df2d8ce5cd52e0211283b34d7781313da775018a9e950433d2b6faf711c20e5a63b25243';

const defaultApiOptions: FetchRequestOptions = {
  // mode: 'cors',
  headers: {
    // Authorization: `Bearer ${BEARER}`,
  },
};

// typeof eval === 'function' ? defaultApiOptions.mode = 'cors' : null;

export async function apiFetch(pathname: string, options: FetchRequestOptions = {}): Promise<any> {
  const url = `${LOCAL_API_URL}${LOCAL_API_BASE}${pathname}`;
  const apiOptions = merge({ ...defaultApiOptions }, options);
  // console.log('apiFetch', url, options);
  const apiResponse = await httpFetch(url, apiOptions);
  return apiResponse;
}

export async function apiGet(url: string, options: FetchRequestOptions = {}): Promise<any> {
  return await apiFetch(url, { ...options, method: 'GET' });
}

export async function apiPost(url: string, payload: any, options: FetchRequestOptions = {}): Promise<any> {
  return await apiFetch(url, { ...options, method: 'POST', body: JSON.stringify(payload) });
}

export async function apiPut(url: string, payload: any, options: FetchRequestOptions = {}): Promise<any> {
  return await apiFetch(url, { ...options, method: 'PUT', body: JSON.stringify(payload) });
}

export async function apiPatch(url: string, payload: any, options: FetchRequestOptions = {}): Promise<any> {
  return await apiFetch(url, { ...options, method: 'PATCH', body: JSON.stringify(payload) });
}

export async function apiDelete(url: string, options: FetchRequestOptions = {}): Promise<any> {
  return await apiFetch(url, { ...options, method: 'DELETE' });
}
