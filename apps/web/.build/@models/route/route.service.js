"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveRoute = exports.categoryToRouteLink = exports.getChildCategories = exports.getRouteLinkTree = exports.getBreadcrumbFromCategoryTree = exports.decorateHref = exports.getStaticPathsForSchema = exports.getRoute = exports.getRoutes = void 0;
const _config_1 = require("@config");
const _core_1 = require("@core");
const _models_1 = require("@models");
async function getRoutes(params = {}) {
    const store = await (0, _core_1.getStore)();
    const routes = await store.route.findMany(params);
    return routes;
}
exports.getRoutes = getRoutes;
async function getRoute(id) {
    const store = await (0, _core_1.getStore)();
    const route = await store.route.findOne(id);
    // console.log('getRoute', id, '->', route);
    return route;
}
exports.getRoute = getRoute;
async function getStaticPathsForSchema(schema) {
    const store = await (0, _core_1.getStore)();
    const routes = await store.route.findMany({ where: { pageSchema: schema } });
    return routes.map(x => ({ params: { id: x.pageId.toString(), market: x.marketId, locale: x.localeId } }));
}
exports.getStaticPathsForSchema = getStaticPathsForSchema;
async function decorateHref(item, market = 'ww', locale = 'en') {
    const routes = await getRoutes({ where: { pageSchema: item.schema, pageId: item.id, marketId: market, localeId: locale } });
    const href = routes.length ? routes[0].id : null;
    return { ...item, href };
}
exports.decorateHref = decorateHref;
async function getBreadcrumbFromCategoryTree(categoryTree, market = 'ww', locale = 'en') {
    const routes = await getRoutes({ where: { marketId: market, localeId: locale } });
    const tree = categoryTree.map(x => {
        const route = x.pageSchema && x.pageId ? routes.find(r => r.pageSchema === x.pageSchema &&
            r.pageId === x.pageId) : null;
        const href = route ? route.id.toString() : undefined;
        let title = x.title;
        if ((0, _models_1.isLocalizedString)(title)) {
            title = (0, _models_1.localizedToString)(title, locale);
        }
        return {
            categoryId: x.id,
            title,
            href,
            items: [],
        };
    });
    return tree;
}
exports.getBreadcrumbFromCategoryTree = getBreadcrumbFromCategoryTree;
async function getRouteLinkTree(market = 'ww', locale = 'en') {
    const store = await (0, _core_1.getStore)();
    const routes = await store.route.findMany();
    const categories = await store.category.findMany();
    // console.log(categories);
    /*
    const routes: Route[] = await getRoutes();
    const categories = await getCategories();
    */
    const homeCategory = categories.find(x => x.pageSchema === 'homepage');
    if (homeCategory) {
        const root = categoryToRouteLink(routes, categories, homeCategory, market, locale);
        // console.log('getRouteLinkTree', root);
        return root;
    }
    return undefined;
}
exports.getRouteLinkTree = getRouteLinkTree;
function getChildCategories(routes, categories, category, market = 'ww', locale = 'en') {
    return categories.filter(x => x.categoryId === category.id).map(x => categoryToRouteLink(routes, categories, x, market, locale));
}
exports.getChildCategories = getChildCategories;
function categoryToRouteLink(routes, categories, category, market = 'ww', locale = 'en') {
    const route = category.pageSchema && category.pageId ? routes.find(r => r.pageSchema === category.pageSchema &&
        r.pageId === category.pageId &&
        r.marketId === market &&
        r.localeId === locale) : null;
    const href = route ? route.id.toString() : undefined;
    let title = category.title;
    if ((0, _models_1.isLocalizedString)(title)) {
        title = (0, _models_1.localizedToString)(title, locale);
    }
    return {
        categoryId: category.id,
        title,
        href,
        items: getChildCategories(routes, categories, category, market, locale),
    };
}
exports.categoryToRouteLink = categoryToRouteLink;
function resolveRoute(route) {
    // console.log('resolveRoute', route.pageSchema);
    const routepath = _config_1.PAGES[route.pageSchema];
    return `/${route.marketId}/${route.localeId}/${routepath}/${route.pageId}`;
    /*
    routepath = routepath.replace(/:([^\/]*)/g, (match, p1) => {
      return route[p1];
    });
    return routepath;
    */
}
exports.resolveRoute = resolveRoute;
