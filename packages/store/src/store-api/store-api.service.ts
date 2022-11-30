import { FetchRequestOptions, httpFetch, IEntity, IEquatable, IQuerable, merge, qsSerialize, QueryParams } from '@websolute/core';

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
  // console.log('ApiStore.storeFetch', url, options.method);
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

export class StoreApiService<T extends IEntity> implements IQuerable<IEntity> {
  key: string;

  constructor(key: string) {
    if (!key) {
      throw new Error('StoreApiService: key is required');
    }
    this.key = key;
  }

  async findOne(params: QueryParams = {}): Promise<T | undefined> {
    // const params = toFindParams(idOrParams);
    // const search = this.search_(params);
    const query = qsSerialize(params);
    const search = query ? `?${query}` : '';
    // const id = params.where.id as string | number;
    // const url = `/${this.key}${id ? `/${encodeURIComponent(id)}` : ''}${search}`;
    const url = `/${this.key}${search}`;
    // console.log('StoreApiService', this.key, 'findOne', url);
    const response = await storeGet(url);
    const items: T[] = Array.isArray(response.docs) ? response.docs : response;
    // console.log('StoreApiService.findOne', url, items);
    if (items.length) {
      return this.decorator_(items[0], params);
    }
    return;
  }

  async findMany(params: QueryParams = {}): Promise<T[]> {
    // const search = this.search_(params);
    const query = qsSerialize(params);
    const search = query ? `?${query}` : '';
    const url = `/${this.key}${search}`;
    const response = await storeGet(url);
    const items: T[] = Array.isArray(response.docs) ? response.docs : response;
    // console.log('StoreApiService.findMany', url, items);
    // items = this.where_(items, params);
    return items.map(x => this.decorator_(x, params));
  }

  async create(payload: any): Promise<T> {
    const url = `/${this.key}`;
    // console.log('StoreApiService', this.key, 'create', url);
    const item = await storePost(url, payload);
    return this.decorator_(item);
  }

  async update(payload: T): Promise<T> {
    const url = `/${this.key}`;
    // console.log('StoreApiService', this.key, 'update', url);
    const item = await storePut(url, payload);
    return this.decorator_(item);
  }

  async delete(id: IEquatable) {
    // const params = toFindParams(id);
    const params = {
      where: {
        id: {
          equals: id,
        }
      },
    };
    const query = qsSerialize(params);
    const search = query ? `?${query}` : '';
    // const search = this.search_(params);
    const url = `/${this.key}${search}`;
    // const url = `/${this.key}/${encodeURIComponent(id.toString())}`;
    // console.log('StoreApiService', this.key, 'delete', url);
    const item = await storeDelete(url);
    return this.decorator_(item);
  }

  /*
  protected where_(items: any[], params: FindParams): any[] {
    const where = params.where;
    if (where) {
      const keys = Object.keys(where);
      items = items.filter(x => {
        return keys.reduce<boolean>((p, c) => {
          return p && (x[c] === where[c]);
        }, true);
      });
    }
    return items;
  }
  */

  protected decorator_(item: any, params: QueryParams = {}): any {
    return item;
  }

  /*
  protected search_(params: QueryParams): string {
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
  */
}
