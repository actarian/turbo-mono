
import { IEquatable, ILocalizedString } from '@core';

export type IProduct_index = {
  id: IEquatable;
  slug: ILocalizedString;
  title: ILocalizedString;
  abstract: ILocalizedString;
  description: ILocalizedString;
  categoryId: IEquatable;
  meta: any;
  schema: string;
};
