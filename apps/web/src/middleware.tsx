
import { PAGES } from '@config';
import { isApiRequest, isStaticRequest, mockInterceptor, routeInterceptor } from '@websolute/core';
import type { NextFetchEvent, NextRequest } from 'next/server';

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
    return await mockInterceptor(request, next);
  }

  /*
    * Resolving CMS routes
  */
  return await routeInterceptor(request, next, PAGES);
}
