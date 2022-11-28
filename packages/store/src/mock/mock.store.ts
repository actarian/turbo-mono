import { IEntity, IQuerable } from '@websolute/core';
import { fsReadJson } from '../fs/fs.service';
import { IStore } from '../store/store';
import { MockService } from './mock.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

let STORE_: IStore;

export async function getMockStore<T extends IStore>(): Promise<T> {
  // console.log('getMockStore', STORE_ ? Object.keys(STORE_) : null);
  // console.log('getMockStore.process.cwd', process.cwd());
  if (STORE_) {
    return STORE_ as T;
  }
  console.count('MockStore.getMockStore');
  const pathname = path.join(process.cwd(), '.mock', 'store', 'store.json');
  // console.log('getMockStore.pathname', pathname);
  const json = await fsReadJson(pathname);
  const store: { [key: string]: IQuerable<IEntity> } = {};
  if (json != null) {
    Object.keys(json).forEach(key => {
      store[key] = new MockService<any>(json[key].items);
    });
  }
  STORE_ = store;
  return STORE_ as T;
}
