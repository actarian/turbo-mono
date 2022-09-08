import type { FindParams } from '@core';
import { getStore } from '@core/store/store.service';
// import { awaitAll } from '@core/utils';
// import { decorateHref } from '@models/route/route.service';
import type { ITile } from './tile';

export async function getTiles(params: FindParams = {}): Promise<ITile[]> {
  const store = await getStore();
  const items = await store.tile.findMany(params);
  // console.log('getTiles', items.length);
  return items;
  // return await awaitAll(items, async (p) => await decorateHref(p, params.market, params.locale));
}

/*
export async function getTile(id: IEquatable, params: FindParams = {}): Promise<ITile> {
  const store = await getStore();
  const product = await store.product.findOne({ where: { id }, market: params.market, locale: params.locale });
  // console.log('product ->', product);
  return await decorateHref(product, params.market, params.locale);
}
*/
