"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMockApi = exports.resolveMockApi = void 0;
const fs_service_1 = require("@core/fs/fs.service");
async function resolveMockApi(api) {
    const pathname = (0, fs_service_1.pathJoin)(`${api}.json`);
    return await (0, fs_service_1.fsRead)(pathname);
}
exports.resolveMockApi = resolveMockApi;
async function parseMockApi(api) {
    const pathname = (0, fs_service_1.pathJoin)(`${api}.json`);
    return await (0, fs_service_1.fsReadJson)(pathname);
}
exports.parseMockApi = parseMockApi;
