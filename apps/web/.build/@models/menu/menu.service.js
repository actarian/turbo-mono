"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenus = exports.getMenu = void 0;
const store_service_1 = require("@core/store/store.service");
async function getMenu(id) {
    const store = await (0, store_service_1.getStore)();
    const item = await store.menu.findOne(id);
    return item;
}
exports.getMenu = getMenu;
async function getMenus() {
    const store = await (0, store_service_1.getStore)();
    const items = await store.menu.findMany();
    return items;
}
exports.getMenus = getMenus;
