import type { FetchRequestOptions, FindParams, FindWhereParams, IEntity, IEquatable, IQuerable } from '@core';
import { toFindParams } from '@core/entity/entity';
import { httpFetch } from '@core/http/http.service';
import { merge } from '@core/utils';

// !!! these keys are server-side only

const STORE_API_URL = process.env.STORE_URL;
const STORE_API_BASE = process.env.STORE_API;
const STORE_BEARER = process.env.STORE_BEARER;

const defaultStoreOptions: FetchRequestOptions = {
  // mode: 'cors',
  headers: {
    Authorization: `Bearer ${STORE_BEARER}`,
  },
};

export async function storeFetch(pathname: string, options: FetchRequestOptions = {}): Promise<any> {
  const url = `${STORE_API_URL}${STORE_API_BASE}${pathname}`;
  const apiOptions = merge({ ...defaultStoreOptions }, options);
  const apiResponse = await httpFetch(url, apiOptions);
  return apiResponse;
}

export async function storeGet(url: string, options: FetchRequestOptions = {}): Promise<any> {
  return await storeFetch(url, { ...options, method: 'GET' });
}

export async function storePost(url: string, payload: any, options: FetchRequestOptions = {}): Promise<any> {
  return await storeFetch(url, { ...options, method: 'POST', body: JSON.stringify(payload) });
}

export async function storePut(url: string, payload: any, options: FetchRequestOptions = {}): Promise<any> {
  return await storeFetch(url, { ...options, method: 'PUT', body: JSON.stringify(payload) });
}

export async function storePatch(url: string, payload: any, options: FetchRequestOptions = {}): Promise<any> {
  return await storeFetch(url, { ...options, method: 'PATCH', body: JSON.stringify(payload) });
}

export async function storeDelete(url: string, options: FetchRequestOptions = {}): Promise<any> {
  return await storeFetch(url, { ...options, method: 'DELETE' });
}

export default class StoreApiService<T extends IEntity> implements IQuerable<IEntity> {
  key: string;

  constructor(key: string) {
    if (!key) {
      throw new Error('ApiService: key is required');
    }
    this.key = key;
  }

  async findOne(idOrParams: IEquatable | FindWhereParams): Promise<T | null> {
    const params = toFindParams(idOrParams);
    const search = this.search_(params);
    // console.log(params, search);
    const url = `/${this.key}/${encodeURIComponent(params.where.id)}${search}`;
    // console.log('ApiService', this.key, 'findOne', url);
    const item = await storeGet(url);
    return this.decorator_(item, params);
  }

  async findMany(params: FindParams = {}): Promise<T[]> {
    const search = this.search_(params);
    // const url = `/${this.key}${search}`;
    // console.log('ApiService', this.key, 'findMany', url);
    let items: T[] = await storeGet(`/${this.key}${search}`);
    items = this.where_(items, params);
    return items.map(x => this.decorator_(x, params));
  }

  async create(payload: any): Promise<T> {
    const item = await storePost(`/${this.key}`, payload);
    return this.decorator_(item);
  }

  async update(payload: T): Promise<T> {
    const item = await storePut(`/${this.key}`, payload);
    return this.decorator_(item);
  }

  async delete(id: IEquatable) {
    const item = await storeDelete(`/${this.key}/${encodeURIComponent(id.toString())}`);
    return this.decorator_(item);
  }

  protected where_(items: any[], params: FindParams): any[] {
    const where = params.where;
    if (where) {
      const keys = Object.keys(where);
      items = items.filter(x => {
        return keys.reduce<boolean>((p, c) => {
          return p && (x[c] === where[c]);
        }, true);
      })
    }
    return items;
  }

  protected decorator_(item: any, params: FindParams = {}): any {
    return item;
  }

  protected search_(params: FindParams): string {
    const search: { [key: string]: string; } = {};
    Object.entries(params).forEach(([key, value]) => {
      if (typeof value !== 'object') {
        search[key] = value.toString();
      } else {
        switch (key) {
          case 'where':
            search[key] = JSON.stringify(value);
        }
      }
    });
    return Object.keys(search).length ? '?' + new URLSearchParams(search).toString() : '';
  }

}
