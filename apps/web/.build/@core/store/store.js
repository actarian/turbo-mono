"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeStrategy = exports.StoreStrategy = void 0;
var StoreStrategy;
(function (StoreStrategy) {
    StoreStrategy["Api"] = "api";
    StoreStrategy["Data"] = "data";
    StoreStrategy["Mock"] = "mock";
})(StoreStrategy = exports.StoreStrategy || (exports.StoreStrategy = {}));
function getStoreStrategy() {
    let storeStrategy = StoreStrategy.Mock;
    if (process && process.env.STORE_STRATEGY) {
        storeStrategy = process.env.STORE_STRATEGY;
    }
    return storeStrategy;
}
exports.storeStrategy = getStoreStrategy();
