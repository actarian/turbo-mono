import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { isExistingApiRoute } from '../middleware/middleware.service';
import { StoreStrategy, storeStrategy } from '../store/store';

export async function mockInterceptor(request: NextRequest, next: NextFetchEvent) {
  if (storeStrategy !== StoreStrategy.Mock) {
    return;
  }
  if (!isExistingApiRoute(request)) {
    const url = request.nextUrl.clone();
    url.pathname = `/api/_mock/${encodeURIComponent(url.pathname)}`;
    const response = NextResponse.rewrite(url);
    return response;
  }
  return;
}
