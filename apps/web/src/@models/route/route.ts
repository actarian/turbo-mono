// import { NextApiRequest, NextApiResponse } from 'next';
import type { PAGES } from '@config';
import type { IEntity, IEquatable } from '@core';

export type SchemaType = keyof typeof PAGES;

export interface IRoute extends IEntity {
  id: string;
  // schema: string;
  marketId: string;
  localeId: string;
  pageSchema: string;
  pageId: IEquatable;
}

export interface IRouteLink {
  href?: string;
  title?: string;
  categoryId?: IEquatable;
  items: IRouteLink[];
}

export interface IRouteParams {
  id: IEquatable,
  market: string,
  locale: string,
  [key: string]: any,
}
