"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.pathJoin = exports.fsWatchFile = exports.fsWatch = exports.fsReadJsonDirectory = exports.fsReadDirectory = exports.fsExistOrCreateFolder = exports.fsWriteJson = exports.fsWrite = exports.fsReadJson = exports.fsRead = exports.fsExists = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
async function fsExists(pathname) {
    try {
        await fs.promises.access(pathname);
        return true;
    }
    catch {
        return false;
    }
}
exports.fsExists = fsExists;
async function fsRead(pathname, encoding = 'utf8') {
    try {
        const data = await fs.promises.readFile(pathname, encoding);
        return data || null;
    }
    catch (error) {
        console.log('fsRead', error, pathname);
        return null;
    }
}
exports.fsRead = fsRead;
async function fsReadJson(pathname) {
    try {
        const data = await fsRead(pathname);
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.log('fsReadJson', error, pathname);
        // throw (error);
        return null;
    }
}
exports.fsReadJson = fsReadJson;
async function fsWrite(pathname, data, encoding = 'utf8') {
    try {
        await fs.promises.writeFile(pathname, data, encoding);
    }
    catch (error) {
        console.log('fsWrite', error, pathname);
    }
}
exports.fsWrite = fsWrite;
async function fsWriteJson(pathname, data) {
    try {
        await fsWrite(pathname, JSON.stringify(data, null, 2));
    }
    catch (error) {
        console.log('fsWriteJson', error, pathname);
    }
}
exports.fsWriteJson = fsWriteJson;
async function fsExistOrCreateFolder(pathname) {
    try {
        const exists = fs.existsSync(pathname);
        if (!exists) {
            await fs.promises.mkdir(pathname);
        }
    }
    catch (error) {
        console.log('fsExistOrCreateFolder', error, pathname);
    }
}
exports.fsExistOrCreateFolder = fsExistOrCreateFolder;
async function fsReadDirectory(pathname, extension) {
    const files = await fs.promises.readdir(pathname);
    const items = files.flatMap(async (file) => {
        const filePath = path.join(pathname, file);
        const stat = await fs.promises.stat(filePath);
        if (stat.isDirectory()) {
            return;
        }
        if (extension && path.parse(file).ext !== extension) {
            return;
        }
        const data = await fs.promises.readFile(filePath);
        if (!data) {
            return;
        }
        return {
            name: path.parse(file).name,
            data: data.toString(),
        };
    });
    const items2 = (await Promise.all(items)).filter(Boolean);
    return items2;
}
exports.fsReadDirectory = fsReadDirectory;
async function fsReadJsonDirectory(pathname) {
    try {
        const datas = await fsReadDirectory(pathname, '.json');
        return datas.filter(Boolean).map(x => {
            x.data = JSON.parse(x.data);
            return x;
        });
    }
    catch (error) {
        console.log('fsReadJsonDirectory', error, pathname);
        // throw (error);
        return [];
    }
}
exports.fsReadJsonDirectory = fsReadJsonDirectory;
function fsWatch(pathname, callback, options) {
    const debounced = debounce(callback);
    return fs.watch(pathname, options, debounced);
}
exports.fsWatch = fsWatch;
function fsWatchFile(pathname, callback, options) {
    const debounced = debounce(callback);
    return fs.watchFile(pathname, options, debounced);
}
exports.fsWatchFile = fsWatchFile;
function pathJoin(...paths) {
    return path.join(process.cwd(), ...paths);
}
exports.pathJoin = pathJoin;
function debounce(callback, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, timeout);
    };
}
exports.debounce = debounce;
