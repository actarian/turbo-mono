import { IEntity, IEquatable } from '@websolute/core';
import { IMedia } from '../media/media';

export type IRoute = IEntity & {
  id: string;
  // schema: string;
  marketId: string;
  localeId: string;
  pageId: IEquatable;
  pageSchema: string;
  pageTemplate?: string;
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
