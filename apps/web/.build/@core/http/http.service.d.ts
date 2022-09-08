export declare function httpFetch(url: string, options?: FetchRequestOptions): Promise<any>;
export declare function httpGet(url: string, options?: FetchRequestOptions): Promise<any>;
export declare function httpPost(url: string, payload: any, options?: FetchRequestOptions): Promise<any>;
export declare function httpPut(url: string, payload: any, options?: FetchRequestOptions): Promise<any>;
export declare function httpPatch(url: string, payload: any, options?: FetchRequestOptions): Promise<any>;
export declare function httpDelete(url: string, options?: FetchRequestOptions): Promise<any>;
export declare type FetchRequestOptions = {
    method?: string;
    headers?: {
        [key: string]: string;
    };
    body?: Blob | BufferSource | FormData | URLSearchParams | string | ReadableStream;
    mode?: 'cors' | 'no-cors' | 'same-origin';
    credentials?: 'omit' | 'same-origin' | 'include';
    cache?: 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached';
    redirect?: 'follow' | 'error' | 'manual';
    referrer?: string;
    referrerPolicy?: 'no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, strict-origin-when-cross-origin, or unsafe-url';
    integrity?: string;
    keepalive?: boolean;
    signal?: AbortSignal;
};
export declare type FetchService = (url: string, options?: FetchRequestOptions) => Promise<any>;
//# sourceMappingURL=http.service.d.ts.map