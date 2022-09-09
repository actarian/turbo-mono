import { ICategory } from '../../models/category/category';
import { IFeatureType } from '../../models/feature_type/feature_type';
import { ILabel } from '../../models/label/label';
import { IList } from '../../models/list/list';
import { ILocale } from '../../models/locale/locale';
import { IMarket } from '../../models/market/market';
import { IMenu } from '../../models/menu/menu';
import { IPage } from '../../models/page/page';
import { IRoute } from '../../models/route/route';
import type { IEntity, INamedEntity, IQuerable } from '../entity/entity';

export type Store = {
  [key: string]: IQuerable<IEntity>;
};

export type CollectionDescription = {
  singularName: string;
  pluralName: string;
  displayName: string;
};

export type SerializedCollection = {
  singularName: string;
  pluralName: string;
  displayName: string;
  items: any[];
};

export type SerializedStore = {
  [key: string]: SerializedCollection;
};

export enum StoreStrategy {
  Api = 'api',
  Data = 'data',
  Mock = 'mock',
}

function getStoreStrategy(): StoreStrategy {
  let storeStrategy = StoreStrategy.Mock;
  if (process && process.env.STORE_STRATEGY) {
    storeStrategy = process.env.STORE_STRATEGY as StoreStrategy;
  }
  return storeStrategy;
}

export const storeStrategy: StoreStrategy = getStoreStrategy();

// !!!
export type IStore = {
  category: IQuerable<ICategory>;
  country: IQuerable<INamedEntity>;
  feature_type: IQuerable<IFeatureType>;
  label: IQuerable<ILabel>;
  list: IQuerable<IList>;
  locale: IQuerable<ILocale>;
  market: IQuerable<IMarket>;
  menu: IQuerable<IMenu>;
  page: IQuerable<IPage>;
  province: IQuerable<INamedEntity>;
  region: IQuerable<INamedEntity>;
  route: IQuerable<IRoute>;
  [key: string]: IQuerable<IEntity>;
}
