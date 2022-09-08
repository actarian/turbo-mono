
import { IEquatable, ILocalizedString } from '@core';

export type IMarket = {
  id: IEquatable;
  title: string;
  isDefault: boolean;
  schema: string;
  countries?: any[];
  languages?: any[];
};
