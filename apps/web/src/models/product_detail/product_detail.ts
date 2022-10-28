import type { IEntity, IEquatable } from '@websolute/core';

export type IProductDetail = IEntity & {
  slug: string;
  title?: string;
  abstract?: string;
  description?: string;
  categoryId: IEquatable;
  href?: string;
}
