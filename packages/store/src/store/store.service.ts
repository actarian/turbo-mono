import { getMockStore } from '../mock/mock.store';
import { getApiStore } from '../store-api/store-api.store';
import { IStore, StoreStrategy, storeStrategy } from './store';

export async function getStore<T extends IStore>(PAGES: { [key: string]: string } = {}): Promise<T> {
  console.log(storeStrategy);
  switch (storeStrategy) {
    case StoreStrategy.Api:
      return await getApiStore<T>(PAGES);
    default:
      return await getMockStore<T>();
  }
}
