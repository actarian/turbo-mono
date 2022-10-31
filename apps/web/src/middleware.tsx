
import { routeInterceptor } from '@websolute/models';
import { isApiRequest, isStaticRequest } from '@websolute/store';
import { NextFetchEvent, NextRequest } from 'next/server';
import { PAGES } from 'src/config';

export async function middleware(request: NextRequest, next: NextFetchEvent) {

  /*
   * Skipping static requests
  */
  if (isStaticRequest(request)) {
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
