"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeatureTypes = void 0;
const store_service_1 = require("@core/store/store.service");
async function getFeatureTypes(params = {}) {
    const store = await (0, store_service_1.getStore)();
    const items = await store.feature_type.findMany(params);
    // console.log('getTiles', items.length);
    return items;
    // return await awaitAll(items, async (p) => await decorateHref(p, params.market, params.locale));
}
exports.getFeatureTypes = getFeatureTypes;
/*
export async function getFeatureType(id: IEquatable, params: FindParams = {}): Promise<ITile> {
  const store = await getStore();
  const item = await store.feature_type.findOne({ where: { id }, market: params.market, locale: params.locale });
  // console.log('getFeatureType', item);
  return await decorateHref(item, params.market, params.locale);
}
*/
