import type { IEntity, IEquatable } from '@websolute/core';
import type { IMedia } from '../media/media';

export interface IRoute extends IEntity {
  id: string;
  // schema: string;
  marketId: string;
  localeId: string;
  pageSchema: string;
  pageId: IEquatable;
}

export interface IRouteLink {
  id: IEquatable;
  href: string;
  title: string;
  items?: IRouteLink[];
  media?: IMedia;
}

export interface IRouteParams {
  id: IEquatable,
  market: string,
  locale: string,
  [key: string]: any,
}

export type SchemaType = string;
