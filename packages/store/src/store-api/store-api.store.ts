import { IEntity, IQuerable } from '@websolute/core';
import { IStore } from '../store/store';
import { StoreApiService } from './store-api.service';

let STORE_: IStore;

export async function getApiStore<T extends IStore>(pages: { [key: string]: string }): Promise<T> {
  if (STORE_) {
    return STORE_ as T;
  }
  // console.log('getApiStore');
  const store: { [key: string]: IQuerable<IEntity> } = {};
  const keys = Object.keys(pages);
  const routes = [...keys,
    'category',
    'country',
    'feature_type',
    'label',
    'list',
    'locale',
    'market',
    'page',
    'province',
    'region',
    'route',
    'template',
  ];
  routes.sort();
  routes.forEach(key => {
    store[key] = new StoreApiService<any>(key);
  });
  console.log(store);
  STORE_ = store;
  return STORE_ as T;
}
