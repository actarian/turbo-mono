import { IEntity } from '@core';

export interface ILocale extends IEntity {
  id: string;
  // schema?: string;
  title?: string;
  isDefault?: boolean;
}
