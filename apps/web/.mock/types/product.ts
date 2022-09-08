
import { IEquatable, ILocalizedString } from '@core';

export type IProduct = {
  id: IEquatable;
  slug: string | ILocalizedString;
  title: string | ILocalizedString;
  abstract: ILocalizedString;
  description: ILocalizedString;
  image: string;
  price: number;
  categoryId: IEquatable;
  meta: any;
  schema: string;
};
