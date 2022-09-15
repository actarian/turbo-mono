import type { NextRequest } from 'next/server';

/*
import { NextApiRequest, NextApiResponse } from 'next';

export type RouteMiddleware = (request: NextRequest, event: NextFetchEvent) => Promise<Response | undefined> | Response | undefined;

export type ApiMiddleware = (request: NextApiRequest, response: NextApiResponse) => unknown;

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export default function useApiMiddleware(middleware) {
  return (request, response) => new Promise((resolve, reject) => {
    middleware(request, response, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  })
}

 * @name withMiddleware
 * @description combine multiple middleware before handling your API endpoint
 * @param middlewares
export function withApiMiddleware(...middlewares: ApiMiddleware[]) {

  return async function withMiddlewareHandler(request: NextApiRequest, response: NextApiResponse) {

    async function evaluateHandler(middleware: ApiMiddleware, innerMiddleware?: ApiMiddleware | undefined) {
      // return early when the request has
      // been ended by a previous middleware
      if (response.headersSent) {
        return;
      }
      if (typeof middleware === 'function') {
        const handler = await middleware(request, response);
        if (typeof handler === 'function') {
          if (innerMiddleware) {
            await handler(innerMiddleware);
            const index = middlewares.indexOf(innerMiddleware);
            // remove inner middleware
            if (index >= 0) {
              middlewares.splice(index, 1);
            }
          } else {
            await handler();
          }
        }
      }
    }
    for (let index = 0; index < middlewares.length; index++) {
      const middleware = middlewares[index];
      const nextMiddleware = middlewares[index + 1];
      await evaluateHandler(middleware, nextMiddleware);
    }
  };
}
*/

export function isStaticRequest(request: NextRequest) {
  const url = request.nextUrl;
  const isStatic = url.pathname.indexOf('.') !== -1;
  return isStatic;
}

export function isApiRequest(request: NextRequest) {
  const url = request.nextUrl;
  const isApi = url.pathname.indexOf('/api') === 0;
  return isApi;
}

export function isExistingApiRoute(request: NextRequest) {
  const rx = /^\/api\/(route|product|(product\/(.+))|(menu\/(.+)))\/?$/gm;
  const url = request.nextUrl;
  const isApi = url.pathname.indexOf('/api') === 0;
  const isExisting = isApi && rx.test(url.pathname);
  return isExisting;
}
