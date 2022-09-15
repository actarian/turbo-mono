import { IncomingMessage, ServerResponse } from 'http';
import { ParsedUrlQuery } from 'querystring';

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
}

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
}

export type IServerSideContext = ServerSidePropsContext<IContextParams>;

export function getIsDevelopment(): boolean {
  return process && process.env.NODE_ENV === 'development';
}

export const isDevelopment = getIsDevelopment();

export const isBrowser = typeof window !== 'undefined';

export function asStaticProps(props: any): any {
  return JSON.parse(JSON.stringify(props));
}

export async function awaitAll(array: any, callback: (item: any, index: number) => Promise<any>): Promise<any[]> {
  const promises = array.map(callback);
  return await Promise.all(promises);
}

export function merge(target: any, source: any): any {
  // override null values
  if (source === null) {
    return source;
  }
  // assign new values
  if (!target) {
    if (source && typeof source === 'object') {
      return Object.assign({}, source);
    } else {
      return source;
    }
  }
  // merge objects
  if (source && typeof source === 'object') {
    Object.keys(source).forEach(key => {
      const value = source[key];
      if (typeof value === 'object' && !Array.isArray(value)) {
        target[key] = merge(target[key], value);
      } else {
        target[key] = value;
      }
    });
  }
  return target;
}

export type StateValue = StateValue[] | { [key: string]: StateValue } | number | string | boolean | null | undefined;

export function deepCopy<T>(source: T): T;
// export function deepCopy(source: any): any {
export function deepCopy(source: StateValue): StateValue {
  if (Array.isArray(source)) {
    return source.map(x => deepCopy(x));
  } else if (source && typeof source === 'object') {
    const copy: { [key: string]: any } = {};
    Object.keys(source).forEach(key => {
      copy[key] = deepCopy(source[key]);
    });
    return copy;
  } else {
    return source;
  }
}

export function className(...args: ({ [key: string]: boolean } | string)[]): string {
  return args.map(x => (
    typeof x === 'object' ?
      Object.keys(x).filter(key => x[key]).join(' ') :
      x.toString()
  )).join(' ');
}
