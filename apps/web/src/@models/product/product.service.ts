import type { FindParams, IEquatable } from '@core';
import { getStore } from '@core/store/store.service';
import { awaitAll } from '@core/utils';
import { decorateHref } from '@models/route/route.service';
import type { IProduct } from './product';

export async function getProducts(params: FindParams = {}): Promise<IProduct[]> {
  const store = await getStore();
  const products = await store.product.findMany(params);
  // console.log('products ->', products.length);
  return await awaitAll(products, async (p) => await decorateHref(p, params.market, params.locale));
}

export async function getProduct(id: IEquatable, params: FindParams = {}): Promise<IProduct> {
  const store = await getStore();
  const product = await store.product.findOne({ where: { id }, market: params.market, locale: params.locale });
  // console.log('product ->', product);
  return await decorateHref(product, params.market, params.locale);
}
