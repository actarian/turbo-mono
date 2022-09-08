
import { IEquatable, ILocalizedString } from '@core';

export type IHomepage = {
  id: IEquatable;
  slug: string;
  title: ILocalizedString;
  abstract: ILocalizedString;
  description: ILocalizedString;
  image: string;
  categoryId: IEquatable;
  meta: any;
  schema: string;
};
