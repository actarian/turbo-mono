import { IEntity, IQuerable } from '@websolute/core';
import { MockService } from '../mock/mock.service';
import { IStore } from '../store/store';
import { StoreApiService, storeGet } from './store-api.service';

export async function getApiStore<T extends IStore>(collections: string[]): Promise<T> {
  // console.count('ApiStore.getApiStore');
  // console.log('ApiStore.getApiStore', collections);
  // console.log(process.env);
  // console.log('NODE_ENV', process.env.NODE_ENV, 'NEXT_RUNTIME', process.env.NEXT_RUNTIME, 'NEXT_PHASE', process.env.NEXT_PHASE);
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return await getApiBuildStore(collections);
  } else {
    return await getApiRuntimeStore(collections);
  }
}

let RUNTIME_STORE_: IStore;
export async function getApiRuntimeStore<T extends IStore>(collections: string[]): Promise<T> {
  if (RUNTIME_STORE_) {
    return RUNTIME_STORE_ as T;
  }
  const store: { [key: string]: IQuerable<IEntity> } = {};
  collections.sort();
  collections.forEach(key => {
    store[key] = new StoreApiService<any>(key);
  });
  // console.count('ApiStore.getApiRuntimeStore');
  // console.log('StoreApi.getApiRuntimeStore', Object.keys(store));
  RUNTIME_STORE_ = store;
  return store as T;
}

let BUILD_STORE_: IStore;
export async function getApiBuildStore<T extends IStore>(collections: string[]): Promise<T> {
  if (BUILD_STORE_) {
    return BUILD_STORE_ as T;
  }
  const store: { [key: string]: IQuerable<IEntity> } = {};
  const url = '/store';
  const json = await storeGet(url);
  // const json: { [key: string]: { items: any[] } } = {};
  if (json != null) {
    collections.sort();
    collections.forEach(key => {
      if (json[key]) {
        store[key] = new MockService(json[key]);
      }
    });
  }
  // console.count('ApiStore.getApiBuildStore');
  // console.log('StoreApi.getApiBuildStore', Object.keys(store));
  BUILD_STORE_ = store;
  return store as T;
}
