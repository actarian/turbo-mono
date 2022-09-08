
import { IEquatable, ILocalizedString } from '@core';

export type IMenu = {
  id: IEquatable;
  items: any[];
  schema: string;
};
