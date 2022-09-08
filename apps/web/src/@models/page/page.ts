// import { NextApiRequest, NextApiResponse } from 'next';
import type { IEntity, IEquatable } from '@core';
import type { ILayout, IRoute, IRouteLink, IRouteParams } from '@models';

export interface IMeta {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
}

export interface IImage {
  url: string;
  type?: string;
  alt?: string;
  title?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface IPage extends IEntity {
  // id: IEquatable;
  // schema: SchemaType;
  categoryId?: IEquatable;
  slug?: string;
  href: string;
  alternates: IRoute[];
  breadcrumb: IRouteLink[];
  title?: string;
  abstract?: string;
  description?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  meta?: IMeta;
  images: IImage[];
  [key: string]: any;
}

export type PageProps = {
  layout: ILayout;
  page: IPage;
  params: IRouteParams;
  locales?: string[];
  locale?: string;
  defaultLocale?: string;
};

/*
export interface IPageLayout extends IPage, ILayout { }
*/
