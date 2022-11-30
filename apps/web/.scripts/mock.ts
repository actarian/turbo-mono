import { PAGES } from '../src/config';

import { IEntity, ILocalizedString } from '@websolute/core';
import { ICategorized, ICategory, IMarket, IRoute } from '@websolute/models';
import { MockStore } from '@websolute/store';

const dotenv = require('dotenv');
const path = require('path');
const pluralize = require('pluralize');
const fs = require('fs');

if (process.env && process.env.NODE_ENV) {
  dotenv.config({ path: '.env.' + process.env.NODE_ENV });
} else {
  dotenv.config({ path: '.env.development' });
}

// !!! types generator disabled
const EXPORT_TYPES = false;

type CollectionDescription = {
  singularName: string;
  pluralName: string;
  displayName: string;
};

type SerializedCollection = {
  singularName: string;
  pluralName: string;
  displayName: string;
  items: any[];
};

type SerializedStore = {
  [key: string]: SerializedCollection;
};

async function awaitAll(array: any, callback: (item: any, index: number) => Promise<any>): Promise<any[]> {
  const promises = array.map(callback);
  return await Promise.all(promises);
}

async function fsReadDirectory(pathname: string, extension?: string): Promise<{ name: string, data: string }[]> {
  const files = await fs.promises.readdir(pathname);
  const items = files.flatMap(async (file: string) => {
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
  }) as Promise<{ name: string, data: string }>[];
  const items2 = (await Promise.all(items)).filter(Boolean);
  return items2;
}

async function fsReadJsonDirectory(pathname: string): Promise<{ name: string, data: any }[]> {
  try {
    const datas = await fsReadDirectory(pathname, '.json');
    return datas.filter(Boolean).map(x => {
      x.data = JSON.parse(x.data);
      return x;
    });
  } catch (error) {
    console.log('fsReadJsonDirectory', error, pathname);
    // throw (error);
    return [];
  }
}

function fsWatch(pathname: string, callback: (eventType: any, fileName: string) => void, options?: { interval: 2000 }): void {
  const debounced = debounce(callback);
  return fs.watch(pathname, options, debounced);
}

async function fsWrite(pathname: string, data: string, encoding = 'utf8'): Promise<void> {
  try {
    await fs.promises.writeFile(pathname, data, encoding);
  } catch (error) {
    console.log('fsWrite', error, pathname);
  }
}

async function fsWriteJson(pathname: string, data: any): Promise<void> {
  try {
    await fsWrite(pathname, JSON.stringify(data, null, 2));
  } catch (error) {
    console.log('fsWriteJson', error, pathname);
  }
}

function debounce(callback: (...args: any[]) => void, timeout: number = 300) {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
}

function isLocalizedString(value: any): value is ILocalizedString {
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

function localizedToString(json: ILocalizedString, locale: string = 'en', defaultLocale: string = 'en'): string {
  const localizedString = json[locale] || json[defaultLocale] || Object.values(json)[0];
  return localizedString;
}

function getRouteSegments(schema: string, item: ICategorized, categories: ICategory[]): ICategory[] {
  const segments: ICategory[] = [];
  let parentId = item.category || null;
  while (parentId != null) { // !!! loose
    const parentCategory = categories.find(c => c.id === parentId);
    if (parentCategory) {
      if (parentCategory.slug) {
        const segment = { ...parentCategory };
        segments.unshift(segment);
      }
      parentId = parentCategory.category || null;
    } else {
      parentId = null;
    }
  }
  if (item.isDefault !== true) {
    segments.push({
      id: item.id,
      title: item.title,
      slug: item.slug,
      schema: schema,
      page: item.id,
      media: item.media,
    });
  }
  return segments;
}

async function rebuildStore(pathname: string, PAGES: { [key: string]: string }): Promise<MockStore> {
  console.log('MockBuild.rebuildStore', pathname);
  const jsons = await fsReadJsonDirectory(pathname);
  // const json = await fsReadJson(pathname);
  const store = await buildStore(jsons, PAGES);
  const outname = path.join(process.cwd(), '.mock', 'store', `store.json`);
  await fsWriteJson(outname, store);
  console.log('MockBuild.buildComplete', outname);
  return store;
}

async function buildStore(jsons: { name: string, data: IEntity[] }[], PAGES: { [key: string]: string }): Promise<MockStore> {
  const store: SerializedStore = {};
  const pageKeys = Object.keys(PAGES);
  let collections: CollectionDescription[] = jsons.map(json => getCollectionNames(json.name));
  collections.forEach((c, i) => {
    let collectionService;
    if (c.singularName === 'category') {
      collectionService = toCategorySchema(c, jsons[i].data);
    } else if (pageKeys.includes(c.singularName)) {
      collectionService = toPageSchema(c, jsons[i].data);
    } else {
      collectionService = toDataSchema(c, jsons[i].data);
    }
    store[c.singularName] = collectionService;
  });
  /*
  const pageService = createPageService(store, PAGES);
  store.page = pageService;
  */
  const routeService = createRouteService(store, PAGES);
  store.route = routeService;
  collections = Object.keys(store).map(key => store[key]);
  if (EXPORT_TYPES) {
    await awaitAll(collections, async (c) => await addType(c.items, c, collections));
  }
  const mockStore: MockStore = {};
  Object.keys(store).forEach(key => {
    mockStore[key] = store[key].items;
  });
  return mockStore;
}

function createPageService(store: SerializedStore, PAGES: { [key: string]: string }): SerializedCollection {
  const keys = Object.keys(PAGES);
  const pages: any[] = [];
  for (const key of keys) {
    const collection = store[key];
    if (collection) {
      const items = collection.items as ICategorized[];
      pages.push(...items);
    } else {
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

function titleToSlug(title: string): string {
  return title.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "") //remove diacritics
    .toLowerCase()
    .replace(/\s+/g, '-') //spaces to dashes
    .replace(/&/g, '-and-') //ampersand to and
    .replace(/[^\w\-]+/g, '') //remove non-words
    .replace(/\-\-+/g, '-') //collapse multiple dashes
    .replace(/^-+/, '') //trim starting dash
    .replace(/-+$/, ''); //trim ending dash
}

function createRouteService(store: SerializedStore, PAGES: { [key: string]: string }): SerializedCollection {
  const routes: IRoute[] = [];
  const locales = store.locale.items;
  const languages: string[] = locales.map(x => x.id);
  const markets: IMarket[] = store.market.items.map(x => ({
    schema: 'market',
    id: x.id,
    languages: x.languages || languages,
  }));
  const categories = store.category.items;
  // console.log(categories[0]);
  const keys = Object.keys(PAGES);
  for (const key of keys) {
    const collection = store[key];
    if (collection) {
      const items = collection.items;
      // console.log('createRouteService', key, items.length);
      for (const item of items) {
        const segments = getRouteSegments(key, item, categories);
        const availableMarkets = item.markets ? markets.filter(x => item.markets.indexOf(x.id) !== -1) : markets;
        availableMarkets.forEach(m => {
          (m.languages || languages).forEach(l => {
            const href = segments.reduce((p, c, i) => {
              // !!! page.slug || category.slug
              let slug = c.slug;
              if (isLocalizedString(slug)) {
                slug = localizedToString(slug, l);
              }
              slug = `${p}/${slug}`;
              return slug === '/' ? '' : slug;
            }, '');
            // console.log('href', href);
            let prefix = '';
            if (languages.length > 1 || markets.length > 1) {
              prefix = `/${l}`;
            }
            if (markets.length > 1) {
              prefix = `${prefix}-${m.id}`;
            }
            const route = {
              id: `${prefix}${href}`,
              market: m.id,
              locale: l,
              page: item.id,
              schema: key,
              template: item.template,
            };
            routes.push(route);
          });
        });
        if (key === 'homepage') {
          const defaultLanguage = locales.find(x => x.isDefault);
          const defaultMarket = markets.find(x => x.isDefault) || markets[0];
          const defaultMarketLanguage = defaultMarket && defaultMarket.defaultLanguage ? defaultMarket.defaultLanguage : defaultLanguage.id;
          const route = {
            id: `/`,
            market: defaultMarket.id,
            locale: defaultMarketLanguage,
            page: item.id,
            schema: key,
            template: item.template,
          };
          routes.push(route);
        }
      }
    } else {
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

function getCollectionNames(key: string): CollectionDescription {
  return {
    singularName: key,
    pluralName: pluralize(key),
    displayName: key.charAt(0).toUpperCase() + key.substring(1, key.length).toLowerCase(),
  };
}

function toCategorySchema(c: CollectionDescription, collection: IEntity[]): SerializedCollection {
  if (c.singularName === c.pluralName) {
    throw `MOCK > collection error: invalid plural key ${c.singularName}`;
  }
  const mapToCategory = (x: IEntity, i: number) => {
    if (typeof x.slug !== 'string') {
      if (x.title != null) {
        if (typeof x.title === 'string') {
          x.slug = titleToSlug(x.title);
        } else {
          const slug: ILocalizedString = { ...x.title };
          Object.keys(slug).forEach((key: string) => {
            slug[key] = titleToSlug(slug[key]);
          });
          x.slug = slug;
        }
      }
    }
    const data = {
      ...x,
    }
    if (!data.schema) {
      data.schema = c.singularName;
    }
    return data;
  }
  return {
    ...c,
    items: collection.map((x, i) => mapToCategory(x, i)),
  };
}

function toPageSchema(c: CollectionDescription, collection: IEntity[]): SerializedCollection {
  if (c.singularName === c.pluralName) {
    throw `MOCK > collection error: invalid plural key ${c.singularName}`;
  }
  const mapToPage = (x: IEntity, i: number) => {
    if (typeof x.slug !== 'string') {
      if (x.title != null) {
        if (typeof x.title === 'string') {
          x.slug = titleToSlug(x.title);
        } else {
          const slug: ILocalizedString = { ...x.title };
          Object.keys(slug).forEach((key: string) => {
            slug[key] = titleToSlug(slug[key]);
          });
          x.slug = slug;
        }
      } else {
        throw `MOCK > ${c.singularName} error: invalid page missing title or slug`;
      }
    }
    if (!x.title) {
      throw `MOCK > ${c.singularName} error: invalid page missing title`;
    }
    x.id = i + 1;
    const meta: { [key: string]: string | ILocalizedString } = (x.meta || {} as any);
    meta.title = meta.title || x.title as string | ILocalizedString;
    meta.description = meta.description || x.abstract as string | ILocalizedString;
    meta.keywords = meta.keywords || 'keywords';
    meta.robots = meta.robots || 'all';
    x.meta = meta;
    const page = {
      ...x,
    }
    if (!page.schema) {
      page.schema = c.singularName;
    }
    return page;
  }
  return {
    ...c,
    items: collection.map((x, i) => mapToPage(x, i)),
  };
}

function toDataSchema(c: CollectionDescription, collection: IEntity[]): SerializedCollection {
  if (c.singularName === c.pluralName) {
    throw `MOCK > collection error: invalid plural key ${c.singularName}`;
  }
  const mapToData = (x: IEntity, i: number) => {
    const data = {
      ...x,
    };
    if (!data.schema) {
      data.schema = c.singularName;
    }
    return data;
  }
  return {
    ...c,
    items: collection.map((x, i) => mapToData(x, i)),
  };
}

async function addType(items: IEntity[], c: CollectionDescription, collections: CollectionDescription[]): Promise<string | undefined> {
  const types: {
    [key: string]: string[]
  } = {};
  const keys: string[] = [];
  const optionalKeys: string[] = [];
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

function getType(key: string, value: any, collections: CollectionDescription[]): string {
  let type;
  const equatableIds = ['id', ...collections.map(x => x.singularName + 'Id')];
  if (value === null) {
    type = 'null';
  } else if (equatableIds.indexOf(key) !== -1) {
    type = 'IEquatable';
  } else if (typeof value === 'boolean') {
    type = 'boolean';
  } else if (typeof value === 'string') {
    type = 'string';
  } else if (typeof value === 'number') {
    type = 'number';
  } else if (isLocalizedString(value)) {
    type = 'ILocalizedString';
  } else if (Array.isArray(value)) {
    type = 'any[]';
  } else {
    type = 'any';
  }
  return type;
}

async function BuildAndWatch(pathname: string, PAGES: { [key: string]: string }) {
  // console.log('MockBuild.BuildAndWatch');
  await rebuildStore(pathname, PAGES);
  fsWatch(pathname, async (eventType: any, fileName: string) => {
    // console.log('watching', eventType, fileName);
    await rebuildStore(pathname, PAGES);
  });
}

function MockBuildAndWatch(pathname: string, PAGES: { [key: string]: string }) {
  // console.log(process.argv);
  if (process.argv.includes('mock') && process.env.NODE_ENV !== 'production') {
    global.Request = {} as any;
    BuildAndWatch(pathname, PAGES).catch(error => {
      console.error(error);
    });
  }
}

MockBuildAndWatch('./mock', PAGES);
