"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeDelete = exports.storePatch = exports.storePut = exports.storePost = exports.storeGet = exports.storeFetch = void 0;
const entity_1 = require("@core/entity/entity");
const http_service_1 = require("@core/http/http.service");
const utils_1 = require("@core/utils");
// !!! these keys are server-side only
const STORE_API_URL = process.env.STORE_URL;
const STORE_API_BASE = process.env.STORE_API;
const STORE_BEARER = process.env.STORE_BEARER;
const defaultStoreOptions = {
    // mode: 'cors',
    headers: {
        Authorization: `Bearer ${STORE_BEARER}`,
    },
};
async function storeFetch(pathname, options = {}) {
    const url = `${STORE_API_URL}${STORE_API_BASE}${pathname}`;
    const apiOptions = (0, utils_1.merge)({ ...defaultStoreOptions }, options);
    const apiResponse = await (0, http_service_1.httpFetch)(url, apiOptions);
    return apiResponse;
}
exports.storeFetch = storeFetch;
async function storeGet(url, options = {}) {
    return await storeFetch(url, { ...options, method: 'GET' });
}
exports.storeGet = storeGet;
async function storePost(url, payload, options = {}) {
    return await storeFetch(url, { ...options, method: 'POST', body: JSON.stringify(payload) });
}
exports.storePost = storePost;
async function storePut(url, payload, options = {}) {
    return await storeFetch(url, { ...options, method: 'PUT', body: JSON.stringify(payload) });
}
exports.storePut = storePut;
async function storePatch(url, payload, options = {}) {
    return await storeFetch(url, { ...options, method: 'PATCH', body: JSON.stringify(payload) });
}
exports.storePatch = storePatch;
async function storeDelete(url, options = {}) {
    return await storeFetch(url, { ...options, method: 'DELETE' });
}
exports.storeDelete = storeDelete;
class StoreApiService {
    key;
    constructor(key) {
        if (!key) {
            throw new Error('ApiService: key is required');
        }
        this.key = key;
    }
    async findOne(idOrParams) {
        const params = (0, entity_1.toFindParams)(idOrParams);
        const search = this.search_(params);
        // console.log(params, search);
        const url = `/${this.key}/${encodeURIComponent(params.where.id)}${search}`;
        // console.log('ApiService', this.key, 'findOne', url);
        const item = await storeGet(url);
        return this.decorator_(item, params);
    }
    async findMany(params = {}) {
        const search = this.search_(params);
        // const url = `/${this.key}${search}`;
        // console.log('ApiService', this.key, 'findMany', url);
        let items = await storeGet(`/${this.key}${search}`);
        items = this.where_(items, params);
        return items.map(x => this.decorator_(x, params));
    }
    async create(payload) {
        const item = await storePost(`/${this.key}`, payload);
        return this.decorator_(item);
    }
    async update(payload) {
        const item = await storePut(`/${this.key}`, payload);
        return this.decorator_(item);
    }
    async delete(id) {
        const item = await storeDelete(`/${this.key}/${encodeURIComponent(id.toString())}`);
        return this.decorator_(item);
    }
    where_(items, params) {
        const where = params.where;
        if (where) {
            const keys = Object.keys(where);
            items = items.filter(x => {
                return keys.reduce((p, c) => {
                    return p && (x[c] === where[c]);
                }, true);
            });
        }
        return items;
    }
    decorator_(item, params = {}) {
        return item;
    }
    search_(params) {
        const search = {};
        Object.entries(params).forEach(([key, value]) => {
            if (typeof value !== 'object') {
                search[key] = value.toString();
            }
            else {
                switch (key) {
                    case 'where':
                        search[key] = JSON.stringify(value);
                }
            }
        });
        return Object.keys(search).length ? '?' + new URLSearchParams(search).toString() : '';
    }
}
exports.default = StoreApiService;
