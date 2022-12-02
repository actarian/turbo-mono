import { IEquatable } from '@websolute/core';
import { IMedia } from '../media/media';

export type IRoute = {
  id: string;
  market: string;
  locale: string;
  category: string;
  page: IEquatable;
  schema: string;
  template?: string;
};

export type IRouteLink = {
  id: IEquatable;
  href: string;
  title: string;
  items?: IRouteLink[];
  media?: IMedia;
};

export type IRouteParams = {
  id: IEquatable,
  market: string,
  locale: string,
  [key: string]: any,
};

export type SchemaType = string;
