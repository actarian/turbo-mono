import { ISchema } from '@websolute/core';
import type { ICartAddItem, ICartItem } from '@websolute/models';
import create, { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ICartStore {
  items: ICartItem[];
  setItems(items: ICartItem[]): void;
  count(): number;
  has(item: ISchema): boolean;
  find(item: ISchema): ICartItem | undefined;
  add(item: ICartAddItem, qty?: number): void;
  remove(item: ISchema): number;
  update(item: ICartItem): void;
  clear(): void;
}

const cartStore: IStateCreator<ICartStore> = (set, get) => ({
  items: [],
  setItems: (items: ICartItem[]) => set(state => ({ items })),
  count: () => {
    return get().items.length;
  },
  has: (item: ISchema) => {
    return get().items.find(x => x.schema === item.schema && x.id === item.id) != null;
  },
  find: (item: ISchema) => {
    return get().items.find(x => x.schema === item.schema && x.id === item.id);
  },
  add: (item: ICartItem, qty: number = 1) => set(state => {
    const items = state.items.slice();
    const index = items.reduce((p, c, i) => (c.schema === item.schema && c.id === item.id) ? i : p, -1);
    if (index === -1) {
      items.push({ ...item, qty });
    }
    return { items };
  }),
  remove: (item: ISchema) => {
    let count = 0;
    set(state => {
      const items = state.items.slice();
      const index = items.reduce((p, c, i) => (c.schema === item.schema && c.id === item.id) ? i : p, -1);
      if (index !== -1) {
        items.splice(index, 1);
      }
      count = items.length;
      return { items };
    });
    return count;
  },
  update: (item: ICartItem) => set(state => {
    const items = state.items.slice();
    const index = items.reduce((p, c, i) => (c.schema === item.schema && c.id === item.id) ? i : p, -1);
    if (index !== -1) {
      items[index] = item;
    }
    return { items };
  }),
  clear: () => set(state => ({ items: [] })),
});

export type IStateCreator<T extends object> = StateCreator<T, any, [], T>;

export const useCart = create<ICartStore>()(
  persist(
    cartStore,
    {
      name: 'cart',
      getStorage: () => {
        // console.log('useCart.getStorage');
        return localStorage;
      },
    }
  )
);

/*
const PERSIST = true;

export const useCart =
  PERSIST ?
    create<ICartStore>()(persist(cartStore, { name: 'cart' })) :
    create<ICartStore>(cartStore as StateCreator<any>);
*/
