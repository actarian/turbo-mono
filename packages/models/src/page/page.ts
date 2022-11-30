import { IEntity } from '@websolute/core';
import { ILayout } from '../layout/layout';
import { IMedia } from '../media/media';
import { IRoute, IRouteLink, IRouteParams } from '../route/route';

export type IMeta = {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
};

export type IImage = {
  url: string;
  type?: string;
  alt?: string;
  title?: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type IPage = IEntity & {
  category?: string;
  slug?: string;
  href: string;
  alternates: IRoute[];
  breadcrumb: IRouteLink[];
  parentRoute?: IRouteLink;
  title?: string;
  abstract?: string;
  description?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  meta?: IMeta;
  media?: IMedia;
  [key: string]: any;
};

export type PageProps<T extends IPage = IPage> = {
  layout: ILayout;
  page: T;
  params: IRouteParams;
  locales?: string[];
  locale?: string;
  defaultLocale?: string;
};

/*
export type IPageLayout = IPage & ILayout & { }
*/
