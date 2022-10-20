import { ICartItem } from '@websolute/models';
import { createContext, useContext, useRef } from 'react';
import { createStore, useStore } from 'zustand';
import { persist, StateStorage } from 'zustand/middleware';
import { IDelivery } from '../../sections/checkout/checkout-delivery';
import { IPayment } from '../../sections/checkout/checkout-payment';
import { IReview } from '../../sections/checkout/checkout-review';
import { IUserInfo } from '../../sections/checkout/checkout-user-info';

export type ICheckout = {
  items?: ICartItem[];
  info?: IUserInfo;
  delivery?: IDelivery;
  review?: IReview;
  payment?: IPayment;
}

interface CheckoutProps {
  checkout: ICheckout;
}

interface CheckoutState extends CheckoutProps {
  setCheckout(checkout: ICheckout): void;
}

type CheckoutStore = ReturnType<typeof createCheckoutStore>

const createCheckoutStore = ({ storage, ...initialProps }: { storage?: StateStorage } & Partial<CheckoutProps>) => {
  const DEFAULT_PROPS: CheckoutProps = {
    checkout: {},
  }
  return createStore<CheckoutState>()(
    persist(
      (set, get) => ({
        ...DEFAULT_PROPS,
        ...initialProps,

        setCheckout: (checkout: ICheckout) => set(state => {
          return { checkout };
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

type CheckoutProviderProps = React.PropsWithChildren<{ checkout?: ICheckout, storage?: StateStorage }>;

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

