import type { IEntity, IQuerable } from '@core';

export type Store = {
  [key: string]: IQuerable<IEntity>;
};

export type CollectionDescription = {
  singularName: string;
  pluralName: string;
  displayName: string;
};

export type SerializedCollection = {
  singularName: string;
  pluralName: string;
  displayName: string;
  items: any[];
};

export type SerializedStore = {
  [key: string]: SerializedCollection;
};

export enum StoreStrategy {
  Api = 'api',
  Data = 'data',
  Mock = 'mock',
}

function getStoreStrategy(): StoreStrategy {
  let storeStrategy = StoreStrategy.Mock;
  if (process && process.env.STORE_STRATEGY) {
    storeStrategy = process.env.STORE_STRATEGY as StoreStrategy;
  }
  return storeStrategy;
}

export const storeStrategy: StoreStrategy = getStoreStrategy();
