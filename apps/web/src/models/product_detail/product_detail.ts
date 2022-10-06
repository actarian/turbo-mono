import type { IEntity, IEquatable } from '@websolute/core';

export interface IProductDetail extends IEntity {
  slug: string;
  title?: string;
  abstract?: string;
  description?: string;
  categoryId: IEquatable;
  href?: string;
}
