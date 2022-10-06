import type { IEntity, IEquatable } from '@websolute/core';

export interface IShopDetail extends IEntity {
  // id: IEquatable;
  // schema: string;
  slug: string;
  title: string;
  abstract: string;
  description: string;
  image: string;
  price: number;
  categoryId: IEquatable;
  href?: string;
}
