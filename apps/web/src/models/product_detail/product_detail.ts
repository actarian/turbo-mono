import { IEntity, IEquatable } from '@websolute/core';

export type IProductDetail = IEntity & {
  slug: string;
  title?: string;
  abstract?: string;
  description?: string;
  category: IEquatable;
  href?: string;
};
