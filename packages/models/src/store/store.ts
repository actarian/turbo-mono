import { IEntity, INamedEntity, IQuerable } from '@websolute/core';
import { ICategory } from '../category/category';
import { IFeatureType } from '../feature_type/feature_type';
import { ILabel } from '../label/label';
import { IList } from '../list/list';
import { ILocale } from '../locale/locale';
import { IMarket } from '../market/market';
import { IMenu } from '../menu/menu';
import { IPage } from '../page/page';
import { IRoute } from '../route/route';

export type IModelStore = {
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
