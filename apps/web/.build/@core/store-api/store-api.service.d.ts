import type { FetchRequestOptions, FindParams, FindWhereParams, IEntity, IEquatable, IQuerable } from '@core';
export declare function storeFetch(pathname: string, options?: FetchRequestOptions): Promise<any>;
export declare function storeGet(url: string, options?: FetchRequestOptions): Promise<any>;
export declare function storePost(url: string, payload: any, options?: FetchRequestOptions): Promise<any>;
export declare function storePut(url: string, payload: any, options?: FetchRequestOptions): Promise<any>;
export declare function storePatch(url: string, payload: any, options?: FetchRequestOptions): Promise<any>;
export declare function storeDelete(url: string, options?: FetchRequestOptions): Promise<any>;
export default class StoreApiService<T extends IEntity> implements IQuerable<IEntity> {
    key: string;
    constructor(key: string);
    findOne(idOrParams: IEquatable | FindWhereParams): Promise<T | null>;
    findMany(params?: FindParams): Promise<T[]>;
    create(payload: any): Promise<T>;
    update(payload: T): Promise<T>;
    delete(id: IEquatable): Promise<any>;
    protected where_(items: any[], params: FindParams): any[];
    protected decorator_(item: any, params?: FindParams): any;
    protected search_(params: FindParams): string;
}
//# sourceMappingURL=store-api.service.d.ts.map