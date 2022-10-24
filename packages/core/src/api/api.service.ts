import { FetchRequestOptions, httpFetch } from '../http/http.service';
import { merge } from '../utils';

const LOCAL_URL = process.env.NEXT_PUBLIC_URL === 'https://' ?
  process.env.NEXT_PUBLIC_MOCK_FALLBACK_URL :
  process.env.NEXT_PUBLIC_URL;

const LOCAL_API_BASE = process.env.NEXT_PUBLIC_API || '/api';
// const BEARER = process.env.STORE_BEARER || '7584f15d12972fb1e7695e998dd5e4c754f46c74d06a08e8d76f556adcd045e48cd52bed6faac098784471ac273ee40243194b9cff7eba3c4a768f8f41d2d51959a7f767b943c7f0170f6e5f632db523803c357083bf7a7bf03ee8e0df2d8ce5cd52e0211283b34d7781313da775018a9e950433d2b6faf711c20e5a63b25243';

const defaultApiOptions: FetchRequestOptions = {
  // mode: 'cors',
  headers: {
    // Authorization: `Bearer ${BEARER}`,
  },
};

// typeof eval === 'function' ? defaultApiOptions.mode = 'cors' : null;

export async function apiFetch(pathname: string, options: FetchRequestOptions = {}, serviceOptions?: { locale: string, market: string }): Promise<any> {
  const url = new URL(`${LOCAL_URL}${LOCAL_API_BASE}${pathname}`);
  if (serviceOptions) {
    url.searchParams.append('locale', serviceOptions.locale);
    url.searchParams.append('market', serviceOptions.market);
  }
  const apiOptions = merge({ ...defaultApiOptions }, options);
  // console.log('apiFetch', url.href, apiOptions);
  const apiResponse = await httpFetch(url.href, apiOptions);
  return apiResponse;
}

export async function apiGet(url: string, options: FetchRequestOptions = {}, serviceOptions?: { locale: string, market: string }): Promise<any> {
  return await apiFetch(url, { ...options, method: 'GET' }, serviceOptions);
}

export async function apiPost(url: string, payload: any, options: FetchRequestOptions = {}, serviceOptions?: { locale: string, market: string }): Promise<any> {
  return await apiFetch(url, { ...options, method: 'POST', body: JSON.stringify(payload) }, serviceOptions);
}

export async function apiPut(url: string, payload: any, options: FetchRequestOptions = {}, serviceOptions?: { locale: string, market: string }): Promise<any> {
  return await apiFetch(url, { ...options, method: 'PUT', body: JSON.stringify(payload) }, serviceOptions);
}

export async function apiPatch(url: string, payload: any, options: FetchRequestOptions = {}, serviceOptions?: { locale: string, market: string }): Promise<any> {
  return await apiFetch(url, { ...options, method: 'PATCH', body: JSON.stringify(payload) }, serviceOptions);
}

export async function apiDelete(url: string, options: FetchRequestOptions = {}, serviceOptions?: { locale: string, market: string }): Promise<any> {
  return await apiFetch(url, { ...options, method: 'DELETE' }, serviceOptions);
}
