import { IEquatable, ISchema } from "@websolute/core";

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
