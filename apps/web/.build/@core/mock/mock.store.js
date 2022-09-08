"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockStore = void 0;
const fs_service_1 = require("@core/fs/fs.service");
const mock_service_1 = __importDefault(require("./mock.service"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
let STORE_;
async function getMockStore() {
    if (STORE_) {
        return STORE_;
    }
    // console.log('getMockStore');
    const pathname = path.join(process.cwd(), '.mock', 'store', 'store.json');
    const json = await (0, fs_service_1.fsReadJson)(pathname);
    const store = {};
    if (json != null) {
        Object.keys(json).forEach(key => {
            store[key] = new mock_service_1.default(json[key].items);
        });
    }
    STORE_ = store;
    return STORE_;
}
exports.getMockStore = getMockStore;
