import { IEntity, INamedEntity, IQuerable } from '@websolute/core';
import { ICategory } from '../category/category';
import { IFeatureType } from '../feature_type/feature_type';
import { ILabel } from '../label/label';
import { IList } from '../list/list';
import { ILocale } from '../locale/locale';
import { IMarket } from '../market/market';
import { IMenu } from '../menu/menu';
import { IRoute } from '../route/route';

export type IModelStore = {
  category: IQuerable<ICategory>;
  feature_type: IQuerable<IFeatureType>;
  label: IQuerable<ILabel>;
  list: IQuerable<IList>;
  locale: IQuerable<ILocale>;
  market: IQuerable<IMarket>;
  menu: IQuerable<IMenu>;
  route: IQuerable<IRoute>;
  i18n_country: IQuerable<INamedEntity>;
  i18n_province: IQuerable<INamedEntity>;
  i18n_region: IQuerable<INamedEntity>;
  [key: string]: IQuerable<IEntity>;
};
