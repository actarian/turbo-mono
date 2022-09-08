
import { IEquatable, ILocalizedString } from '@core';

export type ILabel = {
  id: IEquatable;
  text: ILocalizedString;
  schema: string;
};
