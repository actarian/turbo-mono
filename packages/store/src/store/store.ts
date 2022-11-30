import { IEntity, IQuerable } from '@websolute/core';

export type Store = {
  [key: string]: IQuerable<IEntity>;
};

export type MockStore = {
  [key: string]: any[];
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

export type IStore = {
  [key: string]: IQuerable<IEntity>;
};
