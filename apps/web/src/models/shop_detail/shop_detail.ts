import { IEntity, IEquatable } from '@websolute/core';
import { IMedia } from '@websolute/models';

export type IShopDetail = IEntity & {
  category: IEquatable;
  slug: string;
  href?: string;
  title: string;
  abstract: string;
  description: string;
  media: IMedia;
  price: number;
};
