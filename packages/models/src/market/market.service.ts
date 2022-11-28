import { QueryParams } from '@websolute/core';
import { getStore } from '@websolute/store';
import { IModelStore } from '../store/store';
import { IMarket } from './market';

export async function getMarkets(params: QueryParams = {}): Promise<IMarket[]> {
  const store = await getStore<IModelStore>();
  const items = await store.market.findMany(params);
  return items;
}
