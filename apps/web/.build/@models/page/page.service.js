"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorPageLayout = exports.getPage = void 0;
const store_service_1 = require("@core/store/store.service");
const category_service_1 = require("@models/category/category.service");
const label_service_1 = require("@models/label/label.service");
const layout_service_1 = require("@models/layout/layout.service");
const route_service_1 = require("@models/route/route.service");
async function getPage(schema, id, market, locale) {
    const store = await (0, store_service_1.getStore)();
    const page = await store.page.findOne({ where: { schema, id }, market, locale });
    // console.log(page, market, locale);
    if (page) {
        const routes = await store.route.findMany({ where: { pageSchema: schema, pageId: id } });
        const currentRoute = routes.find(x => x.marketId === market && x.localeId === locale);
        if (!currentRoute) {
            throw ('No route found for page ' + schema + ':' + id + ' in market ' + market + ' and locale ' + locale);
        }
        const alternates = routes.filter(x => x.marketId !== market || x.localeId !== locale);
        const categoryTree = await (0, category_service_1.getCategoryTree)(page);
        const breadcrumb = await (0, route_service_1.getBreadcrumbFromCategoryTree)(categoryTree, market, locale);
        return {
            ...page,
            href: currentRoute.id,
            alternates,
            breadcrumb: breadcrumb,
        };
    }
    else {
        console.log('PageService.getPage.notfound', schema, id, locale);
        return null;
    }
}
exports.getPage = getPage;
async function getErrorPageLayout() {
    const defaultMarket = 'ww';
    const defaultLocale = 'en';
    const layout = await (0, layout_service_1.getLayout)(defaultMarket, defaultLocale);
    const title = (0, label_service_1.resolveLabel)(layout.labels, 'notfound.title');
    const abstract = (0, label_service_1.resolveLabel)(layout.labels, 'notfound.abstract');
    const page = {
        id: 'notfound',
        schema: 'notfound',
        href: '',
        alternates: [],
        breadcrumb: [],
        images: [],
        title,
        abstract,
        meta: {
            title,
            description: abstract,
            keywords: '',
            robots: 'all',
        },
    };
    return { layout, page };
}
exports.getErrorPageLayout = getErrorPageLayout;
/*
export async function getPageLayout(schema: string, id: IEquatable, market?: string, locale?: string): Promise<IPageLayout | null> {
  const page = await getPage(schema, id, market, locale);
  if (page) {
    const layout = await getLayout(market, locale);
    return {
      ...page,
      ...layout,
    };
  } else {
    return null;
  }
}
*/
