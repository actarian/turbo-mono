"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkets = void 0;
const store_service_1 = require("@core/store/store.service");
async function getMarkets(params = {}) {
    const store = await (0, store_service_1.getStore)();
    const items = await store.market.findMany(params);
    return items;
}
exports.getMarkets = getMarkets;
