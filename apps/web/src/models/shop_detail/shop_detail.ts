import type { IEntity, IEquatable } from '@websolute/core';
import { IMedia } from '@websolute/models';

export interface IShopDetail extends IEntity {
  categoryId: IEquatable;
  slug: string;
  href?: string;
  title: string;
  abstract: string;
  description: string;
  media: IMedia;
  price: number;
}
