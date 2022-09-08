import { merge } from '@core/utils';

const defaultOptions: FetchRequestOptions = {
  // method: 'POST', // *GET, POST, PUT, DELETE, etc.
  // mode: 'cors', // no-cors, *cors, same-origin
  // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  // credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  // redirect: 'follow', // manual, *follow, error
  // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  // body: JSON.stringify(data) // body data type must match 'Content-Type' header
};

export async function httpFetch(url: string, options: FetchRequestOptions = {}): Promise<any> {
  // console.log('httpFetch', url, options);
  const httpOptions = merge({ ...defaultOptions }, options);
  const httpResponse = await fetch(url, httpOptions);
  if (!httpResponse.ok) {
    throw httpResponse;
  }
  const response = await httpResponse.json();
  return response;
  /*
  // const source = axios.CancelToken.source();
  return await axios[method](url, {
    // cancelToken: source.token,
    headers: {
      Authorization: `Bearer ${BEARER}`
    }
  });
  // return () => source.cancel();
  */
}

export async function httpGet(url: string, options: FetchRequestOptions = {}): Promise<any> {
  return await httpFetch(url, { ...options, method: 'GET' });
}

export async function httpPost(url: string, payload: any, options: FetchRequestOptions = {}): Promise<any> {
  return await httpFetch(url, { ...options, method: 'POST', body: JSON.stringify(payload) });
}

export async function httpPut(url: string, payload: any, options: FetchRequestOptions = {}): Promise<any> {
  return await httpFetch(url, { ...options, method: 'PUT', body: JSON.stringify(payload) });
}

export async function httpPatch(url: string, payload: any, options: FetchRequestOptions = {}): Promise<any> {
  return await httpFetch(url, { ...options, method: 'PATCH', body: JSON.stringify(payload) });
}

export async function httpDelete(url: string, options: FetchRequestOptions = {}): Promise<any> {
  return await httpFetch(url, { ...options, method: 'DELETE' });
}

export type FetchRequestOptions = {
  method?: string;
  // The request method, e.g., GET, POST. Note that the Origin header is not set on Fetch requests with a method of HEAD or GET. (This behavior was corrected in Firefox 65 — see bug 1508661).
  headers?: { [key: string]: string }
  // Any headers you want to add to your request, contained within a Headers object or an object literal with String values. Note that some names are forbidden.
  body?: Blob | BufferSource | FormData | URLSearchParams | string | ReadableStream;
  // Any body that you want to add to your request: this can be a Blob, BufferSource, FormData, URLSearchParams, string, or ReadableStream object. Note that a request using the GET or HEAD method cannot have a body.
  mode?: 'cors' | 'no-cors' | 'same-origin';
  // The mode you want to use for the request, e.g., cors, no-cors, or same-origin.
  credentials?: 'omit' | 'same-origin' | 'include';
  // Controls what browsers do with credentials (cookies, HTTP authentication entries, and TLS client certificates). Must be one of the following strings:
  // omit
  // Tells browsers to exclude credentials from the request, and ignore any credentials sent back in the response (e.g., any Set-Cookie header).
  // same-origin
  // Tells browsers to include credentials with requests to same-origin URLs, and use any credentials sent back in responses from same-origin URLs.
  // include
  // Tells browsers to include credentials in both same- and cross-origin requests, and always use any credentials sent back in responses.
  // Note: Credentials may be included in simple and 'final' cross-origin requests, but should not be included in CORS preflight requests.
  cache?: 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached';
  // A string indicating how the request will interact with the browser's HTTP cache. The possible values, default, no-store, reload, no-cache, force-cache, and only-if-cached, are documented in the article for the cache property of the Request object.
  redirect?: 'follow' | 'error' | 'manual';
  // How to handle a redirect response:
  // follow: Automatically follow redirects. Unless otherwise stated the redirect mode is set to follow
  // error: Abort with an error if a redirect occurs.
  // manual: Caller intends to process the response in another context. See WHATWG fetch standard for more information.
  referrer?: string;
  // A string specifying the referrer of the request. This can be a same-origin URL, about:client, or an empty string.
  referrerPolicy?: 'no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, strict-origin-when-cross-origin, or unsafe-url';
  // Specifies the referrer policy to use for the request. May be one of no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, strict-origin-when-cross-origin, or unsafe-url.
  integrity?: string;
  // Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).
  keepalive?: boolean;
  // The keepalive option can be used to allow the request to outlive the page. Fetch with the keepalive flag is a replacement for the Navigator.sendBeacon() API.
  signal?: AbortSignal;
  // An AbortSignal object instance; allows you to communicate with a fetch request and abort it if desired via an AbortController.
}

export type FetchService = (url: string, options?: FetchRequestOptions) => Promise<any>;
