"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpDelete = exports.httpPatch = exports.httpPut = exports.httpPost = exports.httpGet = exports.httpFetch = void 0;
const utils_1 = require("@core/utils");
const defaultOptions = {
    // method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data type must match 'Content-Type' header
};
async function httpFetch(url, options = {}) {
    // console.log('httpFetch', url, options);
    const httpOptions = (0, utils_1.merge)({ ...defaultOptions }, options);
    const httpResponse = await fetch(url, httpOptions);
    if (!httpResponse.ok) {
        throw httpResponse;
    }
    const response = await httpResponse.json();
    return response;
    /*
    // const source = axios.CancelToken.source();
    return await axios[method](url, {
      // cancelToken: source.token,
      headers: {
        Authorization: `Bearer ${BEARER}`
      }
    });
    // return () => source.cancel();
    */
}
exports.httpFetch = httpFetch;
async function httpGet(url, options = {}) {
    return await httpFetch(url, { ...options, method: 'GET' });
}
exports.httpGet = httpGet;
async function httpPost(url, payload, options = {}) {
    return await httpFetch(url, { ...options, method: 'POST', body: JSON.stringify(payload) });
}
exports.httpPost = httpPost;
async function httpPut(url, payload, options = {}) {
    return await httpFetch(url, { ...options, method: 'PUT', body: JSON.stringify(payload) });
}
exports.httpPut = httpPut;
async function httpPatch(url, payload, options = {}) {
    return await httpFetch(url, { ...options, method: 'PATCH', body: JSON.stringify(payload) });
}
exports.httpPatch = httpPatch;
async function httpDelete(url, options = {}) {
    return await httpFetch(url, { ...options, method: 'DELETE' });
}
exports.httpDelete = httpDelete;
