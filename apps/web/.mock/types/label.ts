
import { IEquatable, ILocalizedString } from '@websolute/core';

export type ILabel = {
  id: IEquatable;
  text: ILocalizedString;
  schema: string;
};
