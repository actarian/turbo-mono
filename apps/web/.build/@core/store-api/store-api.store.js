"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiStore = void 0;
const _config_1 = require("@config");
const store_api_service_1 = __importDefault(require("./store-api.service"));
let STORE_;
async function getApiStore() {
    if (STORE_) {
        return STORE_;
    }
    // console.log('getApiStore');
    const store = {};
    const keys = Object.keys(_config_1.PAGES);
    const routes = [...keys, 'page', 'route', 'country', 'label', 'locale', 'market', 'menu'];
    routes.forEach(key => {
        store[key] = new store_api_service_1.default(key);
    });
    STORE_ = store;
    return STORE_;
}
exports.getApiStore = getApiStore;
