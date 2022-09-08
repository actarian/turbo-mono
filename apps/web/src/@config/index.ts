import type { IEntity, INamedEntity, IQuerable } from '@core';
import { ICategory, IFeatureType, ILabel, ILocale, IMarket, IMenu, IPage, IProduct, IRoute, ITile } from '@models';
import { IList } from '@models/list/list';

/*
  * Here we define the mapping of the entities types to the physical templates in the pages/[market]/[locale] folder.
*/
export const PAGES = {
  homepage: 'homepage',
  about: 'about',
  contact: 'contact',
  product_index: 'product_index',
  product_search_csr: 'product_search_csr',
  product_search_ssr: 'product_search_ssr',
  product: 'product',
  notfound: 'notfound',
};

/*
  * Here we define the AppStore mapping of the entities types to the IQuerable services.
*/
export type AppStore = {
  about: IQuerable<any>;
  category: IQuerable<ICategory>; // todo refactor category slug
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
}
