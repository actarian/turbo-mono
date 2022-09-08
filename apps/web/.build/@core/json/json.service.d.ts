import type { FindParams, FindWhereParams, IEntity, IEquatable, IQuerable } from '@core';
export default class JsonService<T extends IEntity> implements IQuerable<IEntity> {
    items: T[];
    constructor(items: T[]);
    findOne(idOrParams: IEquatable | FindWhereParams): Promise<T | null>;
    findMany(params?: FindParams): Promise<T[]>;
    create(payload: any): Promise<T>;
    update(payload: any): Promise<T>;
    delete(id: IEquatable): Promise<T | null>;
    protected where_(items: any[], params: FindParams): any[];
    protected decorator_(item: any, params?: FindParams): any;
    protected newUUID_(): number;
}
//# sourceMappingURL=json.service.d.ts.map