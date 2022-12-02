import { IEntity, IEquatable } from '@websolute/core';
import { ICategory, IMedia } from '@websolute/models';

export type IShopDetail = IEntity & {
  category: IEquatable | ICategory;
  slug: string;
  href?: string;
  title: string;
  abstract: string;
  description: string;
  media: IMedia;
  price: number;
};
