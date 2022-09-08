"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountries = void 0;
const store_service_1 = require("@core/store/store.service");
async function getCountries(locale) {
    const store = await (0, store_service_1.getStore)();
    const items = await store.country.findMany({ locale });
    return items;
}
exports.getCountries = getCountries;
