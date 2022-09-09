
import { IEquatable, ILocalizedString } from '@websolute/core';

export type IMenu = {
  id: IEquatable;
  items: any[];
  schema: string;
};
