import type { IEntity, IQuerable } from '@websolute/core';
import type { IStore } from '../store/store';
import { StoreApiService } from './store-api.service';

let STORE_: IStore;

export async function getApiStore<T extends IStore>(PAGES: { [key: string]: string }): Promise<T> {
  if (STORE_) {
    return STORE_ as T;
  }
  // console.log('getApiStore');
  const store: { [key: string]: IQuerable<IEntity> } = {};
  const keys = Object.keys(PAGES);
  const routes = [...keys, 'page', 'route', 'country', 'label', 'locale', 'market', 'menu'];
  routes.forEach(key => {
    store[key] = new StoreApiService<any>(key);
  });
  STORE_ = store;
  return STORE_ as T;
}
