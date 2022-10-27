import { IEquatable, IOption, ISchema } from "@websolute/core";

export type IUserLogin = {
  email: string;
  password: string;
  rememberMe: boolean;
}

export type IUserRegister = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  privacy: boolean;
}

export type IUserForgot = {
  email: string;
}

export interface IUser extends ISchema {
  id: IEquatable;
  firstName: string;
  lastName: string;
  email: string;
}

export type IAddress = {
  name: string;
  firstName: string;
  lastName: string;
  address: string,
  streetNumber: string,
  zipCode: string;
  city: string;
  country: IOption;
  region?: IOption,
  province?: IOption,
  email: string;
  phoneNumber: string;
}

export type IAddressOptions = {
  countries: IOption[];
  regions: IOption[];
  provinces: IOption[];
}

export type IUserAddress = Omit<IAddress, 'name'>;
export type ICompanyAddress = Omit<IAddress, 'firstName' | 'lastName'>;
