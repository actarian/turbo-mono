
import { IEquatable, ILocalizedString } from '@core';

export type ILocale = {
  id: IEquatable;
  title: string;
  isDefault: boolean;
  schema: string;
};
