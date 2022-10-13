import type { FindParams } from '@websolute/core';
import { isLocalizedString, localizedToString } from '@websolute/core';
import { getStore } from '@websolute/store';
import type { ICategory } from '../category/category';
import { IModelStore } from '../store/store';
import type { IRoute, IRouteLink } from './route';
// eslint-disable-next-line @typescript-eslint/no-var-requires

export async function getRoutes(params: FindParams = {}): Promise<IRoute[]> {
  const store = await getStore<IModelStore>();
  const routes = await store.route.findMany(params);
  return routes;
}

export async function getRoute(id: string): Promise<IRoute | undefined> {
  const store = await getStore<IModelStore>();
  const route = await store.route.findOne(id);
  // console.log('getRoute', id, '->', route);
  return route;
}

export async function getRoutesForSchemas(schemas: string[], market?: string, locale?: string): Promise<{ [key: string]: string; }> {
  const store = await getStore<IModelStore>();
  const routes = await store.route.findMany({
    where: {
      pageSchema: schemas, marketId: market, localeId: locale
    }, market, locale
  });
  const pageSchemas: {
    [key: string]: string;
  } = {};
  routes.forEach(route => {
    pageSchemas[route.pageSchema] = route.id;
  });
  return pageSchemas;
}

export async function getStaticPathsForSchema(schema: string): Promise<StaticPath[]> {
  const store = await getStore<IModelStore>();
  const routes = await store.route.findMany({ where: { pageSchema: schema } });
  return routes.map((x: any) => ({ params: { id: x.pageId.toString(), market: x.marketId, locale: x.localeId } }));
}

export async function decorateHref(item: any, market: string = 'ww', locale: string = 'en'): Promise<any> {
  const routes = await getRoutes({ where: { pageSchema: item.schema, pageId: item.id, marketId: market, localeId: locale } });
  const href = routes.length ? routes[0].id : null;
  return { ...item, href };
}

export async function getBreadcrumbFromCategoryTree(categoryTree: ICategory[], market: string = 'ww', locale: string = 'en'): Promise<IRouteLink[]> {
  const routes: IRoute[] = await getRoutes({ where: { marketId: market, localeId: locale } });
  const tree: IRouteLink[] = categoryTree.map(category => {
    const route = category.pageSchema && category.pageId ? routes.find(r =>
      r.pageSchema === category.pageSchema &&
      r.pageId === category.pageId
    ) : undefined;
    const href = route ? route.id.toString() : '/#';
    return { category, href };
  }).map(x => {
    const category: ICategory = x.category;
    const href: string = x.href;
    let title = category.title || 'untitled';
    if (isLocalizedString(title)) {
      title = localizedToString(title, locale);
    }
    return {
      id: category.id,
      title: title,
      href,
      items: [],
    }
  });
  return tree;
}

export async function getRouteLinkTree(market: string = 'ww', locale: string = 'en'): Promise<IRouteLink | undefined> {
  const store = await getStore<IModelStore>();
  const routes: IRoute[] = await store.route.findMany() as any[];
  const categories: ICategory[] = await store.category.findMany() as any[];
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

export function getChildCategories(routes: IRoute[], categories: ICategory[], category: ICategory, market: string = 'ww', locale: string = 'en'): IRouteLink[] {
  return categories.filter(x => x.categoryId === category.id).map(x => categoryToRouteLink(routes, categories, x, market, locale));
}

export function categoryToRouteLink(routes: IRoute[], categories: ICategory[], category: ICategory, market: string = 'ww', locale: string = 'en'): IRouteLink {
  const route = category.pageSchema && category.pageId ? routes.find(r =>
    r.pageSchema === category.pageSchema &&
    r.pageId === category.pageId &&
    r.marketId === market &&
    r.localeId === locale
  ) : null;
  const href = route ? route.id.toString() : '/#';
  let title = category.title || 'untitled';
  if (isLocalizedString(title)) {
    title = localizedToString(title, locale);
  }
  return {
    id: category.id,
    title,
    href,
    media: category.media,
    items: getChildCategories(routes, categories, category, market, locale),
  };
}

export function resolveRoute(route: IRoute, PAGES: { [key: string]: string }) {
  // console.log('resolveRoute', route.pageSchema);
  const routepath: string = PAGES[route.pageSchema];
  return `/${route.marketId}/${route.localeId}/${routepath}/${route.pageId}`;
  /*
  routepath = routepath.replace(/:([^\/]*)/g, (match, p1) => {
    return route[p1];
  });
  return routepath;
  */
}

export type StaticPath = { params: { [key: string]: string } };
