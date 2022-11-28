import { awaitAll, IEquatable, QueryParams } from '@websolute/core';
import { decorateHref, IModelStore } from '@websolute/models';
import { getStore } from '@websolute/store';
import { IShopCategory } from './shop_category';

export async function getShopCategories(params: QueryParams = {}): Promise<IShopCategory[]> {
  const store = await getStore<IModelStore>();
  const items = await store.shop_category.findMany(params);
  // console.log('items ->', items.length);
  return await awaitAll(items, async (p) => await decorateHref(p, params.market, params.locale));
}

export async function getShopCategory(id: IEquatable, params: QueryParams = {}): Promise<IShopCategory | undefined> {
  const store = await getStore<IModelStore>();
  const item = await store.shop_category.findOne({
    where: {
      id: {
        equals: id,
      }
    }, market: params.market, locale: params.locale
  });
  // console.log('item ->', item);
  return await decorateHref(item, params.market, params.locale);
}
