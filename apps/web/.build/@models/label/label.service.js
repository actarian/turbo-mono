"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveLabel = exports.getLabels = void 0;
const store_service_1 = require("@core/store/store.service");
async function getLabels(params = {}) {
    const store = await (0, store_service_1.getStore)();
    const items = await store.label.findMany(params);
    return items;
}
exports.getLabels = getLabels;
function resolveLabel(labels, id) {
    const label = labels.find(x => x.id === id);
    return label && label.text ? label.text.toString() : id;
}
exports.resolveLabel = resolveLabel;
/*
export function localizedLabel(labels: Label[], id: string, locale: string = 'en', defaultLocale: string = 'en'): Promise<Label> {
  const label = labels.find(x => x.id === id);
  if (label) {
    return store.localizeValue(label, locale, defaultLocale);
  }
}
*/
