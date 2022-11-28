import { IEquatable } from '@websolute/core';
import { getStore } from '@websolute/store';
import { ICategory } from '../category/category';
import { getCategoryTree } from '../category/category.service';
import { resolveLabel } from '../label/label.service';
import { ILayout } from '../layout/layout';
import { getLayout } from '../layout/layout.service';
import { IRouteLink, SchemaType } from '../route/route';
import { getBreadcrumbFromCategoryTree } from '../route/route.service';
import { IModelStore } from '../store/store';
import { IPage } from './page';

export async function getPage<T extends IPage>(schema: string, id: IEquatable, market?: string, locale?: string): Promise<T | undefined> {
  const store = await getStore<IModelStore>();
  const page = await store.page.findOne({
    where: {
      id: {
        equals: id,
      },
      schema: {
        equals: schema,
      }
    }, market, locale
  }) as T;
  // console.log(page, market, locale);
  if (page) {
    const routes = await store.route.findMany({
      where: {
        pageId: {
          equals: id,
        },
        pageSchema: {
          equals: schema,
        },
      }
    });
    const currentRoute = routes.find((x: any) => x.marketId === market && x.localeId === locale);
    if (!currentRoute) {
      throw ('No route found for page ' + schema + ':' + id + ' in market ' + market + ' and locale ' + locale);
    }
    const alternates = routes.filter((x: any) => x.marketId !== market || x.localeId !== locale);
    const categoryTree: ICategory[] = await getCategoryTree(page);
    const breadcrumb: IRouteLink[] = await getBreadcrumbFromCategoryTree(categoryTree, market, locale);
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
  const category = await store.page.findOne({
    where: {
      schema: {
        equals: schema,
      },
      categoryId: {
        equals: page.categoryId,
      }
    }, market, locale
  }) as T;
  // console.log(page, market, locale);
  if (category) {
    const routes = await store.route.findMany({
      where: {
        pageSchema: {
          equals: schema,
        },
        pageId: {
          equals: category.id,
        },
      }
    });
    const currentRoute = routes.find((x: any) => x.marketId === market && x.localeId === locale);
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
    meta: {
      title,
      description: abstract,
      keywords: '',
      robots: 'all',
    },
  };
  return { layout, page };
}

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
