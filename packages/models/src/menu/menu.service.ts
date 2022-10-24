import type { IEquatable } from '@websolute/core';
import { getStore } from '@websolute/store';
import { IModelStore } from '../store/store';
import type { IMenu } from './menu';

export async function getMenu(id: IEquatable): Promise<IMenu | undefined> {
  const store = await getStore<IModelStore>();
  const item = await store.menu.findOne(id);
  return item;
}

export async function getMenus(): Promise<IMenu[]> {
  const store = await getStore<IModelStore>();
  const items = await store.menu.findMany();
  return items;
}
