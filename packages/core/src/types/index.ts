import { IncomingMessage, ServerResponse } from 'http';
import { ParsedUrlQuery } from 'querystring';

export type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

export type ValueOf<T> = T[keyof T];

export type PreviewData = string | false | object | undefined;

export type IContextParams = { id: string, market: string, locale: string };

export type StaticPropsContext<
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
> = {
  params: Q
  preview?: boolean
  previewData?: D
  locale?: string
  locales?: string[]
  defaultLocale?: string
};

export type IStaticContext = StaticPropsContext<IContextParams>;

export declare type NextApiRequestCookies = Partial<{
  [key: string]: string;
}>;

export type ServerSidePropsContext<
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
> = {
  req: IncomingMessage & {
    cookies: NextApiRequestCookies
  }
  res: ServerResponse
  params: Q
  query: ParsedUrlQuery
  preview?: boolean
  previewData?: D
  resolvedUrl: string
  locale?: string
  locales?: string[]
  defaultLocale?: string
};

export type IServerSideContext = ServerSidePropsContext<IContextParams>;

export type StateValue = StateValue[] | { [key: string]: StateValue } | number | string | boolean | null | undefined;
