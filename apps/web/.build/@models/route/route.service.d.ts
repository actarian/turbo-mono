import type { FindParams } from '@core';
import type { ICategory } from '@models';
import type { IRoute, IRouteLink } from './route';
export declare function getRoutes(params?: FindParams): Promise<IRoute[]>;
export declare function getRoute(id: string): Promise<IRoute | null>;
export declare function getStaticPathsForSchema(schema: string): Promise<StaticPath[]>;
export declare function decorateHref(item: any, market?: string, locale?: string): Promise<any>;
export declare function getBreadcrumbFromCategoryTree(categoryTree: ICategory[], market?: string, locale?: string): Promise<IRouteLink[]>;
export declare function getRouteLinkTree(market?: string, locale?: string): Promise<IRouteLink | undefined>;
export declare function getChildCategories(routes: IRoute[], categories: ICategory[], category: ICategory, market?: string, locale?: string): IRouteLink[];
export declare function categoryToRouteLink(routes: IRoute[], categories: ICategory[], category: ICategory, market?: string, locale?: string): IRouteLink;
export declare function resolveRoute(route: IRoute): string;
export declare type StaticPath = {
    params: {
        [key: string]: string;
    };
};
//# sourceMappingURL=route.service.d.ts.map