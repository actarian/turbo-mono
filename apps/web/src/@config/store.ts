import { IProduct, ITile } from '@models';
import type { IEntity, INamedEntity, IQuerable } from '@websolute/core';
import { ICategory, IFeatureType, ILabel, IList, ILocale, IMarket, IMenu, IPage, IRoute } from '@websolute/core';

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
