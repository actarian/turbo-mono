
import { routeInterceptor } from '@websolute/models';
import { isApiRequest, isNextRequest, isStaticRequest, registerStorePages } from '@websolute/store';
import { NextFetchEvent, NextRequest } from 'next/server';
import { PAGES } from 'src/config';

export async function middleware(request: NextRequest, next: NextFetchEvent) {

  registerStorePages(PAGES);

  /*
   * Skipping static requests
  */
  if (isStaticRequest(request)) {
    return;
  }

  /*
   * Checking for next private requests
  */
  if (isNextRequest(request)) {
    return;
  }

  /*
   * Checking for mock interceptor for api requests
  */
  if (isApiRequest(request)) {
    return;
    /*
    return await mockInterceptor(request, next);
    */
  }

  /*
    * Resolving CMS routes
  */
  return await routeInterceptor(request, next, PAGES);
}
