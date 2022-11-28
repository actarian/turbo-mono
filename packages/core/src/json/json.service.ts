import { FindParams, FindWhereParams, IEntity, IEquatable, IQuerable, toFindParams, Where } from '../entity/entity';

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

  protected decorator_(item: any, params: FindParams = {}): any {
    return item;
  }

  protected newUUID_() {
    return new Date().getTime();
  }

  // old where

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
      });
    }
    return items;
  }

  // where

  protected existsClause_(value: unknown, exists?: boolean): boolean {
    // console.log('existsClause_', value, exists);
    if (typeof exists === 'boolean') {
      return (value != null) === exists;
    }
    return true;
  }

  protected equalsClause_(value: unknown, equals?: unknown): boolean {
    // console.log('equalsClause_', value, equals);
    if (typeof equals !== 'undefined') {
      return value === equals;
    }
    return true;
  }

  protected inClause_(value: unknown, values?: unknown[]): boolean {
    // console.log('inClause_', value, values);
    if (Array.isArray(values)) {
      return values.indexOf(value) !== -1;
    }
    return true;
  }

  protected notInClause_(value: unknown, values?: unknown[]): boolean {
    // console.log('notInClause_', value, values);
    if (Array.isArray(values)) {
      return values.indexOf(value) === -1;
    }
    return true;
  }

  protected likeClause_(value: unknown, query?: string): boolean {
    // console.log('likeClause_', value, query);
    if (typeof query === 'string') {
      return String(value).toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }
    return true;
  }

  protected whereItem_(item: any, where?: Where): boolean {
    let has = true;
    if (typeof where === 'object') {
      Object.entries(where).forEach(([k, v]) => {
        switch (k) {
          case 'and':
            if (Array.isArray(v)) {
              has = v.reduce((p, c) => {
                return p && this.whereItem_(item, c);
              }, has);
            }
            break;
          case 'or':
            if (Array.isArray(v)) {
              has = has && v.reduce((p, c) => {
                return p || this.whereItem_(item, c);
              }, false);
            }
            break;
          default:
            if (Array.isArray(v)) {
              // !!! todo handle Where[];
            } else if (typeof v === 'object') {
              const value = item[k];
              has = has && this.existsClause_(value, v.exists as (boolean | undefined));
              has = has && this.equalsClause_(value, v.equals);
              has = has && this.inClause_(value, v.in as (unknown[] | undefined));
              has = has && this.notInClause_(value, v.not_in as (unknown[] | undefined));
              has = has && this.likeClause_(value, v.like as (string | undefined));
            }
        }
      });
    }
    return has;
  }

  protected whereItems_(items: any[], where?: Where): any[] {
    if (typeof where === 'object') {
      items = items.filter(item => this.whereItem_(item, where));
    }
    return items;
  }

  // ^ where

}
