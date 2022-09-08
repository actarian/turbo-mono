"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLayout = void 0;
require("@models/label/label");
const label_service_1 = require("@models/label/label.service");
require("@models/locale/locale");
const locale_service_1 = require("@models/locale/locale.service");
require("@models/market/market");
const market_service_1 = require("@models/market/market.service");
const route_service_1 = require("@models/route/route.service");
require("./layout");
async function getLayout(market, locale) {
    // const store = await getStore();
    const markets = await (0, market_service_1.getMarkets)({ locale });
    const locales = await (0, locale_service_1.getLocales)({ locale });
    const labels = await (0, label_service_1.getLabels)({ locale });
    const tree = await (0, route_service_1.getRouteLinkTree)(market, locale);
    // console.log('getLayout', market, locale);
    return {
        markets,
        market,
        locales,
        locale,
        labels,
        tree,
    };
}
exports.getLayout = getLayout;
