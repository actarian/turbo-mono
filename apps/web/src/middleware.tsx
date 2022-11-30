
import { qsDeserialize } from '@websolute/core';
import { routeInterceptor } from '@websolute/models';
import { isApiRequest, isNextRequest, isStaticRequest } from '@websolute/store';
import { NextFetchEvent, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, next: NextFetchEvent) {
  /*
   * Skipping static requests
  */
  if (isStaticRequest(request)) {
    NextResponse.next();
    return;
  }

  /*
   * Checking for next private requests
  */
  if (isNextRequest(request)) {
    NextResponse.next();
    return;
  }

  if (isApiRequest(request)) {
    const url = request.nextUrl.clone();
    request.query = qsDeserialize(url.search, { depth: 10, arrayLimit: 1000 });
    // console.log('request.query', url.search, request.query);
    NextResponse.next();
    return;
    /*
     * Checking for mock interceptor for api requests
    */
    /*
    return await mockInterceptor(request, next);
    */
  }

  /*
    * Resolving CMS routes
  */
  return await routeInterceptor(request, next);
}
