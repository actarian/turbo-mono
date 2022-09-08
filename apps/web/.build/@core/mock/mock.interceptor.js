"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockInterceptor = void 0;
const middleware_service_1 = require("@core/middleware/middleware.service");
const store_1 = require("@core/store/store");
const server_1 = require("next/server");
async function mockInterceptor(request, next) {
    if (store_1.storeStrategy !== store_1.StoreStrategy.Mock) {
        return;
    }
    if (!(0, middleware_service_1.isExistingApiRoute)(request)) {
        const url = request.nextUrl.clone();
        url.pathname = `/api/_mock/${encodeURIComponent(url.pathname)}`;
        const response = server_1.NextResponse.rewrite(url);
        return response;
    }
    return;
}
exports.mockInterceptor = mockInterceptor;
