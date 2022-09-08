import { IEntity } from '@core';

export interface IMarket extends IEntity {
  id: string;
  // schema?: string;
  title?: string;
  isDefault?: boolean;
  countries?: string[];
  languages?: string[];
}
