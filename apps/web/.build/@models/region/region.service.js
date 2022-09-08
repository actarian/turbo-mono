"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegions = void 0;
const store_service_1 = require("@core/store/store.service");
async function getRegions(locale) {
    const store = await (0, store_service_1.getStore)();
    const items = await store.region.findMany({ locale });
    return items;
}
exports.getRegions = getRegions;
