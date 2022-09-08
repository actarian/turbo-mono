import type { IEntity, IEquatable, ILocalizedString } from '@core';

export interface ILabel extends IEntity {
  id: IEquatable;
  // schema?: string;
  text?: string | ILocalizedString;
}
