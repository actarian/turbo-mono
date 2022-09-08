"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeInterceptor = void 0;
const api_service_1 = require("@core/api/api.service");
const server_1 = require("next/server");
require("./route");
const route_service_1 = require("./route.service");
async function routeInterceptor(request, next) {
    let url = request.nextUrl;
    let route;
    // const pathname = url.pathname;
    // const { market, language, pathname } = decompose(url.pathname);
    try {
        route = await (0, api_service_1.apiPost)(`/route`, { pathname: url.pathname });
        if (!route) {
            console.log('routeInterceptor.route.notfound', url.pathname);
            return;
        }
    }
    catch (error) {
        console.log('routeInterceptor.error', url.pathname, error, error.url, error.status, error.statusText);
        return;
    }
    // console.log('routeInterceptor.route.found', url.pathname, '->', route);
    url = request.nextUrl.clone();
    const resolvedPathname = (0, route_service_1.resolveRoute)(route);
    // console.log('resolvedPathname', resolvedPathname);
    url.pathname = resolvedPathname;
    // url.pathname = `/${market}/${language}${resolvedPathname}`;
    // url.pathname = url.locale ? `/${url.locale}${resolvedPathname}` : resolvedPathname;
    // url.searchParams.set('market', market);
    // url.searchParams.set('language', language);
    // console.log('routeInterceptor.route', route.pageSchema, route.pageId, route.marketId, route.localeId);
    const response = server_1.NextResponse.rewrite(url);
    return response;
}
exports.routeInterceptor = routeInterceptor;
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
