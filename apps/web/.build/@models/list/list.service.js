"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListByKeys = exports.getLists = void 0;
const store_service_1 = require("@core/store/store.service");
require("./list");
async function getLists(locale) {
    const store = await (0, store_service_1.getStore)();
    const items = await store.list.findMany({ locale });
    return items;
}
exports.getLists = getLists;
async function getListByKeys(keys, locale) {
    const store = await (0, store_service_1.getStore)();
    const items = await store.list.findMany({ locale });
    const lists = {};
    items.filter((x) => x.key && keys.includes(x.key)).forEach(x => {
        lists[x.key] = items.filter(i => i.listId === x.id);
    });
    return lists;
}
exports.getListByKeys = getListByKeys;
