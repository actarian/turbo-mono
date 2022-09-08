import type { IEquatable } from '@core';
import { getStore } from '@core/store/store.service';
import type { IMenu } from './menu';

export async function getMenu(id: IEquatable): Promise<IMenu | null> {
  const store = await getStore();
  const item = await store.menu.findOne(id);
  return item;
}

export async function getMenus(): Promise<IMenu[]> {
  const store = await getStore();
  const items = await store.menu.findMany();
  return items;
}
