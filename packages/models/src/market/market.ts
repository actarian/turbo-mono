import { IEntity } from '@websolute/core';

export type IMarket = IEntity & {
  id: string;
  title?: string;
  isActive?: boolean;
  isDefault?: boolean;
  countries?: string[];
  languages?: string[];
  defaultLanguage?: string;
};
