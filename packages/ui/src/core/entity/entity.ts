
export type IEquatable = number | string;

export type ILocalizedString = { [key: string]: string };

export interface ISchema {
  id: IEquatable;
  schema: string;
}

export interface IEntity extends ISchema {
  [key: string]: unknown;
}

export interface INamedEntity extends IEntity {
  name: string | ILocalizedString;
}

export interface ITitledEntity extends IEntity {
  title: string | ILocalizedString;
}
