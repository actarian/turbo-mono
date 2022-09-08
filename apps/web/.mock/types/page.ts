
import { IEquatable, ILocalizedString } from '@core';

export type IPage = {
  id: IEquatable;
  slug: string | ILocalizedString;
  title: ILocalizedString | string;
  abstract: ILocalizedString;
  description: ILocalizedString;
  image: string;
  categoryId: IEquatable;
  meta: any;
  schema: string;
  price?: number;
};
