import { apiPost } from '@websolute/core';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { IRoute } from './route';
import { resolveRoute } from './route.service';

export async function routeInterceptor(request: NextRequest, next: NextFetchEvent, PAGES: { [key: string]: string }) {
  let url = request.nextUrl;
  let route: IRoute;
  // console.log('url', url.pathname, PAGES);
  try {
    route = await apiPost(`/route`, { pathname: url.pathname });
    // console.log('route', route);
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
  const resolvedPathname = resolveRoute(route, PAGES);
  console.log('resolvedPathname', resolvedPathname);
  url.pathname = resolvedPathname;
  // console.log('routeInterceptor.route', route.pageSchema, route.pageId, route.marketId, route.localeId);
  const response = NextResponse.rewrite(url);
  return response;
}
