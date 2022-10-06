import type { FindParams, IEquatable } from '@websolute/core';
import { awaitAll } from '@websolute/core';
import { decorateHref, IModelStore } from '@websolute/models';
import { getStore } from '@websolute/store';
import type { IProductDetail } from './product_detail';

export async function getProductDetails(params: FindParams = {}): Promise<IProductDetail[]> {
  const store = await getStore<IModelStore>();
  const items = await store.product_detail.findMany(params);
  // console.log('items ->', items.length);
  return await awaitAll(items, async (p) => await decorateHref(p, params.market, params.locale));
}

export async function getProductDetail(id: IEquatable, params: FindParams = {}): Promise<IProductDetail> {
  const store = await getStore<IModelStore>();
  const item = await store.product_detail.findOne({ where: { id }, market: params.market, locale: params.locale });
  // console.log('item ->', item);
  return await decorateHref(item, params.market, params.locale);
}
