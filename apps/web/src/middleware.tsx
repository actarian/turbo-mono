
import { routeInterceptor } from '@websolute/models';
import { isApiRequest, isNextRequest, isStaticRequest, registerCollections } from '@websolute/store';
import { NextFetchEvent, NextResponse } from 'next/server';
// import qs from 'qs';
import { COLLECTIONS, PAGES } from 'src/config';

export async function middleware(request: NextRequest, next: NextFetchEvent) {

  registerCollections(COLLECTIONS);

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
    /*
    const url = request.nextUrl.clone();
    request.query = qs.parse(url.search, { depth: 10, arrayLimit: 1000 });
    console.log('request.query', url.search, request.query);
    NextResponse.next();
    */
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
  return await routeInterceptor(request, next, PAGES);
}
