import type { IEquatable, INamedEntity } from '@core';

export interface IList extends INamedEntity {
  key?: string;
  listId?: IEquatable;
  items?: IList[];
}

export interface IKeyedList extends IList {
  key: string;
}
