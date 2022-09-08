import type { IEquatable } from '@core';
import { getStore } from '@core/store/store.service';
import type { ICategory, ILayout, IRouteLink, SchemaType } from '@models';
import { getCategoryTree } from '@models/category/category.service';
import { resolveLabel } from '@models/label/label.service';
import { getLayout } from '@models/layout/layout.service';
import { getBreadcrumbFromCategoryTree } from '@models/route/route.service';
import type { IPage } from './page';

export async function getPage<T extends IPage>(schema: string, id: IEquatable, market?: string, locale?: string): Promise<T | null> {
  const store = await getStore();
  const page = await store.page.findOne({ where: { schema, id }, market, locale }) as T;
  // console.log(page, market, locale);
  if (page) {
    const routes = await store.route.findMany({ where: { pageSchema: schema, pageId: id } });
    const currentRoute = routes.find(x => x.marketId === market && x.localeId === locale);
    if (!currentRoute) {
      throw ('No route found for page ' + schema + ':' + id + ' in market ' + market + ' and locale ' + locale);
    }
    const alternates = routes.filter(x => x.marketId !== market || x.localeId !== locale);
    const categoryTree: ICategory[] = await getCategoryTree(page);
    const breadcrumb: IRouteLink[] = await getBreadcrumbFromCategoryTree(categoryTree, market, locale);
    return {
      ...page,
      href: currentRoute.id, // !!! route?
      alternates,
      breadcrumb: breadcrumb,
    } as T;
  } else {
    console.log('PageService.getPage.notfound', schema, id, locale);
    return null;
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
