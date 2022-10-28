// export { fsExistOrCreateFolder, fsExists, fsRead, fsReadDirectory, fsReadJson, fsReadJsonDirectory, fsWatch, fsWrite, fsWriteJson, pathJoin } from './fs/fs.service';
export { isApiRequest, isExistingApiRoute, isStaticRequest } from './middleware/middleware.service';
export { parseMockApi, resolveMockApi } from './mock/mock.api';
// export { MockBuildAndWatch } from './mock/mock.build';
export { mockInterceptor } from './mock/mock.interceptor';
export * from './mock/mock.service';
export { getMockStore } from './mock/mock.store';
export * from './store-api/store-api.service';
export { getApiStore } from './store-api/store-api.store';
export { StoreStrategy, storeStrategy } from './store/store';
export type { CollectionDescription, SerializedCollection, SerializedStore, Store } from './store/store';
export { getStore } from './store/store.service';

