import { awaitAll, FindParams, IEquatable } from '@websolute/core';
import { decorateHref, IModelStore } from '@websolute/models';
import { getStore } from '@websolute/store';
import { IMagazineDetail } from './magazine_detail';

export async function getMagazineDetails(params: FindParams = {}): Promise<IMagazineDetail[]> {
  const store = await getStore<IModelStore>();
  const items = await store.magazine_detail.findMany(params);
  // console.log('items ->', items.length);
  return await awaitAll(items, async (p) => await decorateHref(p, params.market, params.locale));
}

export async function getMagazineDetail(id: IEquatable, params: FindParams = {}): Promise<IMagazineDetail | undefined> {
  const store = await getStore<IModelStore>();
  const item = await store.magazine_detail.findOne({ where: { id }, market: params.market, locale: params.locale });
  // console.log('item ->', item);
  return await decorateHref(item, params.market, params.locale);
}
