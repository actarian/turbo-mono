import { IEntity, IEquatable, ILocalizedString } from '@websolute/core';

export type ILabel = IEntity & {
  id: IEquatable;
  // schema?: string;
  text?: string | ILocalizedString;
};
