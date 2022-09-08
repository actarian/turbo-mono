"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("@core/entity/entity");
class JsonService {
    items;
    constructor(items) {
        this.items = items;
    }
    findOne(idOrParams) {
        return new Promise((resolve, reject) => {
            const params = (0, entity_1.toFindParams)(idOrParams);
            const items = this.where_(this.items, params);
            if (items.length > 0) {
                resolve(this.decorator_(items[0], params));
            }
            else {
                resolve(null);
            }
        });
    }
    findMany(params = {}) {
        return new Promise((resolve, reject) => {
            let items = this.items;
            items = this.where_(items, params);
            resolve(items.map(x => this.decorator_(x, params)));
        });
    }
    create(payload) {
        return new Promise((resolve, reject) => {
            try {
                const item = { ...payload, id: this.newUUID_() };
                this.items.push(item);
                resolve(item);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    update(payload) {
        return new Promise((resolve, reject) => {
            const index = this.items.reduce((p, c, i) => {
                return c.id === payload.id ? i : p;
            }, -1);
            if (index !== -1) {
                const item = { ...this.items[index], payload };
                this.items[index] = item;
                return resolve(item);
            }
            reject();
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            const index = this.items.reduce((p, c, i) => {
                return c.id === id ? i : p;
            }, -1);
            if (index !== -1) {
                const item = this.items[index];
                this.items.splice(index, 1);
                return resolve(item);
            }
            resolve(null);
        });
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
    newUUID_() {
        return new Date().getTime();
    }
}
exports.default = JsonService;
