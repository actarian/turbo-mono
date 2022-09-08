
import { IEquatable, ILocalizedString } from '@core';

export type IRoute = {
  id: IEquatable;
  schema: string;
  marketId: IEquatable;
  localeId: IEquatable;
  pageSchema: string;
  pageId: IEquatable;
};
