"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/first */
require('module-alias/register');
const dotenv = require('dotenv');
const path = require('path');
const pluralize = require('pluralize');
const _config_1 = require("@config");
const fs_service_1 = require("@core/fs/fs.service");
const utils_1 = require("@core/utils");
const category_service_1 = require("@models/category/category.service");
const locale_service_1 = require("@models/locale/locale.service");
if (process.env && process.env.NODE_ENV) {
    dotenv.config({ path: '.env.' + process.env.NODE_ENV });
}
else {
    dotenv.config({ path: '.env.development' });
}
async function rebuildStore(pathname) {
    console.log('MockBuild.rebuildStore', pathname);
    const jsons = await (0, fs_service_1.fsReadJsonDirectory)(pathname);
    // const json = await fsReadJson(pathname);
    const store = await buildStore(jsons);
    const outname = path.join(process.cwd(), '.mock', 'store', `store.json`);
    await (0, fs_service_1.fsWriteJson)(outname, store);
    console.log('MockBuild.buildComplete', outname);
    return store;
}
async function buildStore(jsons) {
    const store = {};
    let collections = jsons.map(json => remapCollection(json.name));
    collections.forEach((c, i) => {
        store[c.singularName] = toServiceSchema(c, jsons[i].data);
    });
    const pageService = createPageService(store);
    store['page'] = pageService;
    const routeService = createRouteService(store);
    store['route'] = routeService;
    // Object.keys(store).forEach(key => console.log((store[key] as MockService<any>).collection));
    collections = Object.keys(store).map(key => store[key]);
    await (0, utils_1.awaitAll)(collections, async (c) => await addType(c.items, c, collections));
    return store;
}
function createPageService(store) {
    const keys = Object.keys(_config_1.PAGES);
    const pages = [];
    for (const key of keys) {
        const collection = store[key];
        if (collection) {
            const items = collection.items;
            pages.push(...items);
        }
        else {
            console.warn(`MockBuild.createPageService.collection not found [${key}]`);
        }
    }
    // console.log('pages', pages);
    const pageCollection = remapCollection('page');
    const pageService = {
        ...pageCollection,
        items: pages,
    };
    return pageService;
}
function getRoute(href, marketId, localeId, pageSchema, pageId) {
    return {
        id: href,
        schema: 'route',
        marketId,
        localeId,
        pageSchema,
        pageId,
    };
}
function createRouteService(store) {
    const keys = Object.keys(_config_1.PAGES);
    // console.log('createRouteService', keys);
    const routes = [];
    for (const key of keys) {
        const languages = store.locale.items.map(x => x.id);
        const markets = store.market.items.map(x => ({
            id: x.id,
            schema: 'market',
            languages: x.languages || languages,
        }));
        const collection = store[key];
        if (collection) {
            const items = collection.items;
            // console.log('createRouteService', key, items.length);
            for (const item of items) {
                const categoryTree = (0, category_service_1.resolveCategoryTree)(item, store.page.items, store.category.items);
                const availableMarkets = item.markets ? markets.filter(x => item.markets.indexOf(x.id) !== -1) : markets;
                availableMarkets.forEach(m => {
                    (m.languages || languages).forEach(l => {
                        const href = categoryTree.reduce((p, c, i) => {
                            // !!! page.slug || category.slug
                            let slug = c.slug;
                            if ((0, locale_service_1.isLocalizedString)(slug)) {
                                slug = (0, locale_service_1.localizedToString)(slug, l);
                            }
                            slug = `${p}/${slug}`;
                            return slug === '/' ? '' : slug;
                        }, '');
                        // console.log('href', href);
                        const route = getRoute(`/${m.id}/${l}${href}`, m.id, l, key, item.id);
                        routes.push(route);
                    });
                });
                if (key === 'homepage') {
                    const defaultMarket = markets[0].id;
                    const defaultLocale = markets[0].languages ? markets[0].languages[0] : languages[0];
                    const route = getRoute(`/`, defaultMarket, defaultLocale, key, item.id);
                    routes.push(route);
                }
            }
        }
        else {
            console.warn(`MockBuild.createRouteService.collection not found [${key}]`);
        }
    }
    // console.log('routes', routes);
    const routeCollection = remapCollection('route');
    const routeService = {
        ...routeCollection,
        items: routes,
    };
    return routeService;
}
function remapCollection(key) {
    return {
        singularName: key,
        pluralName: pluralize(key),
        displayName: key.charAt(0).toUpperCase() + key.substring(1, key.length).toLowerCase(),
    };
}
function toServiceSchema(c, collection) {
    if (c.singularName === c.pluralName) {
        throw `DataService.getData: invalid plural key: ${c.singularName}`;
    }
    return {
        ...c,
        items: collection.map(x => ({ ...x, schema: c.singularName })),
    };
}
async function addType(items, c, collections) {
    const types = {};
    const keys = [];
    const optionalKeys = [];
    if (Array.isArray(items)) {
        items.forEach((item, i) => {
            Object.keys(item).forEach(key => {
                const type = getType(key, item[key], collections);
                types[key] = types[key] || [];
                if (types[key].indexOf(type) === -1) {
                    types[key].push(type);
                }
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                    if (i > 0) {
                        optionalKeys.push(key);
                    }
                }
            });
        });
    }
    if (keys.length === 0) {
        return;
    }
    // console.log(types);
    const type = `
import { IEquatable, ILocalizedString } from '@core';

export type I${c.displayName} = {
  ${keys.map(key => `${key}${optionalKeys.indexOf(key) !== -1 ? '?' : ''}: ${types[key].join(' | ')};`).join('\n  ')}
};
`;
    // console.log(type);
    const pathname = path.join(process.cwd(), '.mock', 'types', `${c.singularName}.ts`);
    await (0, fs_service_1.fsWrite)(pathname, type);
    return type;
}
function getType(key, value, collections) {
    let type;
    const equatableIds = ['id', ...collections.map(x => x.singularName + 'Id')];
    if (value === null) {
        type = 'null';
    }
    else if (equatableIds.indexOf(key) !== -1) {
        type = 'IEquatable';
    }
    else if (typeof value === 'boolean') {
        type = 'boolean';
    }
    else if (typeof value === 'string') {
        type = 'string';
    }
    else if (typeof value === 'number') {
        type = 'number';
    }
    else if ((0, locale_service_1.isLocalizedString)(value)) {
        type = 'ILocalizedString';
    }
    else if (Array.isArray(value)) {
        type = 'any[]';
    }
    else {
        type = 'any';
    }
    return type;
}
async function BuildAndWatch(pathname) {
    // console.log('MockBuild.BuildAndWatch');
    await rebuildStore(pathname);
    (0, fs_service_1.fsWatch)(pathname, async (eventType, fileName) => {
        // console.log('watching', eventType, fileName);
        await rebuildStore(pathname);
    });
}
// console.log(process.argv);
if (process.argv.includes('mock') && process.env.NODE_ENV !== 'production') {
    global.Request = {};
    BuildAndWatch('./mock');
}
