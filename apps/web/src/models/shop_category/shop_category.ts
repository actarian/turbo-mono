import type { IEntity, IEquatable } from '@websolute/core';
import { IMedia } from '@websolute/models';

export interface IShopCategory extends IEntity {
  categoryId: IEquatable;
  slug: string;
  href: string;
  title: string;
  abstract: string;
  description: string;
  media: IMedia;
}
