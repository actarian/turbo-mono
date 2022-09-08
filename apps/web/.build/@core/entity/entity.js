"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFindParams = void 0;
function toFindParams(idOrParams) {
    if (typeof idOrParams === 'number' || typeof idOrParams === 'string') {
        return { where: { id: idOrParams } };
    }
    else {
        return idOrParams;
    }
}
exports.toFindParams = toFindParams;
