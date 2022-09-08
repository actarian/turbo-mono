"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterProductItem = void 0;
function filterProductItem(key, item, value) {
    switch (key) {
        case 'title':
            return item.title.toLowerCase().includes(value.toString().toLowerCase());
        default:
            return item.featureIds.includes(value);
    }
}
exports.filterProductItem = filterProductItem;
