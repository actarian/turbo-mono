
import { IEquatable, ILocalizedString } from '@core';

export type ITile = {
  id: IEquatable;
  categoryId: IEquatable;
  categoryName: string;
  title: string;
  abstract: string;
  image: string;
  href: string;
  finish: string;
  size: string;
  featureIds: any[];
  schema: string;
};
