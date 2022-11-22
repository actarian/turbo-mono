import { ISchema } from '@websolute/core';
import { ICartAddItem, ICartItem } from '@websolute/models';
import { createContext, useContext, useRef } from 'react';
import { createStore, useStore } from 'zustand';
import { persist, StateStorage } from 'zustand/middleware';

type CartProps = {
  hydrated: boolean;
  items: ICartItem[];
};

type CartActions = {
  count(): number;
  has(item: ISchema): boolean;
  find(item: ISchema): ICartItem | undefined;
  add(item: ICartAddItem, qty?: number): void;
  remove(item: ISchema): number;
  update(item: ICartItem): void;
  clear(): void;
};

type CartState = CartProps & {
  actions: CartActions;
};

type CartStore = ReturnType<typeof createCartStore>;

const createCartStore = ({ storage, ...initialProps }: { storage?: StateStorage } & Partial<CartProps>) => {
  const DEFAULT_PROPS: CartProps = {
    hydrated: false,
    items: [],
  };
  const useStore = createStore<CartState>()(
    persist(
      (set, get) => ({
        ...DEFAULT_PROPS,
        ...initialProps,
        actions: {
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
        },
      }),
      {
        name: 'cart',
        getStorage: () => {
          // console.log('useCart.getStorage');
          return storage || localStorage;
        },
        onRehydrateStorage: () => () => {
          useStore.setState({ hydrated: true });
          // console.log('onRehydrateStorage', useStore, useStore.getState());
        },
        merge: (persistedState: any, currentState: CartState) => {
          if (persistedState.items && Array.isArray(persistedState.items)) {
            currentState.items = [...persistedState.items];
          }
          currentState.hydrated = true;
          return currentState;
        },
      }
    )
  );
  return useStore;
};

export const CartContext = createContext<CartStore | null>(null);

type CartProviderProps = React.PropsWithChildren<{ items?: ICartItem[], storage?: StateStorage }>;

function CartProvider({ children, ...props }: CartProviderProps) {
  const storeRef = useRef<CartStore>();
  if (!storeRef.current) {
    storeRef.current = createCartStore(props);
  }
  return (
    <CartContext.Provider value={storeRef.current}>
      {children}
    </CartContext.Provider>
  );
}

function useCart<T>(
  selector: (state: CartState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(CartContext);
  if (!store) throw new Error('Missing CartContext.Provider in the tree');
  return useStore(store, selector, equalityFn);
}

export { CartProvider, useCart };

