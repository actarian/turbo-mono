"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const store_service_1 = require("@core/store/store.service");
const utils_1 = require("@core/utils");
const route_service_1 = require("@models/route/route.service");
async function getProducts(params = {}) {
    const store = await (0, store_service_1.getStore)();
    const products = await store.product.findMany(params);
    // console.log('products ->', products.length);
    return await (0, utils_1.awaitAll)(products, async (p) => await (0, route_service_1.decorateHref)(p, params.market, params.locale));
}
exports.getProducts = getProducts;
async function getProduct(id, params = {}) {
    const store = await (0, store_service_1.getStore)();
    const product = await store.product.findOne({ where: { id }, market: params.market, locale: params.locale });
    // console.log('product ->', product);
    return await (0, route_service_1.decorateHref)(product, params.market, params.locale);
}
exports.getProduct = getProduct;
