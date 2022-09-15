import type { IEntity, IQuerable } from '../entity/entity';
import { IStore } from '../store/store';
import StoreApiService from './store-api.service';

let STORE_: IStore;

export async function getApiStore(PAGES: { [key: string]: string }): Promise<IStore> {
  if (STORE_) {
    return STORE_;
  }
  const store: { [key: string]: IQuerable<IEntity> } = {};
  const keys = Object.keys(PAGES);
  const routes = [...keys, 'page', 'route', 'country', 'label', 'locale', 'market', 'menu'];
  routes.forEach(key => {
    store[key] = new StoreApiService<any>(key);
  });
  STORE_ = store as IStore;
  return STORE_;
}
