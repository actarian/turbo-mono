import { apiPost } from '@core/api/api.service';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { IRoute } from './route';
import { resolveRoute } from './route.service';

export async function routeInterceptor(request: NextRequest, next: NextFetchEvent) {
  let url = request.nextUrl;
  let route: IRoute;
  // const pathname = url.pathname;
  // const { market, language, pathname } = decompose(url.pathname);
  try {
    route = await apiPost(`/route`, { pathname: url.pathname });
    if (!route) {
      console.log('routeInterceptor.route.notfound', url.pathname);
      return;
    }
  } catch (error: any) {

    console.log('routeInterceptor.error', url.pathname, error, error.url, error.status, error.statusText);
    return;
  }
  // console.log('routeInterceptor.route.found', url.pathname, '->', route);
  url = request.nextUrl.clone();
  const resolvedPathname = resolveRoute(route);
  // console.log('resolvedPathname', resolvedPathname);
  url.pathname = resolvedPathname;
  // url.pathname = `/${market}/${language}${resolvedPathname}`;
  // url.pathname = url.locale ? `/${url.locale}${resolvedPathname}` : resolvedPathname;
  // url.searchParams.set('market', market);
  // url.searchParams.set('language', language);
  // console.log('routeInterceptor.route', route.pageSchema, route.pageId, route.marketId, route.localeId);
  const response = NextResponse.rewrite(url);
  return response;
}

/*
const defaultMarket = 'ww';
const defaultLanguage = 'en';
const markets = ['ww', 'eu'];
const languages = ['en', 'it', 'fr'];

function decompose(pathname: string) {
  const components = pathname.split('/');
  let market = components.length > 1 ? components[1] : null;
  if (markets.indexOf(market) !== -1) {
    components.splice(1, 1);
  } else {
    market = defaultMarket;
  }
  let language = components.length > 1 ? components[1] : null;
  if (languages.indexOf(language) !== -1) {
    components.splice(1, 1);
  } else {
    language = defaultLanguage;
  }
  pathname = components.join('/');
  if (pathname.length === 0) {
    pathname = '/';
  }
  return { market, language, pathname };
}
*/
