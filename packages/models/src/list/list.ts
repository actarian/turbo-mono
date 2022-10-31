import { IEquatable, INamedEntity } from '@websolute/core';

export type IList = INamedEntity & {
  key?: string;
  listId?: IEquatable;
  items?: IList[];
}

export type IKeyedList = IList & {
  key: string;
}
