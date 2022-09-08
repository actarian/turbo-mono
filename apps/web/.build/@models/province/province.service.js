"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinces = void 0;
const store_service_1 = require("@core/store/store.service");
async function getProvinces(locale) {
    const store = await (0, store_service_1.getStore)();
    const items = await store.province.findMany({ locale });
    return items;
}
exports.getProvinces = getProvinces;
