import { IEntity, IEquatable } from '@websolute/core';
import { ICategory } from '@websolute/models';

export type IProductDetail = IEntity & {
  slug: string;
  title?: string;
  abstract?: string;
  description?: string;
  category: IEquatable | ICategory;
  href?: string;
};
