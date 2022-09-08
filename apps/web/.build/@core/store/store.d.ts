import type { IEntity, IQuerable } from '@core';
export declare type Store = {
    [key: string]: IQuerable<IEntity>;
};
export declare type CollectionDescription = {
    singularName: string;
    pluralName: string;
    displayName: string;
};
export declare type SerializedCollection = {
    singularName: string;
    pluralName: string;
    displayName: string;
    items: any[];
};
export declare type SerializedStore = {
    [key: string]: SerializedCollection;
};
export declare enum StoreStrategy {
    Api = "api",
    Data = "data",
    Mock = "mock"
}
export declare const storeStrategy: StoreStrategy;
//# sourceMappingURL=store.d.ts.map