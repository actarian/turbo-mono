"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_service_1 = __importDefault(require("@core/json/json.service"));
const locale_service_1 = require("@models/locale/locale.service");
class MockService extends json_service_1.default {
    decorator_(item, params = {}) {
        if (params.locale) {
            return (0, locale_service_1.localizeItem)(item, params.locale);
        }
        else {
            return item;
        }
    }
}
exports.default = MockService;
