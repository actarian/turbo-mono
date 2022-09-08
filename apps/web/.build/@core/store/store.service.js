"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStore = void 0;
const mock_store_1 = require("@core/mock/mock.store");
const store_api_store_1 = require("@core/store-api/store-api.store");
const store_1 = require("./store");
async function getStore() {
    switch (store_1.storeStrategy) {
        case store_1.StoreStrategy.Api:
            return (0, store_api_store_1.getApiStore)();
        default:
            return (0, mock_store_1.getMockStore)();
    }
}
exports.getStore = getStore;
