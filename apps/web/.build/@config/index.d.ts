import type { IEntity, INamedEntity, IQuerable } from '@core';
import { ICategory, IFeatureType, ILabel, ILocale, IMarket, IMenu, IPage, IProduct, IRoute, ITile } from '@models';
import { IList } from '@models/list/list';
export declare const PAGES: {
    homepage: string;
    about: string;
    contact: string;
    product_index: string;
    product_search_csr: string;
    product_search_ssr: string;
    product: string;
    notfound: string;
};
export declare type AppStore = {
    about: IQuerable<any>;
    category: IQuerable<ICategory>;
    contact: IQuerable<any>;
    country: IQuerable<any>;
    feature_type: IQuerable<IFeatureType>;
    homepage: IQuerable<any>;
    label: IQuerable<ILabel>;
    list: IQuerable<IList>;
    locale: IQuerable<ILocale>;
    market: IQuerable<IMarket>;
    menu: IQuerable<IMenu>;
    notfound: IQuerable<any>;
    page: IQuerable<IPage>;
    product_index: IQuerable<any>;
    product: IQuerable<IProduct>;
    province: IQuerable<INamedEntity>;
    region: IQuerable<INamedEntity>;
    route: IQuerable<IRoute>;
    tile: IQuerable<ITile>;
    [key: string]: IQuerable<IEntity>;
};
//# sourceMappingURL=index.d.ts.map