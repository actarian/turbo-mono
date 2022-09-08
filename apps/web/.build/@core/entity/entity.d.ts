export declare type IEquatable = string | number;
export declare type ILocalizedString = {
    [key: string]: string;
};
export interface ISchema {
    id: IEquatable;
    schema: string;
}
export interface IEntity extends ISchema {
    [key: string]: any;
}
export interface INamedEntity extends IEntity {
    name: string | ILocalizedString;
}
export interface IQuerable<T extends IEntity> {
    findOne(idOrParams: IEquatable | FindWhereParams): Promise<T | null>;
    findMany(params?: FindParams): Promise<T[]>;
    create(payload: T): Promise<T>;
    update(payload: T): Promise<T>;
    delete(id: IEquatable): Promise<T | null>;
}
export declare type FindParams = {
    where?: {
        [key: string]: any;
    };
    market?: string;
    locale?: string;
};
export declare type FindWhereParams = {
    where: {
        [key: string]: any;
    };
    market?: string;
    locale?: string;
};
export declare function toFindParams(idOrParams: IEquatable | FindWhereParams): FindWhereParams;
//# sourceMappingURL=entity.d.ts.map