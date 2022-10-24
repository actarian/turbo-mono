import { createContext, useContext, useRef } from 'react';
import { createStore, useStore } from 'zustand';
import { persist, StateStorage } from 'zustand/middleware';

export enum CheckoutStatus {
  None = -1,
  Basket = 0,
  Info = 1,
  Delivery = 2,
  Review = 3,
  Payment = 4,
  Complete = 5,
  Error = 6,
}

interface CheckoutProps {
  status: CheckoutStatus;
}

interface CheckoutState extends CheckoutProps {
  setStatus(status: CheckoutStatus): void;
}

type CheckoutStore = ReturnType<typeof createCheckoutStore>

const createCheckoutStore = ({ storage, ...initialProps }: { storage?: StateStorage } & Partial<CheckoutProps>) => {
  const DEFAULT_PROPS: CheckoutProps = {
    status: CheckoutStatus.None,
  }
  return createStore<CheckoutState>()(
    persist(
      (set, get) => ({
        ...DEFAULT_PROPS,
        ...initialProps,

        setStatus: (status: CheckoutStatus) => set(state => {
          return { status };
        }),

      }),
      {
        name: 'checkout',
        getStorage: () => {
          // console.log('useCheckout.getStorage');
          return storage || localStorage;
        },
      }
    )
  )
}

export const CheckoutContext = createContext<CheckoutStore | null>(null);

type CheckoutProviderProps = React.PropsWithChildren<{ status?: CheckoutStatus, storage?: StateStorage }>;

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

