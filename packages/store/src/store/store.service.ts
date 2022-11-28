import { getMockStore } from '../mock/mock.store';
import { getApiStore } from '../store-api/store-api.store';
import { IStore, StoreStrategy, storeStrategy } from './store';

const CONFIG_: {
  COLLECTIONS: string[],
} = {
  COLLECTIONS: []
};

export function registerCollections(pages: string[] = []): void {
  CONFIG_.COLLECTIONS = pages;
}

export async function getStore<T extends IStore>(): Promise<T> {
  // console.count('Store.getStore'); // !!! > 11000
  switch (storeStrategy) {
    case StoreStrategy.Api:
      return await getApiStore<T>(CONFIG_.COLLECTIONS);
    default:
      return await getMockStore<T>();
  }
}
