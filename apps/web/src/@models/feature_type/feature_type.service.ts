import type { FindParams } from '@core';
import { getStore } from '@core/store/store.service';
// import { awaitAll } from '@core/utils';
// import { decorateHref } from '@models/route/route.service';
import type { IFeatureType } from './feature_type';

export async function getFeatureTypes(params: FindParams = {}): Promise<IFeatureType[]> {
  const store = await getStore();
  const items = await store.feature_type.findMany(params);
  // console.log('getTiles', items.length);
  return items;
  // return await awaitAll(items, async (p) => await decorateHref(p, params.market, params.locale));
}

/*
export async function getFeatureType(id: IEquatable, params: FindParams = {}): Promise<ITile> {
  const store = await getStore();
  const item = await store.feature_type.findOne({ where: { id }, market: params.market, locale: params.locale });
  // console.log('getFeatureType', item);
  return await decorateHref(item, params.market, params.locale);
}
*/
