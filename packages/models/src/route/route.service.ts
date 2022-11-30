import { isLocalizedString, localizedToString, QueryParams } from '@websolute/core';
import { getStore } from '@websolute/store';
import { ICategory } from '../category/category';
import { IModelStore } from '../store/store';
import { IRoute, IRouteLink } from './route';
// eslint-disable-next-line @typescript-eslint/no-var-requires

export async function getRoutes(params: QueryParams = {}): Promise<IRoute[]> {
  const store = await getStore<IModelStore>();
  const routes = await store.route.findMany(params);
  return routes;
}

export async function getRoute(id: string): Promise<IRoute | undefined> {
  const store = await getStore<IModelStore>();
  const route = await store.route.findOne({
    where: {
      id: {
        equals: id,
      }
    }
  });
  // console.log('getRoute', id, '->', route);
  return route;
}

export async function getRoutesForSchemas(schemas: string[], market?: string, locale?: string): Promise<{ [key: string]: string; }> {
  const store = await getStore<IModelStore>();
  const routes = await store.route.findMany({
    where: {
      schema: {
        in: schemas,
      },
      market: {
        equals: market,
      },
      locale: {
        equals: locale,
      },
    }, market, locale
  });
  const items: {
    [key: string]: string;
  } = {};
  routes.forEach(route => {
    items[route.schema] = route.id;
  });
  return items;
}

export async function getRoutesForTemplates(templates: string[], market?: string, locale?: string): Promise<{ [key: string]: string; }> {
  const store = await getStore<IModelStore>();
  const routes = await store.route.findMany({
    where: {
      template: {
        in: templates,
      },
      market: {
        equals: market,
      },
      locale: {
        equals: locale,
      },
    }, market, locale
  });
  const items: {
    [key: string]: string;
  } = {};
  routes.forEach(route => {
    if (route.template) {
      items[route.template] = route.id;
    }
  });
  return items;
}

export async function getStaticPathsForSchema(schema: string): Promise<StaticPath[]> {
  const store = await getStore<IModelStore>();
  const routes = await store.route.findMany({
    where: {
      schema: {
        equals: schema
      }
    }
  });
  return routes.map((x: any) => ({ params: { id: x.page.toString(), market: x.market, locale: x.locale } }));
}

export async function decorateHref(item: any, market: string = 'ww', locale: string = 'en'): Promise<any> {
  const routes = await getRoutes({
    where: {
      schema: {
        equals: item.schema
      },
      page: {
        equals: item.id
      },
      market: {
        equals: market
      },
      locale: {
        equals: locale
      },
    }
  });
  const href = routes.length ? routes[0].id : null;
  return { ...item, href };
}

export async function getBreadcrumbFromSegments(segments: ICategory[], market: string = 'ww', locale: string = 'en'): Promise<IRouteLink[]> {
  const routes: IRoute[] = await getRoutes({
    where: {
      market: {
        equals: market
      },
      locale: {
        equals: locale
      },
    }
  });
  const tree: IRouteLink[] = segments.map(segment => {
    const route = segment.schema && segment.page ? routes.find(r =>
      r.schema === segment.schema &&
      r.page === segment.page
    ) : undefined;
    const href = route ? route.id.toString() : '/#';
    return { segment, href };
  }).map(x => {
    const segment: ICategory = x.segment;
    const href: string = x.href;
    let title = segment.title || 'untitled';
    if (isLocalizedString(title)) {
      title = localizedToString(title, locale);
    }
    return {
      id: segment.id,
      title: title,
      href,
      items: [],
    };
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
  const homeCategory = categories.find(x => x.schema === 'homepage');
  if (homeCategory) {
    const root = categoryToRouteLink(routes, categories, homeCategory, market, locale);
    // console.log('getRouteLinkTree', root);
    return root;
  }
  return undefined;
}

export function getChildCategories(routes: IRoute[], categories: ICategory[], category: ICategory, market: string = 'ww', locale: string = 'en'): IRouteLink[] {
  return categories.filter(x => x.category === category.id).map(x => categoryToRouteLink(routes, categories, x, market, locale));
}

export function categoryToRouteLink(routes: IRoute[], categories: ICategory[], category: ICategory, market: string = 'ww', locale: string = 'en'): IRouteLink {
  const route = category.schema && category.page ? routes.find(r =>
    r.schema === category.schema &&
    r.page === category.page &&
    r.market === market &&
    r.locale === locale
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

export function resolveRoute(route: IRoute) {
  const routepath: string = route.template ? route.template : route.schema;
  const resolvedPathname = `/${route.market}/${route.locale}/${routepath}/${route.page}`;
  // console.log('resolveRoute', route.schema, resolvedPathname);
  return resolvedPathname;
}

export type StaticPath = { params: { [key: string]: string } };
