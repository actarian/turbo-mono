import { getMockStore } from '../mock/mock.store';
import { getApiStore } from '../store-api/store-api.store';
import { IStore, StoreStrategy, storeStrategy } from './store';

const CONFIG_: {
  PAGES: { [key: string]: string },
} = {
  PAGES: {}
};

export function registerStorePages(pages: { [key: string]: string } = {}): void {
  CONFIG_.PAGES = pages;
}

export async function getStore<T extends IStore>(pages: { [key: string]: string } = {}): Promise<T> {
  switch (storeStrategy) {
    case StoreStrategy.Api:
      return await getApiStore<T>(CONFIG_.PAGES);
    default:
      return await getMockStore<T>();
  }
}
