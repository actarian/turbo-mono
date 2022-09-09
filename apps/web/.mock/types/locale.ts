
import { IEquatable, ILocalizedString } from '@websolute/core';

export type ILocale = {
  id: IEquatable;
  title: string;
  isDefault: boolean;
  schema: string;
};
