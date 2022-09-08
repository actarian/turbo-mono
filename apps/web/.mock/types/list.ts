
import { IEquatable, ILocalizedString } from '@core';

export type IList = {
  id: IEquatable;
  name: string;
  key: string;
  listId: null | IEquatable;
  schema: string;
};
