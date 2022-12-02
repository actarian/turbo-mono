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

export async function apiFetch(pathname: string, options: FetchRequestOptions = {}): Promise<any> {
  const url = `${STORE_API_URL}${STORE_API_BASE}${pathname}`;
  // console.log('ApiStore.apiFetch', url, options.method);
  const apiOptions = merge({ ...defaultStoreOptions }, options);
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

export class ApiService<T extends IEntity> implements IQuerable<IEntity> {
  key: string;

  constructor(key: string) {
    if (!key) {
      throw new Error('ApiService: key is required');
    }
    this.key = key;
  }

  async findOne(params: QueryParams = {}): Promise<T | undefined> {
    // const params = toFindParams(idOrParams);
    // const search = this.search_(params);
    params.pagination = params.pagination || false;
    params.richText = params.richText || false;
    const query = qsSerialize(params);
    const search = query ? `?${query}` : '';
    // const id = params.where.id as string | number;
    // const url = `/${this.key}${id ? `/${encodeURIComponent(id)}` : ''}${search}`;
    const url = `/${this.key}${search}`;
    // console.log('ApiService', this.key, 'findOne', url);
    const response = await apiGet(url);
    const items: T[] = Array.isArray(response.docs) ? response.docs : response;
    const item = items.length ? items[0] : undefined;
    // console.log('ApiService.findOne', url);
    // console.log('ApiService.findOne', url, item);
    if (item) {
      return this.decorator_(item, params);
    }
    return;
  }

  async findMany(params: QueryParams = {}): Promise<T[]> {
    // const search = this.search_(params);
    params.pagination = params.pagination || false;
    params.richText = params.richText || false;
    const query = qsSerialize(params);
    const search = query ? `?${query}` : '';
    const url = `/${this.key}${search}`;
    const response = await apiGet(url);
    const items: T[] = Array.isArray(response.docs) ? response.docs : response;
    // console.log('ApiService.findMany', url);
    // console.log('ApiService.findMany', url, items);
    // items = this.where_(items, params);
    return items.map(x => this.decorator_(x, params));
  }

  async create(payload: any): Promise<T> {
    const url = `/${this.key}`;
    // console.log('ApiService', this.key, 'create', url);
    const item = await apiPost(url, payload);
    return this.decorator_(item);
  }

  async update(payload: T): Promise<T> {
    const url = `/${this.key}`;
    // console.log('ApiService', this.key, 'update', url);
    const item = await apiPut(url, payload);
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
    // console.log('ApiService', this.key, 'delete', url);
    const item = await apiDelete(url);
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
