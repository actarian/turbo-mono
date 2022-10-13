import type { FindParams, FindWhereParams, IEntity, IEquatable, IQuerable } from '../entity/entity';
import { toFindParams } from '../entity/entity';

export default class JsonService<T extends IEntity> implements IQuerable<IEntity> {
  items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  findOne(idOrParams: IEquatable | FindWhereParams): Promise<T | undefined> {
    return new Promise<T | undefined>((resolve, reject) => {
      const params = toFindParams(idOrParams);
      const items = this.where_(this.items, params);
      if (items.length > 0) {
        resolve(this.decorator_(items[0], params));
      } else {
        resolve(undefined);
      }
    });
  }

  findMany(params: FindParams = {}): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
      let items = this.items;
      items = this.where_(items, params);
      resolve(items.map(x => this.decorator_(x, params)));
    });
  }

  create(payload: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      try {
        const item = { ...payload, id: this.newUUID_() };
        this.items.push(item);
        resolve(item);
      } catch (error) {
        reject(error);
      }
    });
  }

  update(payload: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
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

  delete(id: IEquatable): Promise<T | undefined> {
    return new Promise<T | undefined>((resolve, reject) => {
      const index = this.items.reduce((p, c, i) => {
        return c.id === id ? i : p;
      }, -1);
      if (index !== -1) {
        const item = this.items[index];
        this.items.splice(index, 1);
        return resolve(item);
      }
      resolve(undefined);
    });
  }

  protected where_(items: any[], params: FindParams): any[] {
    const where = params.where;
    if (where) {
      const keys = Object.keys(where);
      items = items.filter(x => {
        return keys.reduce<boolean>((p, c) => {
          const whereValue = where[c];
          const shouldMatch = Array.isArray(whereValue) ? whereValue : [whereValue];
          // console.log('key', c, 'value', x[c], 'shouldMatch', shouldMatch);
          return p && (shouldMatch.indexOf(x[c]) !== -1);
        }, true);
      })
    }
    return items;
  }

  protected decorator_(item: any, params: FindParams = {}): any {
    return item;
  }

  protected newUUID_() {
    return new Date().getTime();
  }
}
