"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTiles = void 0;
const store_service_1 = require("@core/store/store.service");
async function getTiles(params = {}) {
    const store = await (0, store_service_1.getStore)();
    const items = await store.tile.findMany(params);
    // console.log('getTiles', items.length);
    return items;
    // return await awaitAll(items, async (p) => await decorateHref(p, params.market, params.locale));
}
exports.getTiles = getTiles;
/*
export async function getTile(id: IEquatable, params: FindParams = {}): Promise<ITile> {
  const store = await getStore();
  const product = await store.product.findOne({ where: { id }, market: params.market, locale: params.locale });
  // console.log('product ->', product);
  return await decorateHref(product, params.market, params.locale);
}
*/
