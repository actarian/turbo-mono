import { IOption } from '@websolute/core';
import { ICartItem } from '../cart/cart';
import { IMedia } from '../media/media';
import { ICompanyAddress, IUser, IUserAddress } from '../user/user';

export type ICheckout = {
  items: ICheckoutItem[];
  user?: Partial<IUser>;
  shippingAddress: IUserAddress;
  hasInvoice?: boolean;
  hasBilling?: boolean;
  billingAddress?: IUserAddress;
  delivery: ICheckoutDelivery;
  store: ICheckoutStore;
  discounts: ICheckoutDiscount[];
  payment: ICheckoutPayment;
  subTotal: number;
  subTotalFull: number;
  taxes: number;
  total: number;
};

export type ICheckoutPartial = Partial<ICheckout>;

export type ICheckoutItem = ICartItem & {
  fullPrice: number;
};

export type ICheckoutInfo = {
  user?: Partial<IUser>;
  shippingAddress: IUserAddress;
  hasInvoice?: boolean;
  hasBilling?: boolean;
  billingAddress?: IUserAddress;
};

export type ICheckoutDelivery = IOption & {
  abstract: string;
  price: number;
  fullPrice: number;
};

export type ICheckoutStore = Partial<ICompanyAddress> & IOption & {
  category?: IOption;
  timetable?: string[];
  position?: {
    latitude: number;
    longitude: number;
  };
  distance?: number;
  rank?: number;
};

export type ICheckoutDiscount = IOption & {
  abstract?: string;
  price: number;
  validFrom: Date | string;
  validTo: Date | string;
};

export type ICheckoutPayment = IOption & {
  abstract?: string;
  media?: IMedia;
};

