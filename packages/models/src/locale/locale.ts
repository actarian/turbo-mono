import { IEntity } from '@websolute/core';

export type ILocale = IEntity & {
  id: string;
  // schema?: string;
  title?: string;
  isActive?: boolean;
  isDefault?: boolean;
};
