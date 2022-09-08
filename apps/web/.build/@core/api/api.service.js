"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDelete = exports.apiPatch = exports.apiPut = exports.apiPost = exports.apiGet = exports.apiFetch = void 0;
const http_service_1 = require("@core/http/http.service");
const utils_1 = require("@core/utils");
const LOCAL_API_URL = process.env.NEXT_PUBLIC_URL === 'https://' ? 'http://localhost:3007' : process.env.NEXT_PUBLIC_URL;
const LOCAL_API_BASE = process.env.NEXT_PUBLIC_API || '/api';
// const BEARER = process.env.STORE_BEARER || '7584f15d12972fb1e7695e998dd5e4c754f46c74d06a08e8d76f556adcd045e48cd52bed6faac098784471ac273ee40243194b9cff7eba3c4a768f8f41d2d51959a7f767b943c7f0170f6e5f632db523803c357083bf7a7bf03ee8e0df2d8ce5cd52e0211283b34d7781313da775018a9e950433d2b6faf711c20e5a63b25243';
const defaultApiOptions = {
    // mode: 'cors',
    headers: {
    // Authorization: `Bearer ${BEARER}`,
    },
};
// typeof eval === 'function' ? defaultApiOptions.mode = 'cors' : null;
async function apiFetch(pathname, options = {}) {
    const url = `${LOCAL_API_URL}${LOCAL_API_BASE}${pathname}`;
    const apiOptions = (0, utils_1.merge)({ ...defaultApiOptions }, options);
    // console.log('apiFetch', url, options);
    const apiResponse = await (0, http_service_1.httpFetch)(url, apiOptions);
    return apiResponse;
}
exports.apiFetch = apiFetch;
async function apiGet(url, options = {}) {
    return await apiFetch(url, { ...options, method: 'GET' });
}
exports.apiGet = apiGet;
async function apiPost(url, payload, options = {}) {
    return await apiFetch(url, { ...options, method: 'POST', body: JSON.stringify(payload) });
}
exports.apiPost = apiPost;
async function apiPut(url, payload, options = {}) {
    return await apiFetch(url, { ...options, method: 'PUT', body: JSON.stringify(payload) });
}
exports.apiPut = apiPut;
async function apiPatch(url, payload, options = {}) {
    return await apiFetch(url, { ...options, method: 'PATCH', body: JSON.stringify(payload) });
}
exports.apiPatch = apiPatch;
async function apiDelete(url, options = {}) {
    return await apiFetch(url, { ...options, method: 'DELETE' });
}
exports.apiDelete = apiDelete;
