"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.className = exports.deepCopy = exports.merge = exports.awaitAll = exports.asStaticProps = exports.isBrowser = exports.isDevelopment = exports.getIsDevelopment = void 0;
function getIsDevelopment() {
    return process && process.env.NODE_ENV === 'development';
}
exports.getIsDevelopment = getIsDevelopment;
exports.isDevelopment = getIsDevelopment();
exports.isBrowser = typeof window !== 'undefined';
function asStaticProps(props) {
    return JSON.parse(JSON.stringify(props));
}
exports.asStaticProps = asStaticProps;
async function awaitAll(array, callback) {
    const promises = array.map(callback);
    return await Promise.all(promises);
}
exports.awaitAll = awaitAll;
function merge(target, source) {
    // override null values
    if (source === null) {
        return source;
    }
    // assign new values
    if (!target) {
        if (source && typeof source === 'object') {
            return Object.assign({}, source);
        }
        else {
            return source;
        }
    }
    // merge objects
    if (source && typeof source === 'object') {
        Object.keys(source).forEach(key => {
            const value = source[key];
            if (typeof value === 'object' && !Array.isArray(value)) {
                target[key] = merge(target[key], value);
            }
            else {
                target[key] = value;
            }
        });
    }
    return target;
}
exports.merge = merge;
// export function deepCopy(source: any): any {
function deepCopy(source) {
    if (Array.isArray(source)) {
        return source.map(x => deepCopy(x));
    }
    else if (source && typeof source === 'object') {
        const copy = {};
        Object.keys(source).forEach(key => {
            copy[key] = deepCopy(source[key]);
        });
        return copy;
    }
    else {
        return source;
    }
}
exports.deepCopy = deepCopy;
function className(...args) {
    return args.map(x => (typeof x === 'object' ?
        Object.keys(x).filter(key => x[key]).join(' ') :
        x.toString())).join(' ');
}
exports.className = className;
