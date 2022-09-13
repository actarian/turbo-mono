// import type { AppStore } from '@config';
import type { IEntity, IQuerable } from '../entity/entity';
import { fsReadJson } from '../fs/fs.service';
import { IStore } from '../store/store';
import MockService from './mock.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

let STORE_: IStore;

export async function getMockStore(): Promise<IStore> {
  if (STORE_) {
    return STORE_;
  }
  // console.log('getMockStore');
  const pathname = path.join(process.cwd(), '.mock', 'store', 'store.json');
  const json = await fsReadJson(pathname);
  const store: { [key: string]: IQuerable<IEntity> } = {};
  if (json != null) {
    Object.keys(json).forEach(key => {
      store[key] = new MockService<any>(json[key].items);
    });
  }
  STORE_ = store as IStore;
  return STORE_;
}