import { IEquatable, ISchema } from "@websolute/core";
import { IMedia } from "../media/media";

export interface ICartItem extends ISchema {
  id: IEquatable;
  schema: string;
  media: IMedia;
  title: string;
  abstract?: string;
  href: string;
  price: number;
  qty: number;
}

export type ICartAddItem = Omit<ICartItem, 'qty'>;

/*
export interface ICartAddItem extends ISchema {
  id: IEquatable;
  schema: string;
  media: IMedia;
  title: string;
  abstract?: string;
  href: string;
  price: number;
}

export interface ICartItem extends ICartAddItem {
  qty: number;
}
*/
