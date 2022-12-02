import { IEquatable, QueryParams } from '@websolute/core';
import { getStore } from '@websolute/store';
import { ICategory } from '../category/category';
import { getSegments } from '../category/category.service';
import { resolveLabel } from '../label/label.service';
import { ILayout } from '../layout/layout';
import { getLayout } from '../layout/layout.service';
import { IRouteLink, SchemaType } from '../route/route';
import { getBreadcrumbFromSegments } from '../route/route.service';
import { IModelStore } from '../store/store';
import { IPage } from './page';

export async function findPage<T extends IPage>(schema: string, params?: QueryParams): Promise<T | undefined> {
  const store = await getStore<IModelStore>();
  const collection = store[schema];
  if (!collection) {
    throw `PageService.findPage: Collection not found [${schema}]`;
  }
  const page = await collection.findOne(params) as T;
  if (page) {
    return page;
  } else {
    console.log('PageService.getPage.notfound', schema, params);
    return;
  }
}

export async function getPage<T extends IPage>(schema: string, id: IEquatable, market?: string, locale?: string): Promise<T | undefined> {
  const store = await getStore<IModelStore>();
  const page = await findPage(schema, {
    where: {
      id: {
        equals: id,
      },
    }, market, locale
  }) as T;
  // console.log(page, market, locale);
  if (page) {
    const routes = await store.route.findMany({
      where: {
        page: {
          equals: id,
        },
        schema: {
          equals: schema,
        },
      }
    });
    const currentRoute = routes.find((x: any) => x.market === market && x.locale === locale);
    if (!currentRoute) {
      throw ('No route found for page ' + schema + ':' + id + ' in market ' + market + ' and locale ' + locale);
    }
    const alternates = routes.filter((x: any) => x.market !== market || x.locale !== locale);
    const segments: ICategory[] = await getSegments(page);
    const breadcrumb: IRouteLink[] = await getBreadcrumbFromSegments(segments, market, locale);
    const parentRoute: IRouteLink | undefined = breadcrumb.length > 1 ? breadcrumb[breadcrumb.length - 2] : undefined;
    return {
      ...page,
      href: currentRoute.id, // !!! route?
      alternates,
      breadcrumb,
      parentRoute,
    } as T;
  } else {
    console.log('PageService.getPage.notfound', schema, id, locale);
    return;
  }
}

export async function getPageCategory<T extends IPage>(schema: string, page?: IPage, market?: string, locale?: string): Promise<T | undefined> {
  if (!page) {
    return;
  }
  const store = await getStore<IModelStore>();
  const category = await findPage(schema, {
    where: {
      category: {
        equals: typeof page.category === 'object' ? page.category.id : page.category,
      }
    }, market, locale
  }) as T;
  // console.log(page, market, locale);
  if (category) {
    const routes = await store.route.findMany({
      where: {
        schema: {
          equals: schema,
        },
        page: {
          equals: category.id,
        },
      }
    });
    const currentRoute = routes.find((x: any) => x.market === market && x.locale === locale);
    if (!currentRoute) {
      throw ('No route found for page ' + schema + ':' + category.id + ' in market ' + market + ' and locale ' + locale);
    }
    return {
      ...category,
      href: currentRoute.id,
    } as T;
  } else {
    console.log('PageService.getPageCategory.notfound', schema, locale);
    return;
  }
}

export async function getErrorPageLayout(): Promise<{ layout: ILayout, page: IPage }> {
  const defaultMarket = 'ww';
  const defaultLocale = 'en';
  const layout = await getLayout(defaultMarket, defaultLocale);
  const title = resolveLabel(layout.labels, 'notfound.title');
  const abstract = resolveLabel(layout.labels, 'notfound.abstract');
  const page = {
    id: 'notfound',
    schema: 'notfound' as SchemaType,
    href: '',
    alternates: [],
    breadcrumb: [],
    title,
    abstract,
    category: 'homepage',
    meta: {
      title,
      description: abstract,
      keywords: '',
      robots: 'all',
    },
  };
  return { layout, page };
}

