import { IEquatable, ISchema } from '@websolute/core';
import { IMedia } from '../media/media';

export type ICartItem = ISchema & {
  id: IEquatable;
  schema: string;
  media: IMedia;
  title: string;
  abstract?: string;
  href: string;
  price: number;
  qty: number;
};

export type ICartAddItem = Omit<ICartItem, 'qty'>;

/*
export type ICartAddItem = ISchema & {
  id: IEquatable;
  schema: string;
  media: IMedia;
  title: string;
  abstract?: string;
  href: string;
  price: number;
}

export type ICartItem = ICartAddItem & {
  qty: number;
}
*/
