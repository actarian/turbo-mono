import { IEntity } from '@websolute/core';

export type IMarket = IEntity & {
  id: string;
  // schema?: string;
  title?: string;
  isDefault?: boolean;
  countries?: string[];
  languages?: string[];
};
