// import type { AppStore } from '@config';
import { getMockStore } from '../mock/mock.store';
import { getApiStore } from '../store-api/store-api.store';
import { IStore, StoreStrategy, storeStrategy } from './store';

// export async function getStore(): Promise<AppStore> {
export async function getStore(PAGES: { [key: string]: string } = {}): Promise<IStore> {
  switch (storeStrategy) {
    case StoreStrategy.Api:
      return getApiStore(PAGES);
    default:
      return getMockStore();
  }
}
