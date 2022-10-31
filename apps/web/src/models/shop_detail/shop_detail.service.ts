import { awaitAll, FindParams, IEquatable } from '@websolute/core';
import { decorateHref, IModelStore } from '@websolute/models';
import { getStore } from '@websolute/store';
import { IShopDetail } from './shop_detail';

export async function getShopDetails(params: FindParams = {}): Promise<IShopDetail[]> {
  const store = await getStore<IModelStore>();
  const items = await store.shop_detail.findMany(params);
  // console.log('items ->', items.length);
  return await awaitAll(items, async (p) => await decorateHref(p, params.market, params.locale));
}

export async function getShopDetail(id: IEquatable, params: FindParams = {}): Promise<IShopDetail | undefined> {
  const store = await getStore<IModelStore>();
  const item = await store.shop_detail.findOne({ where: { id }, market: params.market, locale: params.locale });
  // console.log('item ->', item);
  return await decorateHref(item, params.market, params.locale);
}
