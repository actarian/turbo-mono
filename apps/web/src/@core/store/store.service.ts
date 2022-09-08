import type { AppStore } from '@config';
import { getMockStore } from '@core/mock/mock.store';
import { getApiStore } from '@core/store-api/store-api.store';
import { StoreStrategy, storeStrategy } from './store';

export async function getStore(): Promise<AppStore> {
  switch (storeStrategy) {
    case StoreStrategy.Api:
      return getApiStore();
    default:
      return getMockStore();
  }
}
