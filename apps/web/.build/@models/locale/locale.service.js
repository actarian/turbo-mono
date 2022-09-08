"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localizeItem = exports.localizeValue = exports.localizedToString = exports.isLocalizedString = exports.getLocales = void 0;
const store_service_1 = require("@core/store/store.service");
async function getLocales(params = {}) {
    const store = await (0, store_service_1.getStore)();
    const items = await store.locale.findMany(params);
    return items;
}
exports.getLocales = getLocales;
function isLocalizedString(value) {
    let isLocalizedString = false;
    if (value) {
        if (!Array.isArray(value) && typeof value === 'object') {
            const matchKeys = Object.keys(value).reduce((p, c) => p && /^(\w{2})(-\w{2})?$/.test(c), true);
            const matchValues = Object.values(value).reduce((p, c) => p && typeof c === 'string', true);
            // console.log(matchKeys, matchValues);
            isLocalizedString = Boolean(matchKeys && matchValues);
        }
    }
    return isLocalizedString;
}
exports.isLocalizedString = isLocalizedString;
function localizedToString(json, locale = 'en', defaultLocale = 'en') {
    const localizedString = json[locale] || json[defaultLocale] || Object.values(json)[0];
    return localizedString;
}
exports.localizedToString = localizedToString;
function localizeValue(value, locale = 'en', defaultLocale = 'en') {
    if (value) {
        if (isLocalizedString(value)) {
            return localizedToString(value, locale, defaultLocale);
        }
        else {
            return localizeItem(value, locale, defaultLocale);
        }
    }
}
exports.localizeValue = localizeValue;
function localizeItem(item, locale = 'en', defaultLocale = 'en') {
    if (!Array.isArray(item) && typeof item === 'object') {
        item = { ...item };
        Object.keys(item).forEach(key => {
            item[key] = localizeValue(item[key], locale, defaultLocale);
        });
    }
    return item;
}
exports.localizeItem = localizeItem;
