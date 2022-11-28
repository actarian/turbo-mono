import { IEntity, IQuerable } from '@websolute/core';
import { MockService } from '../mock/mock.service';
import { IStore } from '../store/store';
import { StoreApiService } from './store-api.service';

export async function getApiStore<T extends IStore>(collections: string[]): Promise<T> {
  // console.count('ApiStore.getApiStore');
  // console.log(process.env);
  // console.log('NODE_ENV', process.env.NODE_ENV, 'NEXT_RUNTIME', process.env.NEXT_RUNTIME, 'NEXT_PHASE', process.env.NEXT_PHASE);
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    // console.log('MockStore.getMockStore', 'phase-production-build');
    // !!! todo
    // return await getApiBuildStore(collections);
    return await getApiRuntimeStore(collections);
  } else {
    return await getApiRuntimeStore(collections);
  }
}

let RUNTIME_STORE_: IStore;
export async function getApiRuntimeStore<T extends IStore>(collections: string[]): Promise<T> {
  if (RUNTIME_STORE_) {
    return RUNTIME_STORE_ as T;
  }
  console.count('ApiStore.getApiRuntimeStore');
  const store: { [key: string]: IQuerable<IEntity> } = {};
  collections.sort();
  collections.forEach(key => {
    store[key] = new StoreApiService<any>(key);
  });
  // console.log('StoreApi.getApiRuntimeStore', store);
  RUNTIME_STORE_ = store;
  return RUNTIME_STORE_ as T;
}

let BUILD_STORE_: IStore;
export async function getApiBuildStore<T extends IStore>(collections: string[]): Promise<T> {
  if (BUILD_STORE_) {
    return BUILD_STORE_ as T;
  }
  console.count('ApiStore.getApiBuildStore');
  // !!! todo await global store
  const json: { [key: string]: { items: any[] } } = {};
  const store: { [key: string]: IQuerable<IEntity> } = {};
  if (json != null) {
    collections.sort();
    collections.forEach(key => {
      if (json[key]) {
        store[key] = new MockService<any>(json[key].items);
      }
    });
  }
  // console.log('StoreApi.getApiBuildStore', store);
  BUILD_STORE_ = store;
  return BUILD_STORE_ as T;
}
