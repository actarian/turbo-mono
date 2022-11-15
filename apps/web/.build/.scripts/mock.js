"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../src/config");
const dotenv = require('dotenv');
const path = require('path');
const pluralize = require('pluralize');
const fs = require('fs');
const EXPORT_TYPES = false;
if (process.env && process.env.NODE_ENV) {
    dotenv.config({ path: '.env.' + process.env.NODE_ENV });
}
else {
    dotenv.config({ path: '.env.development' });
}
async function awaitAll(array, callback) {
    const promises = array.map(callback);
    return await Promise.all(promises);
}
async function fsReadDirectory(pathname, extension) {
    const files = await fs.promises.readdir(pathname);
    const items = files.flatMap(async (file) => {
        const filePath = path.join(pathname, file);
        const stat = await fs.promises.stat(filePath);
        if (stat.isDirectory()) {
            return;
        }
        if (extension && path.parse(file).ext !== extension) {
            return;
        }
        const data = await fs.promises.readFile(filePath);
        if (!data) {
            return;
        }
        return {
            name: path.parse(file).name,
            data: data.toString(),
        };
    });
    const items2 = (await Promise.all(items)).filter(Boolean);
    return items2;
}
async function fsReadJsonDirectory(pathname) {
    try {
        const datas = await fsReadDirectory(pathname, '.json');
        return datas.filter(Boolean).map(x => {
            x.data = JSON.parse(x.data);
            return x;
        });
    }
    catch (error) {
        console.log('fsReadJsonDirectory', error, pathname);
        // throw (error);
        return [];
    }
}
function fsWatch(pathname, callback, options) {
    const debounced = debounce(callback);
    return fs.watch(pathname, options, debounced);
}
async function fsWrite(pathname, data, encoding = 'utf8') {
    try {
        await fs.promises.writeFile(pathname, data, encoding);
    }
    catch (error) {
        console.log('fsWrite', error, pathname);
    }
}
async function fsWriteJson(pathname, data) {
    try {
        await fsWrite(pathname, JSON.stringify(data, null, 2));
    }
    catch (error) {
        console.log('fsWriteJson', error, pathname);
    }
}
function debounce(callback, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, timeout);
    };
}
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
function localizedToString(json, locale = 'en', defaultLocale = 'en') {
    const localizedString = json[locale] || json[defaultLocale] || Object.values(json)[0];
    return localizedString;
}
function resolveCategoryTree(item, items, categories) {
    const categoryTree = [];
    let categoryId = item.categoryId || null;
    let skipLast = false;
    while (categoryId != null) { // !!! loose
        const c = categories.find(c => c.id === categoryId);
        if (c) {
            const b = { ...c };
            categoryTree.unshift(b);
            categoryId = b.categoryId || null;
            if (b.pageSchema) {
                const page = items.find(p => p.schema === b.pageSchema && p.id === b.pageId);
                if (page) {
                    b.slug = page.slug;
                }
            }
            if (b.pageSchema === item.schema && b.pageId === item.id) {
                skipLast = true;
            }
        }
        else {
            categoryId = null;
        }
    }
    if (!skipLast) {
        categoryTree.push({
            id: item.id,
            schema: 'category',
            title: item.title,
            media: item.media,
            slug: item.slug,
            pageSchema: item.schema,
            pageId: item.id,
        });
    }
    return categoryTree;
}
async function rebuildStore(pathname, PAGES) {
    console.log('MockBuild.rebuildStore', pathname);
    const jsons = await fsReadJsonDirectory(pathname);
    // const json = await fsReadJson(pathname);
    const store = await buildStore(jsons, PAGES);
    const outname = path.join(process.cwd(), '.mock', 'store', `store.json`);
    await fsWriteJson(outname, store);
    console.log('MockBuild.buildComplete', outname);
    return store;
}
async function buildStore(jsons, PAGES) {
    const store = {};
    const pageKeys = Object.keys(PAGES);
    let collections = jsons.map(json => getCollectionNames(json.name));
    collections.forEach((c, i) => {
        store[c.singularName] = toServiceSchema(c, jsons[i].data, pageKeys.includes(c.singularName));
    });
    const pageService = createPageService(store, PAGES);
    store['page'] = pageService;
    const routeService = createRouteService(store, PAGES);
    store['route'] = routeService;
    // Object.keys(store).forEach(key => console.log((store[key] as MockService<any>).collection));
    collections = Object.keys(store).map(key => store[key]);
    if (EXPORT_TYPES) {
        // types generator disabled !!!
        await awaitAll(collections, async (c) => await addType(c.items, c, collections));
    }
    // pageKeys.forEach(key => delete store[key]);
    return store;
}
function createPageService(store, PAGES) {
    const keys = Object.keys(PAGES);
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
    const pageCollection = getCollectionNames('page');
    const pageService = {
        ...pageCollection,
        items: pages,
    };
    return pageService;
}
function titleToSlug(title) {
    return title.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "") //remove diacritics
        .toLowerCase()
        .replace(/\s+/g, '-') //spaces to dashes
        .replace(/&/g, '-and-') //ampersand to and
        .replace(/[^\w\-]+/g, '') //remove non-words
        .replace(/\-\-+/g, '-') //collapse multiple dashes
        .replace(/^-+/, '') //trim starting dash
        .replace(/-+$/, ''); //trim ending dash
}
function createRoute(href, marketId, localeId, pageId, pageSchema, pageTemplate) {
    return {
        id: href,
        schema: 'route',
        marketId,
        localeId,
        pageId,
        pageSchema,
        pageTemplate,
    };
}
function createRouteService(store, PAGES) {
    const keys = Object.keys(PAGES);
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
                const categoryTree = resolveCategoryTree(item, store.page.items, store.category.items);
                const availableMarkets = item.markets ? markets.filter(x => item.markets.indexOf(x.id) !== -1) : markets;
                availableMarkets.forEach(m => {
                    (m.languages || languages).forEach(l => {
                        const href = categoryTree.reduce((p, c, i) => {
                            // !!! page.slug || category.slug
                            let slug = c.slug;
                            if (isLocalizedString(slug)) {
                                slug = localizedToString(slug, l);
                            }
                            slug = `${p}/${slug}`;
                            return slug === '/' ? '' : slug;
                        }, '');
                        // console.log('href', href);
                        const route = createRoute(`/${m.id}/${l}${href}`, m.id, l, item.id, key, item.template);
                        routes.push(route);
                    });
                });
                if (key === 'homepage') {
                    const defaultMarket = markets[0].id;
                    const defaultLocale = markets[0].languages ? markets[0].languages[0] : languages[0];
                    const route = createRoute(`/`, defaultMarket, defaultLocale, item.id, key, item.template);
                    routes.push(route);
                }
            }
        }
        else {
            console.warn(`MockBuild.createRouteService.collection not found [${key}]`);
        }
    }
    // console.log('routes', routes);
    const routeCollection = getCollectionNames('route');
    const routeService = {
        ...routeCollection,
        items: routes,
    };
    return routeService;
}
function getCollectionNames(key) {
    return {
        singularName: key,
        pluralName: pluralize(key),
        displayName: key.charAt(0).toUpperCase() + key.substring(1, key.length).toLowerCase(),
    };
}
function toServiceSchema(c, collection, isPage) {
    if (c.singularName === c.pluralName) {
        throw `MOCK > collection error: invalid plural key ${c.singularName}`;
    }
    const mapToPage = (x, i) => {
        if (typeof x.slug !== 'string') {
            if (x.title != null) {
                if (typeof x.title === 'string') {
                    x.slug = titleToSlug(x.title);
                }
                else {
                    const slug = { ...x.title };
                    Object.keys(slug).forEach((key) => {
                        slug[key] = titleToSlug(slug[key]);
                    });
                    x.slug = slug;
                }
            }
            else {
                throw `MOCK > ${c.singularName} error: invalid page missing title or slug`;
            }
        }
        if (!x.title) {
            throw `MOCK > ${c.singularName} error: invalid page missing title`;
        }
        x.id = i + 1;
        const meta = (x.meta || {});
        meta.title = meta.title || x.title;
        meta.description = meta.description || x.abstract;
        meta.keywords = meta.keywords || 'keywords';
        meta.robots = meta.robots || 'all';
        x.meta = meta;
        return ({
            ...x,
            schema: c.singularName
        });
    };
    const mapToData = (x, i) => {
        return ({
            ...x,
            schema: c.singularName
        });
    };
    return {
        ...c,
        items: collection.map((x, i) => isPage ? mapToPage(x, i) : mapToData(x, i)),
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
import { IEquatable, ILocalizedString } from '@websolute/core';

export type I${c.displayName} = {
  ${keys.map(key => `${key}${optionalKeys.indexOf(key) !== -1 ? '?' : ''}: ${types[key].join(' | ')};`).join('\n  ')}
};
`;
    // console.log(type);
    const pathname = path.join(process.cwd(), '.mock', 'types', `${c.singularName}.ts`);
    await fsWrite(pathname, type);
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
    else if (isLocalizedString(value)) {
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
async function BuildAndWatch(pathname, PAGES) {
    // console.log('MockBuild.BuildAndWatch');
    await rebuildStore(pathname, PAGES);
    fsWatch(pathname, async (eventType, fileName) => {
        // console.log('watching', eventType, fileName);
        await rebuildStore(pathname, PAGES);
    });
}
function MockBuildAndWatch(pathname, PAGES) {
    // console.log(process.argv);
    if (process.argv.includes('mock') && process.env.NODE_ENV !== 'production') {
        global.Request = {};
        BuildAndWatch(pathname, PAGES).catch(error => {
            console.error(error);
        });
    }
}
MockBuildAndWatch('./mock', config_1.PAGES);
