import type { IAddressOptions, ICheckoutPartial } from '@websolute/models';
import { createContext, useContext, useRef } from 'react';
import { createStore, useStore } from 'zustand';
import { persist, StateStorage } from 'zustand/middleware';

interface CheckoutProps {
  hydrated: boolean;
  data: IAddressOptions;
  checkout: ICheckoutPartial;
}

interface CheckoutInitialProps {
  data: IAddressOptions;
  checkout?: ICheckoutPartial;
}

interface CheckoutState extends CheckoutProps {
  setCheckout(checkout: ICheckoutPartial): void;
}

type CheckoutStore = ReturnType<typeof createCheckoutStore>;

const createCheckoutStore = ({ storage, ...initialProps }: { storage?: StateStorage } & CheckoutInitialProps) => {
  const DEFAULT_PROPS = {
    hydrated: false,
    checkout: {},
  }
  const useStore = createStore<CheckoutState>()(
    persist(
      (set, get) => ({
        ...DEFAULT_PROPS,
        ...initialProps,
        setCheckout: (checkout: ICheckoutPartial) => set(state => {
          return { checkout };
        }),
      }),
      {
        name: 'checkout',
        getStorage: () => {
          // console.log('useCheckout.getStorage');
          return storage || localStorage;
        },
        onRehydrateStorage: () => () => {
          useStore.setState({ hydrated: true });
          // console.log('onRehydrateStorage', useStore, useStore.getState());
        }
      }
    )
  )
  return useStore;
}

export const CheckoutContext = createContext<CheckoutStore | null>(null);

type CheckoutProviderProps = React.PropsWithChildren<{ data: IAddressOptions, checkout?: ICheckoutPartial, storage?: StateStorage }>;

function CheckoutProvider({ children, ...props }: CheckoutProviderProps) {
  const storeRef = useRef<CheckoutStore>()
  if (!storeRef.current) {
    storeRef.current = createCheckoutStore(props);
  }
  return (
    <CheckoutContext.Provider value={storeRef.current}>
      {children}
    </CheckoutContext.Provider>
  )
}

function useCheckout<T>(
  selector: (state: CheckoutState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(CheckoutContext);
  if (!store) throw new Error('Missing CheckoutContext.Provider in the tree');
  return useStore(store, selector, equalityFn);
}

export { CheckoutProvider, useCheckout };

