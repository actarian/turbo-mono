
import { IEquatable, ILocalizedString } from '@websolute/core';

export type IList = {
  id: IEquatable;
  name: string;
  key: string;
  listId: null | IEquatable;
  schema: string;
};
